# ts2interface
Convert arbitrary formats to Typescript Interface(including json, toml, yaml, etc.)

### Installation

Run the following command under your project:

> npm i ts2install

### Feature
- [x] Object to interface
- [x] JSON to interface
- [x] YAML to interface
- [ ] TOML to interface

### Quick Start

#### Object to interface

```ts
import { object2interface } from "../src/json"

const obj = {
    name: "nice",
    age: 12,
}

const result = object2interface(obj, {
    indent: 4,
    rootName: "Example",
    semi: false,
    useTab: true,
})

console.log(result)
```

print:

```json
interface Example {
    name: string
    age: number
}
```

#### JSON to interface

```ts
import { json2interface } from "../src/json"

const jsonStr = `
{
    "name": "nice",
    "age": 12
}
`

const result = json2interface(jsonStr, {
    indent: 4,
    rootName: "Example",
    semi: false,
    useTab: true,
})

console.log(result)
```

print:

```json
interface Example {
    name: string
    age: number
}
```

#### YAML to interface

```ts
import { yaml2interface } from "../src/json"

const yamlStr = `
name: nice
age: 12
`

const result = yaml2interface(yamlStr, {
    indent: 4,
    rootName: "Example",
    semi: false,
    useTab: true,
})

console.log(result)
```

print:

```json
interface Example {
    name: string
    age: number
}
```