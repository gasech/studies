# TypeScript Notes

<!-- vim-markdown-toc Marked -->

* [TypeScript](#typescript)
  * [Variables](#variables)
    * [Inference](#inference)
    * [Literal](#literal)
    * [Any](#any)
  * [Functions](#functions)
  * [Objects](#objects)
  * [Arrays](#arrays)
  * [Tuples](#tuples)

<!-- vim-markdown-toc -->

# TypeScript
Typescript uses the tsc compiler

## Variables
In TypeScript variables are born with their types.

### Inference
So for example:

```typescript
let number = 6;
```
TypeScript will do something called **inference**, which is, it will guess the type of the variable. In this case it will say it's a `number`

If you try to assign a String into `number`
```typescript
let number = 6; // It's going to assign this variable with the type number.
number = "Some random string";
// Type 'string' is not assignable to type 'number'.
```

### Literal
Now if you try to use `const`

```typescript
const number = 6;
```

TypeScript will go even further saying this is type of `6`, it's only `6`, that's called a **literal** type.

### Any

Now what if we don't specify our type?
```typescript
let random;
```
TypeScript have no choice but to assign its type to `any`, which makes it just like the standard JavaScript variable.

```typescript
let random: any;
random = 6;
random = "String";
// No errors.
```

## Functions

A function with type `any` on parameters and return.
```typescript
function sum(a, b){
  return a + b;
}
```
A function that returns a number and needs two numbers as parameters.
```typescript
function sum(a: number, b: number): number{
  return a + b;
}
```
## Objects

This is an object.
```typescript
const myCar = {
  model: string,
  year: number
}
```

You can use `?` after the name of the property to make it optional. In this case not every car is going to be electrical hence not needing `chargeVoltage`.

```typescript
function printCar(car: {
  model: string,
  year: number,
  chargeVoltage?: number
}) {
  console.log(car)
}

printCar({
  model: "Audi A5 QUATTRO",
  year: 2010,
})

// You can't give extra properties in the arguments

printCar({
  model: "Fiat Uno",
  year: 2015,
  color: "white"
}) // This gives an error..

// But you can give an object with extra properties.

const myCar = {
  model: "Tesla",
  year: 2018,
  chargeVoltage: 240,
  color: "red",  
}

printCar(myCar); // This does not give you an error, because you can use the color property elsewhere. It's not an "useless" property.
```

## Arrays
You can write arrays specifying the type then declaring it to be an array. Like so.

```typescript
const names: string[] = [];
names.push("Gabriel");
```

## Tuples
Tuples are a small set of data.
You can declare it, like so.

```typescript
const numPar: [number, number] = [1,2];

// You can't do this.
let nameAge: [string, number];
nameAge = ["George", 31, "Random"];
```

You can use built in array functions like `.pop` and `.push`, TypeScript won't stop you from doing that, which is weird.
