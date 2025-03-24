---
layout: post
title: search-optimization
card_title: Search Optimization in C
url: /posts/search-optimization
excerpt: Search for an item in an array. For loops? Binary search? Hash maps? Quick guide here.
tech_stack: [C/C++]
math: true

---
date: 2025-02-25
*Adapted from [^1]*

Let's say you're at a supermarket buying some groceries. This is the basic plan:

```c
#include <stdio.h>

// what you want to buy
#define ITEM_COUNT 3
const char* my_grocery_list[ITEM_COUNT] = {"apple", "bread", "orange"};

int main() {
    buy_groceries(); // we want to write this function
}
```

Now, how to buy groceries quickly? what should you do in `buy_groceries()`?

### 1. Nested For Loops

First case: the supermarket sucks, there's no labels or directions, and the place is a mess.

```c
const char* supermarket1[] = {
    "bread", "milk", "cheese", "apple", "orange",
    "banana", "apple", "cereal", "carrot", "apple"
}; // items are all over the place, not organized
```

for this case, you'll have to walk through the entire supermarket *linearly*, comparing every item on every aisle to see if it's an apple or whatever you're looking for.
this is called a **nested `for` loop**.

```c
void buy_groceries() {
    int supermarket_items = sizeof(supermarket1) / sizeof(supermarket1[0]);
    for (int i = 0; i < MY_ITEM_COUNT; i++) {
        int found = 0;
        for (int j = 0; j < supermarket_items; j++) {
            if (strcmp(my_grocery_list[i], supermarket1[j]) == 0) {
                found = 1;
                printf("%s found at index %d\n", my_grocery_list[i], j);
                break;
            }
        }
        if (!found) {
            printf ("%s not found\n", my_grocery_list[i]);
        }
    }
}
```
**good part:** we'll eventually find our apples, one step at a time. or we'll be sure if there's no apples, since we would've seen it all.

**problem:** wastes time. it goes through the entire list of groceries, comparing everything to everything. $$O(n^2)$$. we're just wandering around the store like a zombie, checking every single product for apples.

***

### 2. Binary Search - When Things Are Sorted

now you go to a supermarket where items are sorted in some way (lets say alphabetically). things are neat and tidy, you're not wandering aimlessly. now you can use **binary search**, because the store’s aisles are clearly organized, and you can just halve your search space each time.

```c
const char* supermarket2[] = {
    "apple", "apple", "banana", "bread", "carrot",
    "cereal", "egg", "milk", "orange", "pear"
}; // items are neatly organized by alphabetic order

int binary_search(const char* arr[], int size, const char* target) {
    int low = 0;
    int high = size - 1;
    
    while (low <= high) {
        // go to the mid of the array
        int mid = low + (int)((high - low) / 2);
        // check if it's what you want
        int cmp = strcmp(arr[mid], target);
        if (cmp == 0) { // if it is, bingo
            return mid;
        }
        else if (cmp < 0) { // if arr[mid] is lower, go upper
            low = mid + 1;
        }
        else { // if arr[mid] is greater, go lower
            high = mid - 1;
        }
    }
    return -1; // not found
}

void buy_groceries() {
    int supermarket_size = sizeof(supermarket2) / sizeof(supermarket2[0]);
    for (int i = 0; i < MY_ITEM_COUNT; i++) {
        int index = binary_search(supermarket2, supermarket_size, my_grocery_list[i]);
        if (index != -1) {
            printf("%s found at index %d\n", my_grocery_list[i], index);
            continue;
        }
        else {
            printf ("%s not found\n", my_grocery_list[i]);
        }
    }
}
```

**good part:** much more efficient. $$O(log n)$$. saves time. if something's missing, you'll know without walking through the entire place.

**problem:** only works if the items are sorted. if the store or your list of groceries is a mess, then tough luck.

***

### 3. Hash Map - Supermarket Aisles With Tags

okay, now we're getting somewhere. we have a **hash map**, a supermarket with aisles labeled clearly: if you want apples, look up to the big sign above that reads "apples", walk there, and boom you've got your apples.

note, some overhead ahead (pun intended):

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

typedef struct HashNode {
    char key[50];
    int index;
    struct HashNode* next;
} HashNode;

HashNode* hash_table[TABLE_SIZE];

int hash(char* key) {
    int hash_val = 0;
    for (int i = 0; key[i] != '\0'; i++) {
        hash_val = (hash_val + key[i]) % TABLE_SIZE;
    }
    return hash_val;
}

void insert(char* key, int index) {
    int hash_index = hash(key);
    HashNode* new_node = malloc(sizeof(HashNode));
    strcpy(new_node->key, key);
    new_node->index = index;
    new_node->next = hash_table[hash_index];
    hash_table[hash_index] = new_node;
}

int search(char* key) {
    int hash_index = hash(key);
    HashNode* node = hash_table[hash_index];
    
    while (node) {
        if (strcmp(node->key, key) == 0) {
            return node->index;
        }
        node = node->next;
    }
    return -1; // not found
}

```

**good part:** crazy efficient, $$O(1)$$. imagine a google search. you type "apples", you get apples. you type "bread", you get bread.

**problem:** needs some preparation and a bit of brain. in short, you need a *hash function*. also, depending on your hash function and data size, you might end up with collisions. which means instead of zipping to the aisle for apples, you’ve got to do a little extra checking.

### now, how does this work?

the key is using a hash function. this usually means parsing an input into a number to be used as an index of an array.

***

### 4. Trie ???

## Credits

[^1]: ChatGPT
<!--Written by Jorge Porras (2025)-->