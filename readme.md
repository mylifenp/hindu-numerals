## A very basic numeral converter, that converts hindu numerals to arabic numerals and vice versa.

### Installation

<code>npm install hindu-numerals</code>

### Usage

```javascript
import { toHinduNumerals, toArabicNumerals } from "hindu-numerals";

//
console.log(toHinduNumerals(1234)); // "१२३४" the return type is always a string
console.log(toArabicNumerals("१")); // 1 the return type is number if it is a valid number otherwise it is string

// it will leave all the non numerical string characters as it is and only convert the numerical string characters
console.log(toHinduNumerals("12abdc34")); // "१२abdc३४" the return type is always a string
```
