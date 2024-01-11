// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

function NewApp() {
    // const [count, setCount] = useState(0)
    let newWord = "React";

    const topics = [
      {
        title : "Html",
        Book : "LEARN HTML",
        Author : "John"
      },
      {
        title : "JavaScript",
        Book : "LEARN JS",
        Author : "Jorge"
      },
      {
        title : "React",
        Book : "LEARN React",
        Author : "Elon"
      },
      {
        title : "Node",
        Book : "Node book",
        Author : "Robert"
      }
    ]
  
    return (
   
      <div>
        <span>Learning {newWord} is interesting</span>
        <h3 style={{color:"red"}}>new file</h3>
        <p style={{fontFamily: "cursive"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsam amet cum aut optio voluptates et.</p>
     
     <div>
      <h3>list of books</h3>
      <ul style={{color: "blue", listStyleType: "square"}}>
        {topics.map(function (value){
          return <li >{`${value.title} -${value.Author}- ${value.Book}`}</li>
        })}
      </ul>
      </div> </div>
    )
  }
  
  export default NewApp