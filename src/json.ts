import { Config, object2interface } from "./object"

export function json2interface(content: string, config: Config) {
    const obj = JSON.parse(content)
    return object2interface(obj, config, true)
}
