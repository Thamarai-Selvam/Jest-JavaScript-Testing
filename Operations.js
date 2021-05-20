const sum = (a = 0, b = 0) => {
    return a + b
}

const multiply = (a = 0, b = 0) => {
    return a * b
}
const cloneArray = (array = []) =>{
    return [...array]
}



module.exports =  {sum, multiply, cloneArray}