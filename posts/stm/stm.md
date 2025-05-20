---
layout: post
title: stm
card_title: STM Learning Path
url: /posts/stm/stm
excerpt: From blinking LEDS in Arduino to a ROS2-integrated, vision-enabled autonomous robot in STM.
math: true
tech_stack: [STM, C/C++, ROS2]
date: 2025-02-24
---

*Adapted from [^1], [^2]*

# Robot Development Course Syllabus

**Target Audience:** Engineering undergrads with basic foundations who want to build a robot.

**Tools:** STM32CubeIDE, VSCode, FreeRTOS, ROS2, GitHub, OpenCV.

**Robot Platform:** STM32-based dual-C-board robot.

## Course Structure
Organized into **20 weeks**, progressing from foundational STM32 concepts to advanced robotic systems. Each week includes a hands-on project reinforcing theory. Weekly projects build into the final course project.

***

## Week 1: Microcontroller & STM32
- Definition of a microcontroller, types and architecture
- Basics of CPU, memory, GPIO, interrupts, and peripherals
- Difference between popular boards like Arduino, STM, and Pi
- STM32 families, registers, and toolchain
- Using STM32CubeIDE, configuring the board, and generating code
- Basic circuits in STM32 using buttons, diodes, transistors, and motors
- STM32F4 block diagram (clock tree, GPIO, DMA)

### Weekly Project
Generate a project in STM32CubeIDE to blink an LED using HAL. Include a button interrupt. Push code to GitHub with a `README.md`.

***

## Week 2: Clock & Power Management
- Configuring clock sources (HSI, HSE, PLL)
- Power modes: Run, Sleep, Stop
- Analyzing the `system_stm32f4xx.c` file for clock configuration

### Weekly Project
Modify the robot's clock to run at 168MHz using STM32CubeMX. Verify via oscilloscope using the `bsp_delay.c` module.

***

## Week 3: HAL/LL Libraries
- Peripheral initialization, GPIO control, and library structure
- Exploring the `stm32f4xx_hal_gpio.c` and `stm32f4xx_ll_gpio.c` files in the workspace

### Weekly Project
Rewrite the LED blinker using LL drivers `stm32f4xx_ll_gpio.c`. Compare HAL/LL execution cycles. Analyze HAL overhead with STM32CubeMonitor.

***

## Week 4: Motors & Drivers
- Motor types: DC, stepper, servo, brushed and brushless motors
- Stall current detection
- Motor transfer functions
- Driver ICs (A4988, TMC2209)
- H-bridges (L298N), PWM duty cycle, ESC control
- Feedback Systems: Encoders (quadrature) vs. potentiometers (for servo angle)
- API Design: Abstraction layers for motor control, version control

### Weekly Project
- Brushed DC Motor: Use `stm32f4xx_ll_tim.c` to generate PWM for an H-bridge. Vary speed via manual input.
- Servo Motor: Calibrate PWM pulses for 0°–180° sweep using `LL_TIM`.
- A unified API to control both motor types (e.g., `motor_set_angle()`, `motor_set_rpm()`).

***

## Week 5: Closed-Loop Motor Control
- Open vs. Closed Loop: Why feedback matters (load disturbances, voltage sag)
- Encoder basics, counts per revolution (CPR), calculating RPM/position
- Bang-Bang Control, simple on/off feedback
- Dead reckoning, basic open loop motion planning

### Weekly Project
- Brushed DC Motor: Use encoder feedback to rotate the wheel exactly 5 times, even if manually resisted.
- Servo Motor: Use a potentiometer (as position feedback) to hold a target angle against external forces.
- Characterize motor performance without PID (e.g., overshoot, settling time).

***

## Week 6: PID Implementation & Tuning
- PID Intuition: Proportional (stiffness), Integral (eliminate steady-state error), Derivative (damping)
- Ziegler-Nichols, relay feeedback, MATLAB PID Tuner
- Manual tweaking for actuator limits (max PWM %)
- Anti-Windup, integral saturation

### Weekly Project
- Stabilize wheel RPM under variable load (e.g., add weights). Plot PWM% vs. RPM with/without PID in STM32CubeMonitor.
- Implement position control for the turret servo. Track a moving target (e.g., joystick-controlled angle).
- Report the differences of PID performance to Week 5’s bang-bang approach.

***

