const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.heading}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.first + props.second + props.third} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundementals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header heading = {course}/>
    <Content part = {part1} exercise = {exercises1} />
    <Content part = {part2} exercise = {exercises2} />
    <Content part = {part2} exercise = {exercises3} />
    <Total first = {exercises1} second = {exercises2}  third = {exercises3}/>
    </div>
  )
}

export default App
