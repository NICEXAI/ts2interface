import {
    getPrefix,
    paddingContent,
    upperFirstLetter,
    getFullObjectFromArray,
    toCamelCase,
} from "./util"

export interface Config {
    // 接口根名称
    rootName: string
    // 缩进，默认：4
    indent: number
    // 是否添加分号，默认：false
    semi: boolean
    // 是否使用Tab换行，默认：false
    useTab: boolean
}

interface TransformObject {
    [key: string]: any
}

export function object2interface(
    obj: TransformObject = {},
    config: Config,
    isRoot = false
) {
    if (Array.isArray(obj)) {
        return `Array value must belong to some key`
    }
    const prefix = getPrefix(config.rootName, isRoot)
    const [content, subContent] = transformObject(obj, config)
    const suffix = "}"
    return `${subContent}${prefix}${content}${suffix}\n\n`
}

function transformObject(obj: TransformObject, config: Config) {
    let result = ""
    let subs = ""
    const padContent = paddingContent(config.indent, config.useTab)

    Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (typeof val !== "object") {
            result += `${padContent}${key}: ${typeof val}${
                config.semi ? ";" : ""
            }\n`
        } else if (Array.isArray(val)) {
            // array
            if (val.length === 0) {
                result += `${padContent}${key}: any[]${
                    config.semi ? ";" : ""
                }\n`
            }
            if (val.length !== 0 && val instanceof Array) {
                const fullObject = getFullObjectFromArray(val)
                if (typeof fullObject === "object") {
                    const propName = `${upperFirstLetter(toCamelCase(key))}Item`
                    result += `${padContent}${key}: ${propName}[]${
                        config.semi ? ";" : ""
                    }\n`
                    const sub = object2interface(fullObject, {
                        ...config,
                        rootName: propName,
                    })
                    subs += `${sub}`
                } else {
                    // primitive value as item
                    result += `${padContent}${key}: ${typeof fullObject}[]${
                        config.semi ? ";" : ""
                    }\n`
                }
            }
        } else {
            if (val == null) {
                const propName = upperFirstLetter(toCamelCase(key))
                result += `${padContent}${key}: string${
                    config.semi ? ";" : ""
                }\n`
            } else {
                // object
                const propName = upperFirstLetter(toCamelCase(key))
                result += `${padContent}${key}: ${propName}${
                    config.semi ? ";" : ""
                }\n`
                const sub = object2interface(val, {
                    ...config,
                    rootName: propName,
                })
                subs += `${sub}`
            }
        }
    })
    return [result, subs]
}
