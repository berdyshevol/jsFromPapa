====
Convert array into object

## Problem #1

One array is given:

```javascript
const tuple1 = ["name", "Viktor"];
```

Make an object:

```javascript
const object = {
  name: "Viktor",
};
```

## Problem #2

Two arrays are given:

```javascript
const tuple1 = ["name", "Viktor"];
const tuple2 = ["age", 12];
```

Make an object:

```javascript
const object = {
  name: "Viktor",
  age: 12,
};
```

## Problem #3

Three arrays are given:

```javascript
const tuple1 = ["name", "Viktor"];
const tuple2 = ["age", 12];
const tuple3 = ["school", "Optima"];
```

Make an object:

```javascript
const object = {
  name: "Viktor",
  age: 12,
  school: "Optima",
};
```

## Problem #4

Nested array is given:

```javascript
const nestedArray = [
  ["name", "Viktor"],
  ["age", 12],
  ["school", "Optima"],
];
```

Make an object:

```javascript
const object = {
  name: "Viktor",
  age: 12,
  school: "Optima",
};
```

## Problem #5

Make a function `convertArrayIntoObject`. It receives an array of tuples

```javascript
[
  ...
  [key, value],
  ...
]
```

and it should return an object:

```javascript
{
  ...
  key: value,
  ...
}
```
