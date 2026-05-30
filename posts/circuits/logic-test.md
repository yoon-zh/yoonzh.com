---
layout: hidden
title: circuitstest
card_title: "logic circuits test"
math: true
url: /posts/circuits/logic-test
excerpt: "test"
date: 2026-05-27
tech_stack: [Circuits]
---

# Topics

1. FPGA (LUT)
2. AHDL, recycling counter
3. Logic Function: Quine-McCluskey
4. J-K Flip-Flops
5. Flip Flop state equations
6. PLD classification
7. Basic logic circuits (adders)
8. Logic function: Karnaugh Map

***

## 1. FPGA

L1

https://i.sstatic.net/0htLQ.png

Given:
- Some truth equation of the type $f(x_1, x_2, ...) = \sum m (1,2,3,...)$
- The FPGA diagram

Find:
- Fill the contents of the storage cells of the FPGA
- Indicate the input and output terminals

### Solution

1. Get the truth table and get the output
2. List the outputs exactly as is into the LUT
3. The most significant bit (MSB) input always goes with the final MUX, and the least significant bit (LSB) goes with the first MUX
4. That's it lol its pretty easy

***

## 2. AHDL

L7

### Example

Design a recycling counter that:
- First loads 15
- Then decreases to 5 and sets an output `sig` to HIGH
- Then begins to increase and sets `sig` to LOW

### Solution

```vhdl
SUBDESIGN my_counter
(
    clear, en, load, clk :INPUT;
    q[3..0], sig :OUTPUT;
)
VARIABLE
    ct[3..0] :DFF;
    go_up    :DFF;
BEGIN
    ct[].clk = clk;
    go_up.clk = clk;

    IF clear THEN
        ct[].d = 0;
        go_up.d = GND;
    ELSIF !en THEN
        IF ct[].q == 15 THEN
            ct[].d = 14;
            go_up.d = GND;
        ELSIF ct[].q == 5 THEN
            ct[].d = 6;
            go_up.d = VCC;
        ELSIF ct[].q == 0 THEN -- initial state, load 15
            ct[].d = 15;
            go_up.d = GND;
        ELSIF go_up.q == VCC THEN
            ct[].d = ct[] + 1;
            go_up.d = VCC;
        ELSE
            ct[].d = ct[] - 1;
            go_up.d = GND;
        END IF;
    ELSIF load THEN
        ct[].d = 15;
        go_up.d = GND;
    ELSE
        ct[].d = ct[].q;
        go_up.d = go_up.q;
    END IF;

    IF ct[].q == 5 THEN sig = VCC;
    ELSE sig = GND;
    END IF;
    q[] = ct[].q;
END;
```

## 3. Quine-McCluskey

L9

