---
layout: post
title: stm-week1
card_title: stm week 1
excerpt: "from arduino to stm32"
url: /posts/stm-week1
math: true
tech_stack: [C/C++]
date: 2025-02-18
---

*Adapted from [^1]*

# Week 1: From Arduino to STM32

## Key Concepts Explained

### 1. STM32 vs. Arduino
- **Architecture**: Arduino uses AVR/ARM microcontrollers with simplified abstractions. STM32 uses ARM Cortex-M cores with higher clock speeds (e.g., 72MHz vs. 16MHz on Arduino Uno).
- **Performance**: STM32 has more memory (e.g., 64KB Flash vs. 32KB) and peripherals (timers, ADCs, communication interfaces).
- **Toolchain**: Arduino uses Arduino IDE; STM32 requires STM32CubeIDE/Keil for code generation, compilation, and debugging.

### Code Comparison

Arduino (Blink LED):
```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
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
    HAL_Delay(500); // 2Hz blink (500ms on/off)
  }
}
```

### 2. Workspace Navigation
- **MDK-ARM Directory**: Contains Keil project files.  
  - `standard_board_c`: Hardware Abstraction Layer (HAL) drivers.  
  - `chassis_task.c`: RTOS tasks for motor control.  

### 3. Toolchain Setup
1. **STM32CubeIDE**: Install from [ST Website](https://www.st.com).
2. **VSCode**: Install extensions for C/C++ and Git.
3. **Keil uVision**: Configure device packs for STM32.

## Mini Exercises

1. **Blink Rate Modification**  
   - Open `bsp_led.c` in Keil. Change `HAL_Delay(1000)` to `HAL_Delay(250)` to blink at 4Hz.
   - *Tip*: Use `HAL_GPIO_TogglePin()` instead of separate `HAL_GPIO_WritePin` calls.

2. **Explore STM32CubeIDE**
   - Create a new project for your STM32 board. Locate the GPIO configuration tab.

## Project Walkthrough

### Blink LED at 2Hz Using STM32CubeIDE
1. **Create Project**:
   - Open STM32CubeIDE → New STM32 Project → Select your microcontroller.
   - Configure LED GPIO (e.g., PA5) as Output in the Pinout view.

2. **Generate Code**:
   - Click "Generate Code" to create boilerplate.

3. **Modify `main.c`**:
```c
// Inside the infinite loop in main.c
while (1) {
  HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
  HAL_Delay(500); // 500ms delay for 2Hz
}
```

4. **Build and Flash**:
   - Click the hammer icon to compile. Connect your STM32 via ST-Link.
   - Click the "Run" button to flash the code.

5. **GitHub Submission**:
```bash
git clone https://github.com/your-repo.git
git add .
git commit -m "Implemented 2Hz LED blink using STM32 HAL"
git push
```

## Questions

1. What is the primary difference in architecture between Arduino Uno and STM32?
2. Which HAL function is used to introduce a delay in STM32?
3. What directory contains RTOS task definitions in the provided workspace?
4. List two advantages of STM32 over Arduino.
5. What is the purpose of `MX_GPIO_Init()` in STM32 code?

## Dictionary

- **HAL (Hardware Abstraction Layer)**: Library to abstract hardware operations (e.g., `HAL_GPIO_TogglePin()`).
- **RTOS (Real-Time Operating System)**: Manages multiple tasks with timing guarantees (e.g., FreeRTOS).
- **Toolchain**: Set of tools for code development (STM32CubeIDE, compiler, debugger).
- **GPIO**: General-purpose input/output pin.

## Resources

1. [STM32CubeIDE Installation Guide](https://www.st.com)
2. [STM32 HAL Documentation](https://www.st.com/en/embedded-software/stm32cube-mcu-packages.html)
3. [Git Tutorial](https://git-scm.com/docs/gittutorial)

## Debugging

- **LED Not Blinking**:
  - Verify GPIO configuration in `MX_GPIO_Init()`.
  - Check if the correct pin (e.g., PA5) is toggled.
- **Compilation Errors**:
  - Ensure HAL drivers are included in the project.
- **Flashing Failed**:
  - Reconnect ST-Link and restart the IDE.

## Answers to Questions

1. STM32 uses ARM Cortex-M cores with higher clock speeds and more peripherals.
2. `HAL_Delay()`
3. `chassis_task.c`
4. Higher performance, more memory, advanced peripherals.
5. Initializes GPIO pins based on CubeMX configuration.

---
## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->