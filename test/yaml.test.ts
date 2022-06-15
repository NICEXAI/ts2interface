import { yaml2interface } from "../src/yaml"

test("Test yaml2interface method", () => {
    const yamlStr = `
name: nice
age: 12
    `

    const result = yaml2interface(yamlStr, {
        indent: 4,
        rootName: "Config",
        semi: false,
        useTab: true,
    })

    console.log(result)
})