---
layout: post
title: pointers_double_triple
card_title: Double and Triple pointers in C
url: /posts/pointers_double_triple
excerpt: Pointers. Some love them, most new students kinda hate them. What happens when we throw in double and triple pointers?
tech_stack: [C/C++]
date: 2025-02-16
---

*Adapted from [^1]*

## What the heck is a double or triple pointer?

let’s start simple: a regular pointer in C is a variable that stores the memory address of another variable. easy enough, right?

- Single pointer: `int *p;` → stores the address of an `int`
- Double pointer: `int **p;` → stores the address of a pointer that stores an `int`
- Triple pointer: `int ***p`; → stores the address of a pointer that stores the address of a pointer that stores an `int`

so we've got a pattern here. the more stars `*`, the deeper down the rabbit hole we go. it's like an inception of pointers, and we all know how that movie ended up: a whole bunch of confusion. but can we actually use this in a practical way?


## Why bother with it?

sometimes we need to dynamically allocate memory for complex data structures, like multi-dimensional arrays or structures that involve multiple levels of indirection. pointers to pointers can be thought of as adding dimensions: `int **p` → 2D array, `int ***p` → 3D array, and so on.

also, passing pointers to pointers around functions lets us modify values at these deeper levels without making copies of the data. very useful for managing memory efficiently, especially when handling large datasets or manipulating multi-level structures.

## Moving pointers around functions

Here’s where the fun begins. passing pointers to functions means we can modify the data they're pointing to outside the function. basically we can "expand the scope" of a variable giving its pointer to another function and modifying it there.

## The Right Way

```c
#include <stdio.h>

void update_value(int **ptr) {
    **ptr = 10;  // dereferencing twice to update the value of the int
}

int main() {
    int a = 5;
    int *p = &a; // the & symbol gives us the address of a
    int **pp = &p;

    printf("before: %d\n", a);  // should print 5

    update_value(pp);  // passing the double pointer

    printf("after: %d\n", a);  // should print 10
    return 0;
}
```
**explanation:**
We have a pointer to a pointer `int **pp`, which stores the address of `p`, which stores the address of `a`. When we pass `pp` to the `update_value()` function, we access `a` through `**pp` and change its value. this works just fine, and our variable `a` gets updated outside the function.

## The Wrong Way

```c
#include <stdio.h>

void bad_update(int **ptr) {
    *ptr = 10;  // This is wrong, it should dereference twice (**ptr)
}

int main() {
    int a = 5;
    int *p = &a;
    int **pp = &p;

    printf("before: %d\n", a);  // Should print 5

    bad_update(pp);  // This messes up the pointer

    printf("after: %d\n", a);  // This will still print 5 (no change)
    return 0;
}
```
**why doesnt it update?**
in the bad_update function, we did `*ptr = 10;`. this is **modifying the pointer itself**, not the value it points to. `ptr` is a pointer to `p`, so `*ptr` modifies the address stored in `p`, not the value of `a`. the value of `a` doesn’t change, and instead, `p` ends up pointing to some random address (and god helps you if that address is something important). note that vscode or your editor will probably save you from messing up like that.

## quick note: `&`

when using pointers we'll notice the `*` being used along the `&`. so worth mentioning its difference:

- `*` (dereference operator): takes a pointer and accesses the value stored at the address the pointer points to. if `p` is a pointer, `*p` returns the value stored at that address

- `&` (address of operator): the **opposite** of `*`: gets the address of a variable. if we have a variable `a`, `&a` returns the memory address where `a` is stored.

### double `**`, double `&&`?

ill confess it. when working on [chemcount](/projects/chemcount) i tried it. made a compsci grad cry that day.

no, we cannot get the address of the address. `&&` is for logical `AND`.

*idk. it just made sense in the moment...*

## challenge

the above should be easy enough too. lets look at a challenge:

```c
#include <stdio.h>

void challenge_update(int ***ppp) {
    ***ppp = 50;
    *ppp = NULL;
}

int main() {
    int a = 5;
    int *p = &a;
    int **pp = &p;
    int ***ppp = &pp;

    printf("before: %d\n", a);  // should print 5
    challenge_update(ppp);
    printf("after: %d\n", a);  // what happens now?
    return 0;
}
```
**question:** does it print 50?

## Credits

[^1]: ChatGPT
<!--Written by Jorge Porras (2025)-->