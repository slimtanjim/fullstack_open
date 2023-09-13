const Hello = (props)=> {
  console.log(props)
  return(
    <>
    <p>at N tion ! {props.name}, age {props.age}, your number is {props.num}</p>
    </>
  )
}

const Nowtime = (time_prop) =>{
  console.log(time_prop) // 2 prints
  return(
  <>
  <p>{time_prop.time} </p>
  </>
  )
}


const Holler = (propobj) => {
  console.log(propobj)
  return(
    <div>
      <p>
        Hello {propobj.name}, you is {propobj.age} years old
      </p>
    </div>
  )
}


const Footer = () =>{
  return(
    <div> <br/>
      ggggwow a wild footer appeared check it <a href='https://github.com/slimtanjim'> slimtanjim</a>
      </div>
  )
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name1 = "thing11"
  const age1 = 23
  var num1 = 11

  console.log(now, 'a+b =', a+b) // 1 print //can rm <div> and do return []
  return(
    <div>
      <p> {a} plus {b} is {a+b} </p> 
      <Nowtime time = {now.toString()}/>
      <Hello name = {name1} age = {age1} num = {num1} /> 
      <Hello name ='thing22' age = {111}  num = {22}/>  
      <Holler name = {name1} age = {age1 + 2} />
      <Footer/>
    </div>
  )
}

export default App