---
layout: post
title: stm-week1
card_title: stm week 1
excerpt: "from arduino to stm32"
url: /posts/stm-week1
math: true
tech_stack: [C/C++]
---

date: 2025-02-28

*Adapted from [^1]*

# Week 1: From Arduino to STM32

## Concepts  
### 1. Microcontroller Definition and Types
**Definition**: A microcontroller (MCU) is a compact integrated circuit designed to execute specific tasks in embedded systems. It combines a CPU, memory, and programmable I/O peripherals.

**Types**:
- **8-bit** (e.g., ATmega328 in Arduino Uno): Simple, low power.
- **32-bit** (e.g., STM32F4): Faster, complex operations.
- **Application-Specific** (e.g., ESP32 for Wi-Fi).

### 2. Architecture Components
**CPU**: Executes instructions. STM32 uses ARM Cortex-M cores.

**Memory**:
- **Flash**: Stores program code (e.g., 1MB in STM32F407).
- **RAM**: Temporary data storage (e.g., 192KB in STM32F407).

**GPIO**: Pins for digital input/output (e.g., PA0, PC13).  
**Interrupts**: Hardware-triggered events (e.g., button press).  
**Peripherals**: Timers, UART, SPI, I2C, ADC.

### 3. Boards Comparison

| **Feature**        | **Arduino**      | **STM32**          | **Raspberry Pi**   |
|--------------------|------------------|--------------------|--------------------|
| **Core**           | 8/16-bit AVR     | 32-bit ARM Cortex  | 64-bit ARM Linux   |
| **Speed**          | 16 MHz           | Up to 216 MHz      | 1.5 GHz+           |
| **Use Case**       | Prototyping      | Real-time systems  | General computing  |

### STM32 vs. Arduino
- **Architecture**: Arduino uses AVR/ARM microcontrollers with simplified abstractions. STM32 uses ARM Cortex-M cores with higher clock speeds (e.g., 72MHz vs. 16MHz on Arduino Uno).
- **Performance**: STM32 has more memory (e.g., 64KB Flash vs. 32KB) and peripherals (timers, ADCs, communication interfaces).
- **Toolchain**: Arduino uses Arduino IDE; STM32 requires STM32CubeIDE/Keil for code generation, compilation, and debugging.

### 4. Code Comparison

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

### 5. Workspace Navigation
- **MDK-ARM Directory**: Contains Keil project files.  
  - `standard_board_c`: Hardware Abstraction Layer (HAL) drivers.  
  - `chassis_task.c`: RTOS tasks for motor control.  

