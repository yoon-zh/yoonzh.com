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

## Week 1: Microcontroller architecture
- Definition of a microcontroller, types and architecture
- Basics of CPU, memory, GPIO, interrupts, and peripherals
- Difference between popular boards like Arduino, STM, and Pi

### Weekly Project
Use GPIO interrupts to toggle an LED when a button is pressed. Modify `bsp_led.c` and `bsp_button.c` to handle edge-triggered interrupts.

## Week 2: Understanding STM32
- STM32 families, registers, and toolchain
- Using STM32CubeIDE, configuring the board, and generating code
- Basic circuits in STM32 using buttons, diodes, transistors, and motors
- STM32F4 block diagram (clock tree, GPIO, DMA)

### Weekly Project
Generate a project in STM32CubeIDE to blink an LED using HAL. Push code to GitHub with a `README.md` explaining the toolchain


## Week 3: Clock & Power Management
- Configuring clock sources (HSI, HSE, PLL)
- Power modes: Run, Sleep, Stop
- Analyzing the `system_stm32f4xx.c` file for clock configuration

### Weekly Project
Modify the robot’s clock to run at 168MHz using STM32CubeMX. Verify via oscilloscope using the `bsp_delay.c` module


## Week 4: HAL/LL libraries
- Peripheral initialization, GPIO control, and library structure
- Exploring the `stm32f4xx_hal_gpio.c` and `stm32f4xx_ll_gpio.c` files in the workspace

### Weekly Project
Rewrite the LED blinker using LL drivers `stm32f4xx_ll_gpio.c`. Compare HAL/LL execution cycles.


## Week 5: Motor Types & Drivers
- DC, stepper, servo motors; brushed vs. brushless motors
- H-bridges, PWM, and ESC control
- Reading and writing drivers for a motor
- Abstraction layers, encoder feedback, and API design
- Modifying `dm_motor_drv.c` to adjust motor parameters

### Weekly Project
Drive a motor at variable speeds using PWM from `bsp_servo_pwm.c`. Test with `dm_motor_drv.c` to validate motor responsiveness.

## Week 6: PID Control Implementation
- PID theory, Ziegler-Nichols tuning.
- Closed-loop control for motor speed/position
- Double loops, open/closed loop difference

### Weekly Project
Stabilize motor RPM using the `pid.c` module. Plot real-time results.

## Week 7: Communication Protocols (UART, SPI, I2C)
- Basic wired communication for sensor/motor interfacing
- Data framing, buffering, and priority queues

### Weekly Project
Read temperature from an I2C sensor (e.g., BMP280 via `bsp_i2c.c`). Log data via UART using `bsp_usart.c`

## Week 8: CAN Bus & Data Serialization
- CAN protocol and message framing
- Data in `yaml`, `xml`, `json`
- Data packets in JSON/Protobuf

### Weekly Project
Transmit motor speeds over CAN as JSON packets using `bsp_can.c`

## Week 9: Power Management
- Battery monitoring and distribution
- Supercapacitor integration

### Weekly Project
Implement battery voltage tracking with `voltage_task.c`. Simulate low-power scenarios with Stop mode

## Week 10: Hardware Debugging Tools
- Oscilloscopes, logic analyzers, and multimeters
- Signal inspection

### Weekly Project
Capture PWM signals from bsp_servo_pwm.c using a scope. Diagnose signal integrity issues

## Week 11: Software Testing
- Unit tests, simulation, and hardware-in-the-loop (HIL)

### Weekly Project
Write a unit test for the PID controller in `pid.c`. Validate with hardware-in-the-loop testing.

## Week 12: Remote Connection
- Wi-Fi/Bluetooth, network protocols (TCP/UDP), and latency management
- Stream sensor data over Bluetooth using UART (bsp_usart.c).

### Weekly Project
Connect a remote controller to your robot

## Week 13: Robot Kinematics
- Chassis positioning and movement
- inverse kinematics for turret/gimbal movement

### Weekly Project
Program the gimbal to track a joystick input using `gimbal_task.c` and `bsp_rc.c`

## Week 14: Kalman Filters
- Sensor fusion (IMU + vision) for noise reduction

### Weekly Project
Fuse accelerometer/gyro data from `bmi088driver.c` using `kalman_filter.c`

## Week 15: RTOS Integration
- Difference between FreeRTOS and ROS2
- Task scheduling, semaphores, and real-time constraints
- Implementing RTOS on a robot system

### Weekly Project
Create two tasks: one for motor control (`dm_motor_drv.c`) and another for sensor polling

## Week 16: Vision System Integration
- OpenCV basics, camera calibration, and object detection
- ROS2 frameworks for modular sensor pipelines

### Weekly Project
Detect a colored object with `vision.c` and publish coordinates over CAN.

## Week 17: Middleware Integration
- Message brokers (MQTT), ROS2 nodes, and DDS
- Sensor integration through ROS2 and RTOS

### Weekly Project
Publish IMU data to a ROS2 topic via USB-CDC (`usbd_cdc_if.c`)

## Week 18: Automated Aiming & Trajectories
- Ballistics modeling for angled shooting (gravity/wind compensation)
- Code implementation on automatic target detection and firing calculations
- Dynamic system coordination (e.g., turret stabilization while moving)

### Weekly Project
Implement projectile trajectory logic in `calculate.c` for angled shots.

## Week 19: Error Recovery States
- Fault detection, safe modes, and watchdog timers

### Weekly Project
Design a recovery routine for motor faults in `detect_task.c`.

## Week 20: System Integration & Optimization
- Code profiling, memory management, and power/performance tradeoffs

### Final Project
Integrate vision, motor control, and trajectory systems into your robot. 

## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->