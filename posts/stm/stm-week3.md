---
layout: post
title: stm-week3
card_title: "STM Week 3: HAL/LL Libraries"
excerpt: "STM has two main drivers for their boards: HAL and LL. Check out what they are and how to use them in a beginner level."
url: /posts/stm/stm-week3
math: true
tech_stack: [C/C++]
date: 2025-03-08
---

*Adapted from [^1]*

# Concepts

## 1. HAL (Hardware Abstraction Layer)
A middleware library that abstracts hardware complexity, providing portable APIs for peripheral control (e.g., `HAL_GPIO_WritePin()`)

Structure:
- **Modular**: Each peripheral (GPIO, UART, TIM) has dedicated `.c/.h` files (e.g., `stm32f4xx_hal_gpio.c`)
- **Callbacks**: Event-driven design (e.g., `HAL_GPIO_EXTI_Callback()` for interrupts)
- **Overhead**: Includes error checks, state management, and generic initialization

## 2. LL (Low-Layer) Libraries
Lightweight, register-level drivers for direct hardware access with minimal overhead

Structure:
- **Direct Register Access**: Functions map to hardware registers (e.g., `LL_GPIO_SetOutputPin()` writes directly to `GPIOx->BSRR`)
- **No State Management**: Stateless functions for maximum speed
- **CMSIS-Compliant**: Built on top of CMSIS-Core for ARM Cortex-M

## 3. HAL vs. LL Comparison

| **Feature**          | **HAL**                               | **LL**                          |  
|----------------------|---------------------------------------|---------------------------------|  
| **Abstraction**      | High (portable across STM32 families) | Low (device-specific)           |  
| **Code Size**        | Larger (boilerplate code)             | Smaller                         |  
| **Execution Speed**  | Slower (overhead from checks)         | Faster (direct register access) |  
| **Use Case**         | Rapid prototyping                     | Time-critical applications      |  

***

## Examples

### 1. HAL GPIO Toggle
```c  
// HAL: Toggle LED on PA5
HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_SET);
HAL_Delay(500);
HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_RESET);
HAL_Delay(500);
```

### 2. LL GPIO Toggle
```c
// LL: Toggle LED on PA5
LL_GPIO_SetOutputPin(GPIOA, LL_GPIO_PIN_5);
LL_mDelay(500);
LL_GPIO_ResetOutputPin(GPIOA, LL_GPIO_PIN_5);
LL_mDelay(500);
```

### 3. Button Interrupt with LL
```c
// LL EXTI Configuration (in MX_GPIO_Init)
LL_EXTI_InitTypeDef EXTI_InitStruct = {0};
EXTI_InitStruct.Line_0_31 = LL_EXTI_LINE_0; // PA0
EXTI_InitStruct.Mode = LL_EXTI_MODE_IT;
EXTI_InitStruct.Trigger = LL_EXTI_TRIGGER_RISING;
EXTI_InitStruct.LineCommand = ENABLE;
LL_EXTI_Init(&EXTI_InitStruct);

// Enable NVIC Interrupt
NVIC_SetPriority(EXTI0_IRQn, 0);
NVIC_EnableIRQ(EXTI0_IRQn);

// Interrupt Handler (in stm32f4xx_it.c)
void EXTI0_IRQHandler(void) {
  if (LL_EXTI_IsActiveFlag_0_31(LL_EXTI_LINE_0)) {
    LL_EXTI_ClearFlag_0_31(LL_EXTI_LINE_0);
    // Toggle LED
    LL_GPIO_TogglePin(GPIOA, LL_GPIO_PIN_5);
  }
}
```

## Questions

1. Why is LL faster than HAL?
2. How do you enable an EXTI interrupt in LL?
3. What is the HAL function equivalent to `LL_GPIO_SetOutputPin()`?
4. How to measure HAL overhead?

***

# Project: LED Blinker with LL Drivers
Rewrite the LED Blinker from Week 1 to use LL instead of HAL.
- Replace HAL with LL for GPIO and delay functions
- Implement a button interrupt using LL EXTI
- Compare HAL/LL execution cycles using STM32CubeMonitor

