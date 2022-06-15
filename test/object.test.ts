import { object2interface } from "../src/object"

test("Test object2interface method", () => {
    const jsonStr = {
        name: "nice",
        age: 12,
    }

    const result = object2interface(jsonStr, {
        indent: 4,
        rootName: "Config",
        semi: false,
        useTab: true,
    })

    console.log(result)
})