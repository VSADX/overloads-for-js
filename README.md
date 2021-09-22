# Overloads for JS
  
<br>  
  
## What are overloads for?
Overloads come from other languages where the type of a variable is more obvious. Using overloads, 
you can write less code, yet understand its intent faster. How does it work? **Overloads replace 
`if ()`, `else`, or `switch` statements** - if you're looking at a variable's type. We do this 
in JavaScript!
  
Notice the `if`, `else if` pair in this code sample, look at how we use the `typeof` keyword in JavaScript to do "type checking":
```js
function makeInput(startingValue) {

    const element = document.createElement("input")
    
    if(typeof startingValue === "number") {
        element.type = "number"        
        element.value = startingValue
    }
    else if(typeof startingValue === "boolean") {
        element.type = "checkbox"
        element.checked = startingValue
    }
    else {
        element.placeholder = startingValue
    }
    
    return element
}
```
  
Since JavaScript doesn't have overloads built in, we have write the type checking code ourself. 
Type checking in JS gets more complicated because `typeof` doesn't work well on things like HTMLElements 
for example. You might have to use `instanceof` in some places or do prototype matching. 
  
<br>   
  
# Getting Started
## How to write an overload
  
<br>  
  
Overloads are easy! If you've ever written callback functions to `addEventListener`, or `setTimeout` 
you've already got the basics. Here's the first line of our overload:
```js
import { overload } from "./overloads.js"

const switchInput = overload()
```
  
What's this? Each time you run `overload()` you get a new empty function you define later. Let's 
add our cases:
```js
switchInput.if(HTMLInputElement, String, (element, startingValue) => {
    element.placeholder = startingValue
})
```
  
It's that easy, we can add the next case like this:
```js
switchInput.if(HTMLInputElement, Number, (element, startingValue) => {
    element.type = "number"
    element.value = startingValue
})
switchInput.if(HTMLInputElement, Boolean, (element, startingValue) => {
    element.type = "checkbox"
    element.checked = startingValue
})
```
  
<br>   
  
## How to run the overloaded function  
  
<br>    
  
Just like in other languages, these overloads are ran exactly like any other function. 
```js
// runs the `String` version
switchInput(myInputElementA, "First Name")

// runs the `Boolean` version
switchInput(myInputElementB, true)
```
  
<br>   
  
# Extras
## Using overloads for better optional parameters
  
<br>  
  
In JavaScript, we use optional parameters all the time! We might have different 
code run depending on how many parameters are passed to our function. Overloads 
work here too, here's how:
  
```js
const makeFormQuestion = overload()

makeFormQuestion.if(String, (question) => {
    const input = document.createElement("input")
    input.placeholder = question
    return input
})
makeFormQuestion.if(String, Array, (question, choices) => {
    const select = document.createElement("select")
    select.append(...choices)
    return select
})
```
  
<br>   
  
## How it works
  
<br>  
  
You might want to take an extra look at these examples above if you get stuck, 
overloads work for primitives like `Number`, `String`, `Boolean` - or elements 
like `HTMLElement`, `HTMLDivElement` - or `Array` - even your custom JS classes. 
**Overloads don't use a magic list of types** it uses real type checking just 
like what you would ordinarily write. Also, it's not locked at two parameters, 
you overloadable functions can have as many parameters as you want.
  
This library has some TypeScript support; in our example, each variety of 
`(element, startingValue) =>` would know that `element` was an `HTMLInputElement`.
What about `startingValue`, it needs to have a different type depending on the case? 
It is also has its type automatically declared for you. 
  
<br>   
  
## Defining overloads using the compact method
  
<br>  
  
So far, we've been writing overloads like this:
```js
const functionName = overload()

functionName.if(Number, num => console.log(`Num: #${num}`))
functionName.if(String, str => console.log(`Text: "${num}"`))
```
  
Here's a shorter way:
```js
const functionName = overload()
    .if(Number, num => console.log(`Num: #${num}`))
    .if(String, str => console.log(`Text: "${str}"`))
```
  
<br>   
  
## Preventing more cases from being accidentally added later `.lock`
  
<br>  
  
```js
const toHtml = overload()
    .if(Array, list => `<ul> </ul>`)
    .if(String, text => `<p> </p>`)
    .lock()
    // no more `.if` functions can be added.
```
  
<br>   
  
## Catch all cases `.else`    
  
<br>  
  
```js
const multiNumber = overload()
    .if(Number, Number, (a, b) => a * b)
    .if(Number, Number, Number, (a, b, c) => a * b / c)
    .else((...args) => console.error("None of your parameters matched any of the cases:", args))
    // `.else` always matches if no other cases were a match.
```
