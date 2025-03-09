---
layout: post
title: stm-week4
card_title: "STM Week 4: Motors & Drivers"
excerpt: "Quick guide on motors, types, which to pick for your projects, and how to implement their code."
url: /posts/stm-week4
math: true
tech_stack: [C/C++]
date: 2025-03-09
---

date: 2025-03-04

*Adapted from [^1]*

DRAFT

# Concepts

## 1. Motor Types
**Brushed DC Motors**:
- Use brushes for commutation
- Simple, cheap, but require maintenance
- Speed controlled by PWM voltage; direction by reversing polarity (H-bridge)

**Brushless DC (BLDC)**:
- Electronically commutated (ESC required)
- Efficient, high-speed

**Stepper Motors**:
- Move in discrete steps (e.g., 1.8° per step)
- Used for precise positioning

**Servo Motors**:
- Integrated control circuit + motor
- Accepts PWM pulses (1–2ms pulse width) for angular control (0°–180°)

## 2. Stall Current Detection
- When a motor is mechanically blocked, current spikes ("stall current")
- Detected via a shunt resistor or current sensor (e.g., ACS712). Critical for overload protection

## 3. Motor Transfer Functions
Mathematical model: 

$$\frac{\omega(s)}{V(s)} = \frac{K}{(Ls + R)(Js + b)}$$

Where $$\omega$$ is angular velocity, and $$V$$ the input voltage

Simplified, this helps design PID controllers for speed/position

## 4. Driver ICs & H-Bridges
**L298N (H-Bridge)**
- Controls DC motor direction/speed
- `IN1/IN2` pins set direction; `EN` pin uses PWM for speed

**A4988/TMC2209**:
- Stepper motor drivers
- Use STEP/DIR signals
- TMC2209 offers quieter operation

**PWM Duty Cycle**:
- Duty cycle (%) = (CCR / ARR) * 100
- Controls average voltage to motor

## 5. Feedback Systems
**Quadrature Encoders**:
- Two-phase output to track direction and position (e.g., 1000 PPR)

**Potentiometers**:
- Used in servos for closed-loop angle feedback

## 6. API Design & Version Control
**Abstraction Layer**:
- Create functions like `motor_init()`, `motor_set_speed()`, `motor_set_angle()` to hide hardware details

**Version Control**:
- Use Git (plus different branches) to track code changes

***

# Weekly Project Implementation
## 1. Brushed DC Motor with H-Bridge (L298N)
Hardware Setup:
- Connect L298N `IN1`, `IN2` to STM32 GPIOs (e.g., PA0, PA1)
- Connect `EN` pin to PWM output (e.g., TIM2_CH1 on PA5)
- Power motor from external supply (not STM32's 5V)

### STM32 Code

```c
// PWM Setup (TIM2, 1kHz frequency)
LL_TIM_InitTypeDef tim_init = {0};
tim_init.Prescaler = 79; // 80 MHz / (79+1) = 1 MHz
tim_init.CounterMode = LL_TIM_COUNTERMODE_UP;
tim_init.Autoreload = 999; // 1 MHz / 1000 = 1 kHz
LL_TIM_Init(TIM2, &tim_init);
LL_TIM_EnableARRPreload(TIM2);
LL_TIM_OC_SetCompareCH1(TIM2, 500); // 50% duty (CCR=500)
LL_TIM_EnableCounter(TIM2);
LL_TIM_EnableAllOutputs(TIM2);

// GPIO Direction Control (IN1=HIGH, IN2=LOW)
LL_GPIO_SetOutputPin(GPIOA, LL_GPIO_PIN_0);
LL_GPIO_ResetOutputPin(GPIOA, LL_GPIO_PIN_1);

// Adjust speed via PWM duty cycle
void set_motor_speed(uint32_t duty) {
  LL_TIM_OC_SetCompareCH1(TIM2, duty * 10); // duty 0-100 maps to 0-1000 ARR
}
```

## 2. Servo Motor Calibration
Hardware Setup: Servo signal pin to STM32 PWM output (e.g., TIM3_CH1 on PA6)

### STM32 Code:

```c
// Servo PWM (50Hz, 20ms period)
LL_TIM_InitTypeDef tim_init = {0};
tim_init.Prescaler = 15999; // 80 MHz / (15999+1) = 5 KHz
tim_init.CounterMode = LL_TIM_COUNTERMODE_UP;
tim_init.Autoreload = 99; // 5 KHz / 100 = 50 Hz (20ms)
LL_TIM_Init(TIM3, &tim_init);
LL_TIM_OC_SetCompareCH1(TIM3, 5); // 1ms pulse (0°)
LL_TIM_EnableCounter(TIM3);

// Set servo angle (0°–180°)
void set_servo_angle(uint8_t angle) {
  uint32_t ccr = 5 + (angle * 10) / 180; // 5 (0°) to 25 (180°)
  LL_TIM_OC_SetCompareCH1(TIM3, ccr);
}
```

## 3. Unified Motor API

### Example Header File (`motor.h`):

```c
typedef enum { MOTOR_DC, MOTOR_SERVO } MotorType;

typedef struct {
  MotorType type;
  TIM_TypeDef *timer;
  uint32_t channel;
  GPIO_TypeDef *gpio1, *gpio2;
  uint32_t pin1, pin2;
} Motor;

void motor_init(Motor *m);
void motor_set_speed(Motor *m, int speed); // For DC
void motor_set_angle(Motor *m, int angle); // For Servo
```

### Example Usage

```c
Motor dc_motor = {MOTOR_DC, TIM2, LL_TIM_CHANNEL_CH1, GPIOA, GPIOA, LL_GPIO_PIN_0, LL_GPIO_PIN_1};
Motor servo = {MOTOR_SERVO, TIM3, LL_TIM_CHANNEL_CH1, NULL, NULL, 0, 0};

motor_init(&dc_motor);
motor_init(&servo);

motor_set_speed(&dc_motor, 70); // 70% speed
motor_set_angle(&servo, 90); // 90° position
```

### Critical Steps
1. **Timer Configuration**:
   - Use CubeMX or manual LL code to set PWM frequency (1kHz for DC, 50Hz for servo)
   - Enable GPIO clocks and timer clocks (`LL_AHB1_GRP1_EnableClock` / `LL_APB1_GRP1_EnableClock`)
2. **H-Bridge Wiring**:
   - Double-check L298N connections (motor power ≠ STM32 power)
3. **Testing**:
   - Test PWM with an LED before connecting motors
   - Use a logic analyzer or oscilloscope to verify pulse widths


DRAFT

https://www.engr.siu.edu/staff/spezia/Web438A/Lecture%20Notes/lesson14et438a.pdf

https://ctms.engin.umich.edu/CTMS/index.php?example=MotorSpeed&section=SystemModeling

https://www.reddit.com/r/ControlTheory/comments/1agwhvi/finding_transfer_function_for_dc_motor/



- Driver ICs (A4988, TMC2209)
- H-bridges, PWM, and ESC control
- Reading and writing drivers for a motor
- Abstraction layers, encoder feedback, and API design

week 9 https://books-library.net/files/books-library.net-07281709Ee1R6.pdf

[FreeRTOS Beginner Guide](https://www.freertos.org/Documentation/01-FreeRTOS-quick-start/01-Beginners-guide/01-RTOS-fundamentals)


***

## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->