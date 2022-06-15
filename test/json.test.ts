import { json2interface } from "../src/json"

test("Test json2interface method", () => {
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
})