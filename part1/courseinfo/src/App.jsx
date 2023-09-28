const Header = (props) => {
  console.log('HEADER',props)
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Parts = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.props_name} {props.props_exercises} </p>
    </div>
  )
}

const Contents = (props) => {
  console.log('Contents-> ', props.course.parts[2].name)
  console.log('Contents-> ',props.course.parts[2].exercises)
  return(
    <div>
      <Parts props_name = {props.course.parts[0].name} props_exercises = {props.course.parts[0].exercises} />
      <Parts props_name = {props.course.parts[1].name} props_exercises = {props.course.parts[1].exercises}/>
      <Parts props_name = {props.course.parts[2].name} props_exercises = {props.course.parts[2].exercises}/>
      {/*
      <Parts props_parts = {props.course.parts[0].name} cont_exercise = {props.parts[0].exercises}/>
      <Parts cont_parts = {props.parts[1].name} cont_exercise = {props.parts[1].exercises}/>
  <Parts cont_parts = {props.parts[2].name} cont_exercise = {props.parts[2].exercises}/> */}
    </div>
  )
}

const Total = (props) =>{
  console.log('from totlal ->', props.course.parts[0].exercises)
  return(
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
      
    </div>
  )
}

const App = () => {
  const course = {
  name : 'Half stack application development',
  parts : [
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
}

  return(
    <div>
      <Header course = {course} />
      <Contents course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App