const Header = (props_head) => {
  console.log(props_head)
  return(
    <div>
      <h1>{props_head.heading}</h1>
    </div>
  )
}

const Contents = (props) => {
  return(
    <div>
      <p>{props.materials[0].part} {props.materials[0].exercise}</p>
      <p>{props.materials[1].part} {props.materials[1].exercise}</p>
      <p>{props.materials[2].part} {props.materials[2].exercise}</p>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of exercises {props.nums[0].exercise + props.nums[1].exercise + props.nums[2].exercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const parts = [
    {part : '1) Fundementals of React', exercise : 10},
    {part : '2) Using props to pass data', exercise : 7},
    {part : '3) State of a component', exercise : 14}
  ]
  return (
    <div>
    <Header heading = {course}/>
    <Contents materials = {parts} />
    <Total nums = {parts}/>
    </div>
  )
}

export default App