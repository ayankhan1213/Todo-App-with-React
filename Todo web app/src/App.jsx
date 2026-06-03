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

  const [first, setFirst] = useState([
    { id: 1, text: "HTML" },
    { id: 2, text: "CSS" },
    { id: 3, text: "JS" }
  ])
  return (
    <>
      {first.map((elem,idx) => {
        return (
          <div key={idx} className="container">
            <h2>{elem.text}</h2>
             <button onClick={()=>{
              setFirst(prev => prev.filter((deta)=>{
                return deta.id !== elem.id
                       // 1 !== 2 true
                       // 2 !== 2 false
                       // 3 !== 2 true
              }))
             }}>Delete</button>
          </div>

        )
      })}
      {/* {todos.map((elem, idx) => {
        return (
          <div key={idx}>

            <h2>{elem}</h2>
            <button onClick={()=>{
              setTodos(prev => (prev.filter(todo =>{
                return elem !== todo 
              })))
            }}>Delete</button>

          </div>
        )
      })} */}

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