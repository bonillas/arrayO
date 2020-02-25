export const mapObject = (object, fn) => {
    const obj = Object.assign({}, object)
    for (let key in obj) {
        obj[key] = fn(obj[key])
    }
    return obj;
}

export const filterObject = (object, fn) => {

    let arr = Object.keys(object).filter(key => fn(object[key]))
    arr = arr.map(key => ({
        [key]: object[key]
    }))
    return Object.assign({}, ...arr)
   
}

export const sortObject = (object, fn) => {

    let arr = Object.keys(object).sort((a, b) => fn(object[a], object[b]))
    arr = arr.map(key => ({
        [key]: object[key]
    }))
    return Object.assign({}, ...arr)

}

export const reduceObject = (object, fn, initialValue, keys) => {
    const arr = !keys ? Object.values(object) : Object.keys(object)

    return initialValue ? arr.reduce(fn, initialValue) : arr.reduce(fn)

}


