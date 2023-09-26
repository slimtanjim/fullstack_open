//====================================
/*//Array 

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
//====================================
//Objects 
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


//====================================
//Functions 


// Object methods and "this"


//Classes 


//JavaScript materials 