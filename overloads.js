class Overload {
    static fallback() { throw new Error("Arguments matched no provided definition while no fallback was defined") }
    handleEvent(...args) {
        const boxed = args.map(raw => 
            raw instanceof Object || (raw === null || raw === undefined) ? 
                raw : new raw.constructor(raw))
        
        const found = this.definitions.slice().reverse().find(([fn, ...types]) => 
            types.every((T, i) => boxed[i] instanceof T))

        return found ? found[0](...args) : this.fallback(...args)
    }
    if(...definition) {
        definition.unshift(definition.pop()) 
        this.definitions.push(definition)
        return this
    }
    any(fn) {
        this.fallback = fn
        return this
    }
    lock() {
        return this.bind(null)
    }
}
export function overload() {
    const load = new Overload()
    const loader = (...args) => loader.handleEvent(...args)
    loader.definitions = []
    loader.fallback = Overload.fallback
    loader.if = load.if
    loader.any = load.any
    loader.lock = load.lock
    loader.handleEvent = load.handleEvent
    return loader
}
