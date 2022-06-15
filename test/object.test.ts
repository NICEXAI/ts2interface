import { object2interface } from "../src/object"

test("Test object2interface method", () => {
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
})