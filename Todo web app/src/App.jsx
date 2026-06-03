import { useState } from "react"

const App = () => {

  // const [first, setFirst] = useState({
  //   name: "Ayan",
  //   age: 18
  // })

  // const [first, setFirst] = useState({
  //   name: "Ayan",
  //   age: 18,
  //   city: "Karachi"
  // })

  const [todos, setTodos] = useState([
    "HTML ",
    "CSS",
    "Javascript"
  ])
  return (
    <>

      {todos.map((elem, idx) => {
        return (
          <div key={idx}>

            <h2>{elem}</h2>
            <button onClick={()=>{
              setTodos(prev => (prev.filter(todo =>{
                return todo !== elem // 
              })))
            }}>Delete</button>

          </div>
        )
      })}

      
      {/* {todos.map((elem, idx) => {
        return <div key={idx}>
          <p>{elem}</p>
          <button>Delete</button>
        </div>
      })} */}
      {/* <h2>{first.age} {first.name} {first.city}</h2> */}
      {/* <button onClick={() => {
          setFirst(prev => ({
            ...prev ,
            age : 60,
            adress : "4C"
          }))
        }}>Click</button> */}

      {/* <button onClick={() => {
        setFirst(prev => ({
          ...prev,
          name: "Sarthak",
          age: prev.age + 1,
        }))
      }}>Click</button> */}

      {/* <button onClick={() => {
        setTodos(prev =>
          prev.filter(tod => tod !== "CSS")
        )
      }}>Click</button> */}


    </>
  )
}

export default App