## Steps
1. Create a New Project in STM32CubeIDE:
  - Select your STM32F4 board
  - In Project Manager > Advanced Settings, set `GPIO` and `EXTI` to `LL`
  - Generate code

2. Implement LED Blinking with LL:
  - Replace `HAL_GPIO_WritePin()` with `LL_GPIO_Set/ResetOutputPin()`
  - Use `LL_mDelay()` for delays

3. Configure Button Interrupt with LL:
  - Use `LL_EXTI_Init()` to set up PA0 as an interrupt source
  - Enable the NVIC interrupt

4. Measure Execution Cycles:
  - Use `LL_GPIO_TogglePin()` in a loop without delays
  - Connect STM32CubeMonitor to measure GPIO toggling frequency

5. Analyze HAL Overhead:
  - Compare the toggle frequency between HAL and LL implementations

***

## Walkthrough
### Step 1: CubeMX Configuration
1. Open CubeMX and create a new project for your STM32F4 board
2. Navigate to System Core > GPIO
   - Set PA5 as `LL_GPIO Output`
   - Set PA0 as `LL_EXTI_GPIO`
3. In `NVIC Settings`, enable `EXTI0 interrupt`

### Step 2: Code
1. In `main.c`, replace HAL delays with LL:
```c
// Replace HAL_Delay with LL_mDelay
LL_mDelay(500);
```

2. Implement the button interrupt handler in `stm32f4xx_it.c`:
```c
void EXTI0_IRQHandler(void) {
  if (LL_EXTI_IsActiveFlag_0_31(LL_EXTI_LINE_0)) {
    LL_EXTI_ClearFlag_0_31(LL_EXTI_LINE_0);
    LL_GPIO_TogglePin(GPIOA, LL_GPIO_PIN_5);
  }
}
```

### Step 3: Measuring Performance
1. Add a debug pin (e.g., PA6) and toggle it in a loop:
```c
while (1) {
  LL_GPIO_TogglePin(GPIOA, LL_GPIO_PIN_6);
}
```
2. Connect STM32CubeMonitor to PA6 and measure the toggle frequency

***

## Debugging

**LED Not Blinking**
- Check if LL drivers are included in the project (Project > Properties > C/C++ Build > Settings > MCU GCC Compiler > Include Paths)

**Button Interrupt Not Triggering**
- Verify `LL_EXTI_Init()` configuration and NVIC enabling

**STM32CubeMonitor Not Capturing Data**
- Ensure the debug probe is connected and the correct pin is monitored

**High HAL Overhead**
- Use LL for time-critical sections and HAL for non-critical tasks


## Dictionary

- **HAL**: Hardware Abstraction Layer (STM32’s high-level API)
- **LL**: Low-Layer library (STM32’s register-level API)
- **EXTI**: External Interrupt/Event Controller
- **NVIC**: Nested Vectored Interrupt Controller
- **CMSIS**: Cortex Microcontroller Software Interface Standard

## Resources

1. [STM32F4 LL Driver Documentation](https://www.st.com/resource/en/user_manual/dm00105879.pdf) [(STM32F0)](https://www.st.com/content/ccc/resource/technical/document/user_manual/2f/77/25/0f/5c/38/48/80/DM00122015.pdf/files/DM00122015.pdf/jcr:content/translations/en.DM00122015.pdf)
2. [HAL vs LL](https://community.st.com/t5/stm32-mcus-products/hal-vs-ll/td-p/432434)
3. [About HAL performance](https://stackoverflow.com/questions/49596398/about-stm32-hal-quality-and-performance)
4. [To HAL or not to HAL](https://www.reddit.com/r/embedded/comments/sg7vey/to_hal_or_not_to_hal_the_definitive_answer/)


## Answers to Questions

1. LL uses direct register access without state checks
2. Configure `LL_EXTI_Init()` and enable the NVIC IRQ
3. `HAL_GPIO_WritePin()`
4. Compare GPIO toggle cycles between HAL and LL implementations

***

## Credits

[^1]: Deepseek.

<!--Written by Jorge Porras (2025)-->