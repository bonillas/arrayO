
var arrayO = (function() {
    var arrayO = {};

    arrayO.mapObject = (object, fn, keys) => {

    let arr = Object.entries(object)
    arr = arr.map((n, i) => {
        if (keys) {
            n[0] = fn(n[0], i)
        } else {
            n[1] = fn(n[1], i)
        }
        return n
    })
    const objArr = arr.map(n => {
        const ret = {}
        ret[n[0]] = n[1]
        return ret
    })
    return Object.assign({}, ...objArr)

}

  arrayO.filterObject = (object, fn, keys) => {

    let arr = Object.entries(object)
    arr = arr.filter((n, i) => keys ? fn(n[0], i) : fn(n[1], i))
    const objArr = arr.map(n => {
        const ret = {}
        ret[n[0]] = n[1]
        return ret
    })
    return Object.assign({}, ...objArr)

}

 arrayO.sortObject = (object, fn, keys) => {

    let arr = Object.entries(object)
    arr.sort((a, b) => keys ? fn(a[0], b[0]) : fn(a[1], b[1]))
    const objArr = arr.map(n => {
        const ret = {}
        ret[n[0]] = n[1]
        return ret
    })
    return Object.assign({}, ...objArr)

}

 arrayO.reduceObject = (object, fn, initialValue, keys) => {

    const arr = !keys ? Object.values(object) : Object.keys(object)
    return initialValue ? arr.reduce(fn, initialValue) : arr.reduce(fn)

}

return arrayO;
})();