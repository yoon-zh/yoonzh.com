---
layout: post
title: stm
card_title: STM Learning Path
url: /posts/stm
excerpt: From blinking LEDS in Arduino to a ROS2-integrated, vision-enabled autonomous robot in STM.
math: true
tech_stack: [STM, C/C++, ROS2]
date: 2025-02-24
---

*Adapted from [^1]*

# Robot Development Course Syllabus

**Target Audience:** Engineering undergrads with basic foundations who want to build a robot.

**Tools:** STM32CubeIDE, VSCode, FreeRTOS, ROS2, GitHub, OpenCV.

**Robot Platform:** STM32-based dual-C-board robot.

## Course Structure
Organized into **20 weeks**, progressing from foundational STM32 concepts to advanced robotic systems. Each week includes a hands-on project reinforcing theory. Weekly projects build into the final course project.

---
## Week 1: Microcontroller architecture
- Definition of a microcontroller, types and architecture
- Basics of CPU, memory, GPIO, interrupts, and peripherals
- Difference between popular boards like Arduino, STM, and Pi

### Weekly Project
Install STM software and create a `Hello World` using your STM32.

---
## Week 2: Understanding STM32
- STM32 families, registers, and toolchain
- Using STM32CubeIDE, configuring the board, and generating code
- Basic circuits in STM32 using buttons, diodes, transistors, and motors
- STM32F4 block diagram (clock tree, GPIO, DMA)

### Weekly Project
Generate a project in STM32CubeIDE to blink an LED using HAL. Push code to GitHub with a `README.md` explaining the toolchain.

---
## Week 3: Clock & Power Management
- Configuring clock sources (HSI, HSE, PLL)
- Power modes: Run, Sleep, Stop
- Analyzing the `system_stm32f4xx.c` file for clock configuration

### Weekly Project
Modify the robot’s clock to run at 168MHz using STM32CubeMX. Verify via oscilloscope using the `bsp_delay.c` module.

---
## Week 4: HAL/LL libraries
- Peripheral initialization, GPIO control, and library structure
- Exploring the `stm32f4xx_hal_gpio.c` and `stm32f4xx_ll_gpio.c` files in the workspace

### Weekly Project
Rewrite the LED blinker using LL drivers `stm32f4xx_ll_gpio.c`. Compare HAL/LL execution cycles.

---
## Week 5: Motor Types & Drivers
- DC, stepper, servo motors; brushed vs. brushless motors
- Driver ICs (A4988, TMC2209), torque curves.
- H-bridges, PWM, and ESC control
- Reading and writing drivers for a motor
- Abstraction layers, encoder feedback, and API design
- Modifying `dm_motor_drv.c` to adjust motor parameters

### Weekly Project
Write a stepper motor driver using LL drivers (`stm32f4xx_ll_tim.c`) for precise movement. Test with exact angles (45°, 90°) to validate motor responsiveness.

---
## Week 6: PID Control Implementation
- PID theory, Ziegler-Nichols tuning.
- Closed-loop control for motor speed/position
- Double loops, open/closed loop difference

### Weekly Project
Stabilize motor RPM using the `pid.c` module. Plot real-time results.

---
## Week 7: Communication Protocols (UART, SPI, I2C)
- Basic wired communication for sensor/motor interfacing
- Data framing, buffering, and priority queues

### Weekly Project
Read temperature from an I2C sensor (e.g., BMP280 via `bsp_i2c.c`). Log data via UART using `bsp_usart.c`.

---
## Week 8: CAN Bus & Data Serialization
- CAN protocol and message framing
- Data in `yaml`, `xml`, `json`
- Data packets in JSON/Protobuf

### Weekly Project
Transmit motor speeds over CAN as JSON packets using `bsp_can.c`.

---
## Week 9: Power Management
- Battery monitoring and distribution
- Supercapacitor integration

### Weekly Project
Implement battery voltage tracking with `voltage_task.c`. Simulate low-power scenarios with Stop mode.

---
## Week 10: Hardware Debugging Tools
- Oscilloscopes, logic analyzers, and multimeters
- Signal inspection

### Weekly Project
Capture PWM signals from `bsp_servo_pwm.c` using a scope. Diagnose signal integrity issues.

---
## Week 11: Software Testing
- Unit tests, simulation, and frameworks (Google Test).
- Hardware-in-the-loop (HIL) with Renode.
- GitHub Actions CI/CD pipelines.

### Weekly Project
Write a unit test for the PID controller in `pid.c` and motor drivers. Validate with HIL testing. Set up CI to run tests on push.

---
## Week 12: Remote Connection
- Wi-Fi/Bluetooth, network protocols (TCP/UDP), and latency management
- Joystick input parsing (HID/ADC).
- Stream sensor data over Bluetooth using UART (`bsp_usart.c`).

### Weekly Project
Connect a joystick (USB/ADC) to STM32. Send PWM signals to motors via remote commands.

---
## Week 13: Robot Kinematics
- Differential drive kinematics (odometry, wheel slip).
- Chassis positioning and movement
- inverse kinematics for turret/gimbal movement

### Weekly Project
Program the chassis and gimbal to track separate joystick inputs using `chassis_task.c` and `gimbal_task.c`.

---
## Week 14: Sensor Fusion
- Kalman filters, complementary filters for noise reduction.
- IMU noise modeling (Allan variance).
- Fusion with encoder/vision data.

### Weekly Project
Fuse BMI088 IMU data with encoder readings for chassis odometry using `kalman_filter.c`.

---
## Week 15: RTOS Integration
- Difference between FreeRTOS and ROS2
- Task scheduling, semaphores, and real-time constraints
- Implementing RTOS on a robot system

### Weekly Project
Create two tasks: one for motor control (`dm_motor_drv.c`) and another for sensor polling

---
## Week 16: Vision System Integration
- OpenCV basics, camera calibration, and object detection
- ROS2 frameworks for modular sensor pipelines

### Weekly Project
Detect a colored object with `vision.c` and publish coordinates over CAN.

---
## Week 17: Middleware Integration
- ROS2-FreeRTOS bridges (micro-ROS).
- Message brokers (MQTT), ROS2 nodes, and DDS
- Sensor integration through ROS2 and RTOS
- QoS settings for real-time control.

### Weekly Project
Publish motor speeds to ROS2 and subscribe to joystick topics.

---
## Week 18: Automated Aiming & Trajectories
- Ballistics modeling for angled shooting (gravity/wind compensation)
- Code implementation on automatic target detection and firing calculations
- Dynamic system coordination (e.g., turret stabilization while moving)

### Weekly Project
Implement projectile trajectory logic in `calculate.c` for angled shots.

---
## Week 19: Error Recovery States
- Watchdog timers (IWDG, WWDG) and safe modes.
- Fault injection testing.
- Graceful degradation (e.g., disable motors, enable brakes).

### Weekly Project
Design a recovery routine for motor faults in `detect_task.c`.

---
## Week 20: System Integration & Optimization
- Code profiling, memory management, and power/performance tradeoffs

### Final Project
Integrate vision, motor control, and trajectory systems into your robot.

---
## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->