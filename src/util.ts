export function getPrefix(name: string, isExport = false) {
    return `${isExport ? "export " : ""}interface ${name} {\n`
}

export function toCamelCase(str = "") {
    return str.replace(/(-|_)([a-z])/g, function (g) {
        return g[1].toUpperCase()
    })
}

export function upperFirstLetter(str = "") {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function paddingContent(num = 2, useTab = false) {
    return !useTab ? " ".repeat(num) : "\t"
}

export function getFullObjectFromArray(arr: any[] = []) {
    if (arr.length === 0) {
        return {}
    } else {
        if (typeof arr[0] !== "object") {
            return arr[0]
        } else {
            return arr.reduce((pre, next) => {
                return Object.assign(pre, next)
            }, {})
        }
    }
}
