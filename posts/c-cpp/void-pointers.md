---
layout: post
title: void-pointers
card_title: Void Pointers
url: /posts/c-cpp/void-pointers
excerpt: 
tech_stack: [C/C++]
date: 2025-02-16
---

# Void Pointers: The Swiss Army Knife of Pointers

Void pointers are like the mysterious wildcard in the pointer world. Used when you need a pointer that can point to **any data type**, but the trade-off is that they’re type-agnostic, which means you can't directly dereference them without knowing what type they point to.

handy when you want to write flexible functions that can handle multiple types without being bogged down by specific data types. But as with anything powerful, they come with their fair share of complexity and potential bugs if misused.

To use a void pointer properly, we must cast it to the appropriate type before dereferencing. otherwise, the compiler will complain.

### Example

```c
#include <stdio.h>

void print_value(void *ptr, int type) {
  switch(type) {
    case 1:
      printf("integer: %d\n", *(int *)ptr);
      break;
    case 2:
      printf("float: %.2f\n", *(float *)ptr);
      break;
    case 3:
      printf("double: %.4f\n", *(double *)ptr);
      break;
    default:
      puts("unknown type.")
      break;
  }
}

int main() {
    int i = 7;
    float f = 3.14;
    double d = 2.71828;

    void *ptr;

    // Pass the void pointer to the function with type 1 (int)
    ptr = &i;
    print_value(ptr, 1);

    // Pass the void pointer to the function with type 2 (float)
    ptr = &f;
    print_value(ptr, 2);

    // Pass the void pointer to the function with type 3 (double)
    ptr = &d;
    print_value(ptr, 3);

    return 0;
}
```

Here we have a `void *ptr` that can hold the address of any data type, whether it’s an `int`, `float`, or `double`. Then, `print_value()` checks the type argument passed to it and casts the `void *` pointer to the correct type before dereferencing it to print the value.

### The catch

While this code may look fine, there’s a potential issue lurking in the casting process. What if we passed the wrong type to the function? For example, what if we passed a `float` but told the function it was an `int`? This would lead to undefined behavior, potentially causing crashes or garbage values, since dereferencing the wrong type results in accessing incorrect memory.

In the above example, try mixing up the `type` argument. What happens when you pass the wrong type to the `print_value` function? Say, send a float and tell `print_value()` it is an int, what does it print?

***

In short, use void pointers if you'll be using different data types and you 100% know what you're doing. Add extensive checkups if so. Otherwise, stick to normal pointers.