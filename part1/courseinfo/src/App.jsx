const Header = (props_head) => {
  console.log(props_head)
  return(
    <div>
      <h1>{props_head.heading}</h1>
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

const Contents = (props_content) => {
  ///console.log(props_content)
  //console.log(props_content.materials[0].part)
  return(
    <div>
      <Parts cont_parts = {props_content.materials[0].part} cont_exercise = {props_content.materials[0].exercise}/>
      <Parts cont_parts = {props_content.materials[1].part} cont_exercise = {props_content.materials[1].exercise}/>
      <Parts cont_parts = {props_content.materials[2].part} cont_exercise = {props_content.materials[2].exercise}/>
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