### 6. Toolchain Setup
1. **STM32CubeIDE**: Install from [ST Website](https://www.st.com).
2. **VSCode**: Install extensions for C/C++ and Git.
3. **Keil uVision**: Configure device packs for STM32.

## Project: STM32 blinking LED
**Objective**: Install STM32CubeIDE and program the STM32 to blink an LED.

### Instructions
1. **Install Software**:
   - Download [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html).
   - Install STM32CubeMX (bundled with IDE).

2. **Create Project**:
   - Launch STM32CubeIDE, click on *Start new STM32 project*.
   - Select your STM32 model (e.g., STM32F103C8Tx).

3. **Configure GPIO**:
   - In *Pinout & Configuration*, select a GPIO pin (e.g., PA5) → Set to *GPIO_Output*.

4. **Generate Code**:
   - Click *Generate Code* and open `main.c` in the IDE.

5. **Write Code**:
   - Replace the main loop with the example above.
```c  
#include "stm32f4xx_hal.h"  

int main(void) {  
  HAL_Init();  
  __HAL_RCC_GPIOA_CLK_ENABLE();  // Enable GPIOA clock  

  GPIO_InitTypeDef led = {  
    .Pin = GPIO_PIN_5,           // PA5 (onboard LED)  
    .Mode = GPIO_MODE_OUTPUT_PP, // Push-pull output  
    .Pull = GPIO_NOPULL,  
    .Speed = GPIO_SPEED_FREQ_LOW  
  };  
  HAL_GPIO_Init(GPIOA, &led);  

  while (1) {  
    HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);  
    HAL_Delay(500);  // 500ms delay  
  }  
}  
```  

6. **Build and Flash**:
   - Connect the STM32 via ST-Link.
   - Click *Run* to flash the program.


7. **GitHub Submission**:
```bash
git clone https://github.com/your-repo.git
git add .
git commit -m "Implemented 2Hz LED blink using STM32 HAL"
git push
```

## Questions

1. What is the role of Flash memory in an MCU?
2. What is the primary difference in architecture between Arduino Uno and STM32?
3. Which HAL function is used to introduce a delay in STM32?
4. What directory contains RTOS task definitions in the provided workspace?
5. List two advantages of STM32 over Arduino.
6. What is the purpose of `MX_GPIO_Init()` in STM32 code?

## Dictionary

- **HAL (Hardware Abstraction Layer)**: Library to abstract hardware operations for peripheral control (e.g., `HAL_GPIO_TogglePin()`).
- **GPIO**: General-Purpose Input/Output – configurable digital pins.
- **RTOS (Real-Time Operating System)**: Manages multiple tasks with timing guarantees (e.g., FreeRTOS).
- **Toolchain**: Set of tools for code development (STM32CubeIDE, compiler, debugger).
- **Interrupt**: Signal that pauses the CPU to handle an event.
- **Clock Speed**: Frequency at which the CPU executes instructions (e.g., 168MHz).

## Resources

1. [STM32CubeIDE Installation Guide](https://www.st.com)
2. [STM32CubeIDE Beginner Guide](https://www.youtube.com/watch?v=Hffw-m9fuxc)
3. [STM32 HAL Documentation Guide](https://www.reddit.com/r/stm32f4/comments/95406y/comment/e5ej2av/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
4. [Git Tutorial](https://git-scm.com/docs/gittutorial)
5. [ARM Cortex-M4 Manual](https://developer.arm.com/documentation/ddi0439/b/Introduction)
6. [FreeRTOS Beginner Guide](https://www.freertos.org/Documentation/01-FreeRTOS-quick-start/01-Beginners-guide/01-RTOS-fundamentals)

## Debugging

**LED Not Blinking**:
- Verify GPIO configuration in `MX_GPIO_Init()`.
- Check if the correct pin (e.g., PA5) is toggled.
- Verify `HAL_Delay` uses a configured timer (SysTick by default).
- Check `SystemClock_Config()` in `main.c` for correct clock source.

**Compilation Errors**:
- Ensure the board is in programming mode (BOOT0 pin high).
- Ensure HAL drivers are included in the project.

**ST-Link Connection Failed**:
- Reinstall drivers or try a different USB port.

**Flashing Failed**:
- Reconnect ST-Link and restart the IDE.

## Answers to Questions

1. Flash stores the compiled program code and read-only data.
2. STM32 uses ARM Cortex-M cores with higher clock speeds and more peripherals.
3. `HAL_Delay()`
4. `chassis_task.c`
5. Higher performance, more memory, advanced peripherals.
6. Initializes GPIO pins based on CubeMX configuration.

---

## Walkthrough  
### Step-by-Step Guide  
1. **Installation**:  
   - If drivers fail, install [ST-Link drivers](https://www.st.com/en/development-tools/stsw-link009.html).  

2. **Pin Configuration**:  
   - In CubeMX, navigate to *System Core* → *GPIO* → Select PA5 → Set mode to *Output Push Pull*.  

3. **Clock Configuration**:  
   - Ensure the HSE (external oscillator) is enabled for accurate timing.  

4. **Code Generation**:  
   - After generating code, locate `main.c` → Add the LED toggle logic inside the `while(1)` loop.  

5. **Debugging**:  
   - If the LED doesn’t blink:  
     - Check connections with a multimeter.  
     - Verify the pin in `GPIO_InitTypeDef` matches the hardware.  


---

## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->