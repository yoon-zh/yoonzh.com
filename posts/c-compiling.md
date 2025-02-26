---
layout: post
title: c-compiling
card_title: C Compiling
url: /posts/c-compiling
math: true
tech_stack: [C/C++]
---

# GCC

```bash
gcc -Wall -Werror -Wextra -pedantic -g -std=c99 -c myfile.c myfile.o
gcc main.c myfile.o -o main
```

The flags will make `gcc` be very picky in the code. so it forces us to write proper code.

```bash
git checkout -b new_branch_name
```
https://stackoverflow.com/questions/17958288/branch-and-checkout-using-a-single-command