## Week 7: Adaptive Control & MPC Primer
- Adaptive PID, gain scheduling based on operating conditions
- MPC Concepts, predict future states, handling constraints, multi-input systems
- Optimize control inputs (PWM) to minimize tracking error
- MPC`s computational limits on MCUs

### Weekly Project
- Simulation (MATLAB/Python): Use a pre-built DC motor model to compare PID vs. MPC for trajectory tracking.
- STM32 Implementation: Port a simplified MPC (e.g., 3-step horizon) for turret positioning. Use CMSIS-DSP for matrix math.
- Graph the MPC’s reduced overshoot vs. PID during aggressive maneuvers.

***

## Week 8: Multi-Protocol Sensor Hub
- UART, SPI, I2C characteristics
- Basic wired communication for sensor/motor interfacing
- CRC checks, packet framing (COBS, SLIP), DMA buffering
- Error handling for communication protocols (CRC checks, retry logic)

### Weekly Project
Interface BMP280 (I2C), ADXL345 (SPI), and UART GPS. Write a custom driver to fuse data into a single struct, add CRC-16, and stream via UART at 1Hz/10Hz (configurable). Simulate noise by shorting SDA/SCK lines; implement retry logic.

***

## Week 9: CAN Bus & Data Serialization
- CAN protocol and message framing
- Data packets in JSON/Protobuf
- CAN error handling (retries, bus-off recovery)

### Weekly Project
Transmit fused sensor data from Week 8 as Protobuf packets over CAN. Add priority-based message queuing (IMU data > GPS).

***

## Week 10: Power Management
- Battery monitoring and distribution
- Battery sag, supercapacitor charge/discharge curves
- Safety and smart power distribution, safe shutdown sequencing

### Weekly Project
- Monitor battery voltage/current via ADC. Trigger low-power mode at 3.6V, switch to supercapacitor at 3.3V.
- Simulate a fault (sudden 2A spike) and log recovery steps.

***

## Week 11: Debugging
- Oscilloscopes, logic analyzers, and multimeters
- Signal inspection
- Unit tests, simulation, and frameworks (Google Test, Ceedling)
- Hardware-in-the-loop (HIL) with Renode
- GitHub Actions CI/CD pipelines
- Concurrency pitfalls and race condition debugging
- MISRA-C compliance checks

### Weekly Project
- Capture PWM signals from `bsp_servo_pwm.c` using a scope. Diagnose signal integrity issues.
- Write a unit test for the PID controller in `pid.c` and motor drivers. Validate with HIL testing. Set up CI to run tests on push.

***

## Week 12: Remote Connection
- Wi-Fi/Bluetooth, network protocols (TCP/UDP), ethernet
- Latency management
- Joystick input parsing (HID/ADC)
- ROS2 introduction, setting up `rosbridge_suite`

### Weekly Project
Build a simple web dashboard displaying data from ROS2 topics to control and monitor your robot.

***

## Week 13: Robot Kinematics
- Differential drive kinematics (odometry, wheel slip)
- Chassis positioning and movement
- inverse kinematics for turret/gimbal movement

### Weekly Project
Program the chassis and gimbal to track separate movement inputs using `chassis_task.c` and `gimbal_task.c`.

***

## Week 14: Sensor Fusion
- Kalman filters, complementary filters for noise reduction
- IMU noise modeling, Allan variance, quantizing IMU noise with standard deviation
- Fusion with encoder/vision data, encoder CPR validation
- Sensor calibration

### Weekly Project
Fuse BMI088 IMU data with encoder readings for chassis odometry using `kalman_filter.c`.

***

## Week 15: RTOS Integration
- Difference between FreeRTOS, Zephyr, and ROS2
- Task scheduling, semaphores, and real-time constraints
- Implementing RTOS on a robot system with FreeRTOS

### Weekly Project
Create FreeRTOS tasks for motor control (high priority) and sensor polling (low priority). Bridge tasks to ROS2 using micro-ROS (share memory pools).

***

## Week 16: Vision System Integration
- OpenCV basics and camera calibration
- ML-based object detection with TensorFlow
- ROS2 frameworks for modular sensor pipelines

### Weekly Project
Detect a colored object with `vision.c` and publish coordinates over CAN.

***

## Week 17: Middleware Integration
- ROS2-FreeRTOS bridges (micro-ROS).
- Message brokers (MQTT), ROS2 nodes, and DDS
- Sensor integration through ROS2 and RTOS
- QoS settings for real-time control.

### Weekly Project
Publish motor speeds to ROS2 and subscribe to joystick topics.

***

## Week 18: Automated Aiming & Trajectories
- Ballistics modeling for angled shooting (gravity/wind compensation)
- Code implementation on automatic target detection and firing calculations
- Dynamic system coordination (e.g., turret stabilization while moving)

### Weekly Project
Implement projectile trajectory logic in `calculate.c` for angled shots.

***

## Week 19: Error Recovery States
- Watchdog timers (IWDG, WWDG) and safe modes
- Fault injection testing
- Graceful degradation (e.g., disable motors, enable brakes)
- Graceful error recovery with ROS2 lifecycle nodes
- Firmware updates and self-diagnostics

### Weekly Project
Design and test a recovery routine for motor faults in `detect_task.c`.

***

## Week 20: System Integration & Optimization
- Code profiling, memory management, and power/performance tradeoffs

### Final Project
Integrate vision, motor control, and trajectory systems into your robot. Navigate through the gym field, detect and hit targets with 80% accuracy.

***

## Credits

[^1]: Deepseek.
[^2]: ChatGPT.
<!--Written by Jorge Porras (2025)-->

draft
###################
## Week 13: ROS2 Essentials
- ROS2 nodes, topics, and DDS/Quality of Service (QoS)
- Micro-ROS for constrained devices

### Weekly Project
Port Week 8’s sensor hub to a ROS2 node. Publish data to `/sensors/imu`.

***

## Week 14: RTOS + ROS2 Integration
- Difference between FreeRTOS, Zephyr, and ROS2
- Task scheduling, semaphores, and real-time constraints
- Implementing RTOS on a robot system with FreeRTOS
- ROS2-FreeRTOS bridges (micro-ROS)
- Message brokers (MQTT), ROS2 nodes, and DDS
- Sensor integration through ROS2 and RTOS


### Weekly Project
- Create FreeRTOS tasks for motor control (high priority) and sensor polling (low priority).
- Bridge tasks to ROS2 using micro-ROS (share memory pools).

##################
