# overloads-for-js
  
<br>  
  
## How to create a function
```js
import { overload } from "./overloads.js"

const log = overload()
    .if(String, str => console.log(`Text: "${str}"`))
    .if(Number, num => console.log(`Num: #${num}))
    .if(Boolean, bool => console.log(bool ? "Yes" : "No"))
```
## What do overloads do?
```js
log(4 * 3)
```
```
> Num #12
```
  
<br>  
  
```js
log("Hello world")
```
```
Text: "Hello world"
```
  
<br>  
  
```js
log(true)
```
```
> Yes
```
  
