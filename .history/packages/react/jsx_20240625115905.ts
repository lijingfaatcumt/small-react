export default function jsx(type: string | Function, config: Object, key: string) {
    return {
        type: type,
        config: config,
        key: key
    }
}