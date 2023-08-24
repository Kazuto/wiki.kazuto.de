---
title: 'Demo Page'
description: 'Demo page for markdown formatting'
---

This markdown code showcases various elements and formatting options available in Markdown.

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

## Emphasis

Italic: _Italic Text_

Bold: **Bold Text**

Bold and Italic: **_Bold and Italic Text_**

## Lists

### Unordered List

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered List

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

## Links

[External Link to Google](https://www.google.com)

[Internal Link](/introduction/home)

## Images

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
> Here's another line in the blockquote.
> And one more line for good measure.

## Code

Inline code: `console.log("Hello, world!");`

Code block:

```js {8,16,28} [file.js]
// Define a class called Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Define a method to make the animal sound
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Define a class called Dog that extends Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  // Define a method to make the dog bark
  bark() {
    console.log(`${this.name} barks! Woof woof!`);
  }
}

// Create an instance of the Dog class
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound(); // Outputs: Buddy makes a sound.
myDog.bark(); // Outputs: Buddy barks! Woof woof!
```

## Table

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Cell 1   | Cell 2   |
| Row 2    | Cell 3   | Cell 4   |
| Row 3    | Cell 5   | Cell 6   |

## Task List

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

Here is some text with a footnote[^1].

[^1]: This is the footnote content.
