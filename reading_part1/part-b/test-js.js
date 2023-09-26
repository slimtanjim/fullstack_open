//=============================//
//          Array              //
//=============================//
/*
const t  = [-1,1,2]
t.push(5)
console.log(t)
console.log(t.length) // 4
console.log(t[0]) 

t.forEach(value => {
    console.log(value) // value + \n
})

//for(let i in t) { console.log(t[i]) }

t2 = t.concat(54) //new modified array 
console.log(t)  // [ -1, 1, 2, 5 ]
console.log(t2) // [ -1, 1, 2, 5, 54 ]

//map method 
const t1 = [11,22,33]
const m1 = t1.map(value => value * 2)
console.log("t1: %s" , t1) // t1: [ 11, 22, 33 ]
console.log("m1: %s ", m1) // m1: [ 22, 44, 66 ]

const arr1 = [1,2,3,3]
const arr1a = arr1.map(value => '<li>'+value+'</li>')
console.log(arr1a) // [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>3</li>' ]

const tt1 = [1,2,3,4,5,6,7,7]
const [a , b, ... rest] = tt1
console.log(a, b) // 1 2
console.log(rest) // [ 3, 4, 5, 6, 7, 7 ]
*/
/*

//=========================//
//         Objects         // 
//=========================//
const object1 = {
    name : 'greatest name',
    age : 34,
    education : 'YES'
}

const object2 = {
    name : 'really long name',
    level : 'mid tier hacker',
    experience : 5,
}

const object3 = {
    name:{
        first :'thing',
        last : 'one',
    },
    grades : [2,3,4,5],
    department : 'Biology School and College'
}
console.log(object1) //{ name: 'greatest name', age: 34, education: 'YES' }
console.log(object2)
console.log(object3)
/*{
  name: { first: 'thing', last: 'one' },
  grades: [ 2, 3, 4, 5 ],
  department: 'Biology School and College'
}*/
/*
console.log(object1.name) //greatest name
const fieldname = 'age'
console.log(object1[fieldname]) // 34

object1.address = "thisdn N 34 Blvd" // adds  property to obj
object1['secret number'] = 12341 // [] because of the '_' space in 'secret number'
object1['age'] = 83
console.log(object1)

    //objects with methods 
const calc1 = {
    addNum : (a, b) => `adding ${a} and ${b} is ${a+b}`, // backticks  
    mulNum : (a, b) => a * b,
}
console.log(`${calc1.addNum(4,5)} and multiplying is ${calc1.mulNum(4,5)}`)
*/


//=================================//
//          Functions              //
//=================================//
    //regular functions 
const actualSumFunction = function (p1, p2) {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = actualSumFunction(3,4)
console.log(`sum = ${result}`)

const actualSumFunction2 = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result2 = actualSumFunction2(3,4)
console.log(`sum2 = ${result2}`)

    //no parenthesis for single parameter
const squareFunc = p => {
    console.log(p)
    return p * p 
}
    //no brace for single expression  
const squareFunc2 = p => p * p
console.log(squareFunc(4))
console.log(squareFunc2(4))

    //short fucntiuon used for mapping
const pp = [1,2,4,5,6,3]
const ppSuared = pp.map( val => val * val) //( (val) => { val * val} )
console.log(ppSuared)

// used keyword 'fuction'
function product(a,b){ 
    return a*b
}
const prod_result  = product(2,6)
console.log(prod_result) // 12

// without the keyword ; fucnntion expression 
const average = function (a, b) {
    return(a + b) / 2 
}

const result_agv = average(2,5)
console.log(result_agv) // 3.5



//=====================================//
//          Exercise 1.3 - 1.5         //
//=====================================//

// ++++  in part1 folder ++++


//==========================================//
//          Object methods and "this"       //
//==========================================//

//==========================//
//          Classes         //
//==========================//


//=======================================//
//          JavaScript materials         //
//=======================================//
