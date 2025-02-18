---
layout: post
title: stm
card_title: stm learning path
url: /posts/stm
excerpt: from arduino blinking LEDs to a ROS2-integrated, vision-enabled autonomous robot
math: true
tech_stack: [ROS2, C/C++, STM]
---

*Adapted from [^1]*

# Robot Development Course Syllabus

**Target Audience:** Engineering undergrads

**Tools:** STM32CubeIDE, VSCode, Keil uVision, GitHub.

**Robot Platform:** STM32-based dual-C-board robot.

## Course Structure
Organized into **20 weeks**, progressing from foundational STM32 concepts to advanced robotic systems. Each week includes a hands-on project reinforcing theory.  


## Week 1: From Arduino to STM32

- STM32 vs. Arduino: Architecture, performance, and toolchain differences.  
- Workspace navigation: Understanding the provided `MDK-ARM` directory structure (e.g., HAL files in `standard_board_c`, RTOS tasks in `chassis_task.c`).  
- Setting up STM32CubeIDE, VSCode, and Keil uVision.  
- Flashing a "Blink LED" program using STM32 HAL.  

### Sample Project

Modify the existing `bsp_led.c` code to blink an LED at 2Hz. Use Keil to compile and debug.  
Push the modified code to a GitHub repository with a descriptive commit message.  

## **Week 2: STM32 Architecture & HAL/LL Libraries**  

- STM32F4 block diagram (clock tree, GPIO, DMA).  
- HAL vs. LL: When to use each (e.g., HAL for rapid prototyping, LL for performance-critical tasks).  
- Exploring the `stm32f4xx_hal_gpio.c` and `stm32f4xx_ll_gpio.c` files in the workspace.  

### Sample Project

Rewrite the Week 1 LED blinker using LL drivers instead of HAL. Measure the performance difference using Keil’s debugger.  

## Week 3: Clock & Power Management

- Configuring clock sources (HSI, HSE, PLL).  
- Power modes: Run, Sleep, Stop.  
- Analyzing the `system_stm32f4xx.c` file for clock configuration.  

### Sample Project
Modify the robot’s clock to run at 168MHz using STM32CubeMX. Verify via oscilloscope using the `bsp_delay.c` module.  

## Week 4: RTOS Integration with FreeRTOS

- Task scheduling, queues, and semaphores.  
- Exploring the `freertos.c` and `chassis_task.c` files.  

### Sample Project
Create two FreeRTOS tasks: one to blink an LED and another to print "Hello World" via UART using `bsp_usart.c`.  

## Week 5: Communication Protocols (I2C, SPI)

- I2C/SPI protocol breakdown.  
- Reading the `bsp_i2c.c` and `bsp_spi.c` drivers.  

### Sample Project
Read temperature data from an I2C sensor (e.g., BMP280) and log it via UART.  

## Week 6: CAN Bus & Data Serialization

- CAN message framing, arbitration, and prioritization.  
- Using `bsp_can.c` to send/receive motor commands.  
- Serialization with Protobuf/JSON.  

### Sample Project
Transmit a struct containing motor speeds over CAN using JSON encoding.  

## Week 7: Motor Control & Drivers

- Brushed vs. brushless motors.  
- PWM signals and H-bridge drivers.  
- Modifying `dm_motor_drv.c` to adjust motor parameters.  

### Sample Project
Drive a motor at 50% speed using PWM from `bsp_servo_pwm.c`.  

## Week 8: PID Implementation & Tuning

- PID theory, Ziegler-Nichols tuning.  
- Analyzing the `pid.c` module.  

### Sample Project
Implement a PID controller to stabilize a motor’s RPM. Plot results using Keil’s logic analyzer.  

## Week 9: Kinematics for Gimbal Positioning

- Forward/inverse kinematics for 2-DOF gimbals.  
- Modifying `gimbal_task.c` to adjust yaw/pitch angles.  

### Sample Project
Program the gimbal to track a moving point using joystick input from `bsp_rc.c`.  

## Week 10: IMU Integration & Kalman Filters

- IMU data fusion (accelerometer, gyro).  
- Kalman filtering in `kalman_filter.c`.  

### Sample Project
Fuse BMI088 data (`bmi088driver.c`) to estimate robot tilt.  

## Week 11: ROS2 Middleware Integration

- ROS2 nodes, topics, and services.  
- Bridging STM32 and ROS2 via UART/USB (`usbd_cdc_if.c`).  

### Sample Project
Publish IMU data from the STM32 to a ROS2 topic.  

## Week 12: Vision System & OpenCV

- Camera interfacing, object detection.  
- Using `vision.c` to process images.  

### Sample Project
Detect a red ball using a camera and send its coordinates over CAN.  

## Week 13: Error Recovery & State Machines

- Designing fault-tolerant state machines.  
- Exploring `detect_task.c` for error handling.  

### Sample Project
Implement a recovery routine for motor overheating errors.  

## Week 14-16: System Integration

- Combining motor control, sensors, and ROS2.  
- Power budgeting with supercapacitors (`voltage_task.c`).  

### Sample Project
Autonomous target tracking: Use vision data to aim the gimbal while moving the chassis.  

## Week 17-20: Final Project
**Objective**  
Build a robot that autonomously navigates to a waypoint, identifies a target with vision, and shoots a projectile using trajectory calculation (`calculate.c`).  

**Milestones**  
- Week 17: Chassis movement + odometry.  
- Week 18: Vision-based target detection.  
- Week 19: Trajectory calculation for angled shots.  
- Week 20: Integration and competition.  


## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->