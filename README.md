# overloads-for-js
  
```js
import { overload } from "./overloads.js"

const log = overload()
    .for(String, str => console.log(`Text: "${str}"`))
    .for(Number, num => console.log(`Num: #${num}))
    .for(Boolean, bool => console.log(bool ? "Yes" : "No"))
    
log("Hello world")        // Text: "Hello world"
```
  
<br>  
  
```js
log(4 * 3)
```
```
> Num #12
```
  
<br>  
  
```js
log(true)
```
```
> Yes
```
