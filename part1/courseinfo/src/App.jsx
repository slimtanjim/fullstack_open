const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Parts = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.cont_parts} {props.cont_exercise}</p>
    </div>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Parts cont_parts = {props.parts[0].name} cont_exercise = {props.parts[0].exercises}/>
      <Parts cont_parts = {props.parts[1].name} cont_exercise = {props.parts[1].exercises}/>
      <Parts cont_parts = {props.parts[2].name} cont_exercise = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const parts = [
    {
      name : 'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Usign props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
  ]

  return(
    <div>
      <Header course = {course}/>
      <Contents parts ={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App