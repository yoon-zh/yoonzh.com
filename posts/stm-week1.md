---
layout: post
title: stm-week1
card_title: "STM Week 1: From Arduino to STM32"
excerpt: "Intro to microcontroller architecture, why STM32, and how to set up your workspace for it."
url: /posts/stm-week1
math: true
tech_stack: [STM]
date: 2025-03-02
---

*Adapted from [^1]*

# Concepts

## 1. Microcontroller Definition and Types
A microcontroller (MCU) is a compact integrated circuit designed to execute specific tasks in embedded systems. It combines a CPU, memory, and programmable I/O peripherals

Types:
- 8-bit (e.g., ATmega328 in Arduino Uno): Simple, low power
- 32-bit (e.g., STM32F4): Faster, complex operations
- Application-Specific (e.g., ESP32 for Wi-Fi)

## 2. Architecture Components
**CPU**: Executes instructions. STM32 uses ARM Cortex-M cores

**Memory**:
- **Flash**: Stores program code (e.g., 1MB in STM32F407)
- **RAM**: Temporary data storage (e.g., 192KB in STM32F407)

**GPIO**: Pins for digital input/output (e.g., PA0, PC13)

**Interrupts**: Hardware-triggered events (e.g., button press)

**Peripherals**: Timers, UART, SPI, I2C, ADC

## 3. Boards Comparison

| **Feature**        | **Arduino**      | **STM32**          | **Raspberry Pi**   |
|--------------------|------------------|--------------------|--------------------|
| **Core**           | 8/16-bit AVR     | 32-bit ARM Cortex  | 64-bit ARM Linux   |
| **Speed**          | 16 MHz           | Up to 216 MHz      | 1.5 GHz+           |
| **Use Case**       | Prototyping      | Real-time systems  | General computing  |

***

# Understanding STM32

## 1. STM32 Families
**Families**: STM32F0 (entry-level), STM32F4 (high-performance), STM32H7 (ultra-high performance). Differences lie in clock speed (up to 550MHz for H7), peripherals, and power efficiency

**Registers**: Low-level memory addresses controlling peripherals. For example, `GPIOA->ODR` directly writes to GPIO Port A's output data register

**Toolchain**:
- **STM32CubeIDE**: Integrated development environment with code generator
- **HAL/LL Libraries**: Hardware Abstraction Layer (HAL) simplifies peripheral control; Low-Layer (LL) offers register-level access
- **OpenOCD**: On-chip debugger for flashing code

## 2. STM32CubeIDE Workflow
**Project Creation**: Select MCU model (e.g., STM32F103C8T6), configure pins, generate code

**Clock Configuration**: Use the graphical clock tree to set HSI/HSE and PLL multipliers

**GPIO Modes**: Output push-pull, open-drain; input with pull-up/down resistors

## 3. Basic Circuits
**LED Circuit**: Connect LED to GPIO pin with a current-limiting resistor (220Ω). Ensure ground is shared with the STM32

**Button Input**: Use a pull-down resistor to avoid floating pins

## 4. STM32F4 Block Diagram
**Clock Tree**: Multiple sources (HSI, HSE) feed into PLL for core/peripheral clocks

**DMA**: Direct Memory Access for peripheral-to-memory transfers without CPU involvement

## 5. STM32 vs. Arduino
**Architecture**: Arduino uses AVR/ARM microcontrollers with simplified abstractions. STM32 uses ARM Cortex-M cores with higher clock speeds (e.g., 72MHz vs. 16MHz on Arduino Uno)

**Performance**: STM32 has more memory (e.g., 64KB Flash vs. 32KB) and peripherals (timers, ADCs, communication interfaces)

**Toolchain**: Arduino uses Arduino IDE; STM32 requires STM32CubeIDE/Keil for code generation, compilation, and debugging

## 6. Code Comparison

Arduino (Blink LED):
```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
```

STM32 (HAL Library in STM32CubeIDE):
```c
// In main.c
int main(void) {
  HAL_Init();
  SystemClock_Config();
  MX_GPIO_Init(); // Configures LED pin as output
  
  while (1) {
    HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
    HAL_Delay(500); // 2Hz blink
  }
}
```

