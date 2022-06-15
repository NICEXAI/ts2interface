import { parse } from "yaml"

import { Config, object2interface } from "./object"

export function yaml2interface(content: string, config: Config) {
    const obj = parse(content)
    return object2interface(obj, config)
}
