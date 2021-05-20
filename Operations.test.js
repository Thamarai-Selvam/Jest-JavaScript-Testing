
ops = require('./Operations')

// Sum Ops

test('JS Way : Add two nums ', () => {
   
    if(ops.sum(10,10) === 20) {}
    else throw Error

    if(ops.sum(10,20) === 30) {}
    else throw Error
})

test('Jest Way : Add two nums  ', () => {
    expect(
        ops.sum(10,10)
    ).toBe(20)

    expect(
        ops.sum(10,20)
    ).toBe(30)
})


// Multiply Ops

test('JS Way : Multiply two nums ', () => {
   
    if(ops.multiply(10,10) === 100) {}
    else throw Error

    if(ops.multiply(10,20) === 200) {}
    else throw Error
})

test('Jest Way : Multiply two nums  ', () => {
    expect(
        ops.multiply(10,10)
    ).toBe(100)

    expect(
        ops.multiply(10,20)
    ).toBe(200)
})


// cloneArray Ops

const array = [10,20,30,40,50]

test('JS Way :cloneArray ', () => {
   
    if(JSON.stringify(ops.cloneArray(array)) === JSON.stringify(array)) {}
    else throw Error

})

test('Jest Way : cloneArray  ', () => {
    expect(
        ops.cloneArray(array)
    ).not.toBe(array)

    expect(
        ops.cloneArray(array)
    ).toEqual(array)
})