## Toolchain Setup
1. **STM32CubeIDE/STM32CubeMX**: Install from [ST Website](https://www.st.com/en/development-tools/stm32-software-development-tools.html)
2. **VSCode**: Install extensions for C/C++
3. **Keil uVision**: Configure device packs for STM32
4. **Git**: Create an account on [GitHub](https://github.com) and install [Git](https://git-scm.com/downloads) on your terminal or VSCode

***

## Questions

1. What is the role of Flash memory in an MCU?
2. What is the primary difference in architecture between Arduino Uno and STM32?
3. Which HAL function is used to introduce a delay in STM32?
4. List two advantages of STM32 over Arduino.
5. What is the purpose of `MX_GPIO_Init()` in STM32 code?
6. What is the difference between HAL and LL libraries?
7. Which GPIO register sets pin mode (input/output)?
8. How do you enable a GPIO clock in HAL?
9. What’s the purpose of the STM32 clock tree?
10. Why use a pull-down resistor for a button?

***

# Project: STM32 blinking LED
Install STM32CubeIDE and program the STM32 to blink an LED

## Walkthrough
1. **Install Software**:
   - [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)
   - [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)
2. **Create Project**:
   - Launch STM32CubeIDE, click on *Start new STM32 project*
   - Select your STM32 model (e.g., STM32F103C8T6)
3. **Configure GPIO**:
   - In *Pinout & Configuration*, select a GPIO pin (e.g., PA5) → Set to *GPIO_Output*
4. **Generate Code**:
   - Click *Generate Code* and open `main.c` in the IDE
5. **Write Code**:
   - Write your code to toggle the LED pin as below:
```c
while (1) {
  HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
  HAL_Delay(500);  // 500ms delay
}
```
6. **Build and Flash**:
   - Connect the STM32 via ST-Link
   - Click *Run* to flash the program


7. **GitHub Submission**:
```bash
git init
git add .
git commit -m "Week 1 project: LED Blink"
git remote add origin <your-repo-url>
git push -u origin main
```


## Debugging

**Installation**:
- If drivers fail, install [ST-Link drivers](https://www.st.com/en/development-tools/stsw-link009.html)

**Pin Configuration**:
- In CubeMX, navigate to *System Core* → *GPIO* → Select PA5 → Set mode to *Output Push Pull*

**Clock Configuration**:
- Ensure the HSE (external oscillator) is enabled for accurate timing

**Code Generation**:
- After generating code, locate `main.c` → Add the LED toggle logic inside the `while(1)` loop

**LED Not Blinking**:
- Check connections with a multimeter
- Verify GPIO configuration in `MX_GPIO_Init()`
- Check if the correct pin (e.g., PA5) is toggled
- Verify `HAL_Delay` uses a configured timer (SysTick by default)
- Check `SystemClock_Config()` in `main.c` for correct clock source

**Compilation Errors**:
- Ensure the board is in programming mode (BOOT0 pin high)
- Ensure HAL drivers are included in the project

**ST-Link Connection Failed**:
- Reinstall drivers or try a different USB port

**Flashing Failed**:
- Reconnect ST-Link and restart the IDE


## Dictionary

- **HAL (Hardware Abstraction Layer)**: Library to abstract hardware operations for peripheral control (e.g., `HAL_GPIO_TogglePin()`)
- **GPIO**: General-Purpose Input/Output – configurable digital pins
- **RTOS (Real-Time Operating System)**: Manages multiple tasks with timing guarantees (e.g., FreeRTOS)
- **Toolchain**: Set of tools for code development (STM32CubeIDE, compiler, debugger)
- **Interrupt**: Signal that pauses the CPU to handle an event
- **CMSIS**: Cortex Microcontroller Software Interface Standard
- **Clock Tree**: System of clock sources and multipliers
- **DMA**: Direct Memory Access (peripheral-to-memory transfers)
- **Clock Speed**: Frequency at which the CPU executes instructions (e.g., 168MHz)


## Resources

1. [Book: Mastering STM32](https://www.embedic.com/uploads/files/20201008/Mastering%20STM32.pdf?srsltid=AfmBOopP2ohnXIMIrm6YGQYa0jq9Qj6gulZp-r_MR4B31VK5ONyLhnTD)
2. [STM32CubeIDE Beginner Guide](https://www.youtube.com/watch?v=Hffw-m9fuxc)
3. [STM32 HAL Documentation Guide](https://www.reddit.com/r/stm32f4/comments/95406y/comment/e5ej2av/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
4. [Git Tutorial](https://git-scm.com/docs/gittutorial)
5. [ARM Cortex-M4 Manual](https://developer.arm.com/documentation/ddi0439/b/Introduction)
6. [STM32F103xB Manual](https://www.st.com/resource/en/datasheet/cd00161566.pdf)
7. [Bare Metal Programming Series](https://www.youtube.com/watch?v=uQQsDWLRDuI&list=PLP29wDx6QmW7HaCrRydOnxcy8QmW0SNdQ)


## Answers to Questions

1. Flash stores the compiled program code and read-only data
2. STM32 uses ARM Cortex-M cores with higher clock speeds and more peripherals
3. `HAL_Delay()`
4. Higher performance, more memory, advanced peripherals
5. Initializes GPIO pins based on CubeMX configuration
6. HAL abstracts hardware with high-level functions; LL provides direct register access for optimization
7. `GPIOx_MODER` (Mode Register)
8. `__HAL_RCC_GPIOA_CLK_ENABLE()` for Port A
9. To configure clock sources (HSI/HSE) and distribute clocks to peripherals
10. To prevent floating input when the button is unpressed

***

## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->