# rot13

A simple implementation of the
[ROT13](https://gchq.github.io/CyberChef/#recipe=ROT13(true,true,true,13)&input=SGVsbG8sIHdvcmxkIQ).

## Usage

```ts
import { decode, encode } from "./mod.ts";

const encoded = encode("Hello, world!");
console.log(encoded); // "Uryyb, jbeyq!"

const decoded = decode(encoded);
console.log(decoded); // "Hello, world!"
```
