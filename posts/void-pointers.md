---
layout: post
title: void-pointers
card_title: Void Pointers
url: /posts/void-pointers
excerpt: 
tech_stack: [C/C++]
date: 2025-02-16
---

still on dev

`void* p;`

??



```c
#include <stdio.h>
#include <stdlib.h>

void satan_swap(void***** d, void***** e) {
    // your code here...
}

int main() {
    int value = 888;
    int *a = &value;

    void **b = (void**)&a;
    void ***c = (void***)&b;

    // Allocate new_value via c (triple void pointer)
    int *new_value = malloc(sizeof(int));
    *new_value = 999;
    *(int**)*c = new_value;

    int evil = 69;
    int *evil1 = &evil;
    void **evil2 = (void**)&evil1;
    void ***evil3 = (void***)&evil2;
    void ****d = (void****)&evil3;

    satan_swap((void*****)&c, (void*****)&d);

    *(*(*(int***)*d)) = 420;

    printf("value: %d\n", value);
    printf("new_value: %d\n", *new_value);
    printf("evil: %d\n", evil);

    // printf("\nAddresses:\na: %p\nb: %p\nc: %p\nd: %p\n", 
    //        (void*)a, (void*)b, (void*)c, (void*)d);

    free(new_value);
    return 0;
}
```
