import { useState } from "react"
const App = () => {
  // const [title, setTitle] = useState("")
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("Form Submitted by" , title );
  //   setTitle("")
  // }
  // const [first, setFirst] = useState(10)
  // const fnc = () => {
  //   setFirst(30)
  // }

  // const [first, setfirst] = useState(0)
  // const [first, setFirst] = useState({name:"Ayan" , age:18})

  const [first, setfirst] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`${first} Submitted.`);
    setfirst("")
    
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input value={first} onChange={(e)=>{
          setfirst(e.target.value)
        }} type="text" />

        <button>Enter</button>
      </form>

      {/* <h2>{first.name} , {first.age}</h2>
    <button onClick={()=>{
      setFirst(prev => ({...prev , add:50}))
    }}>Click</button> */}

      {/* <h2>{first.name} , {first.age}</h2>
      <button onClick={()=>{
        const copy = {...first};
        copy.name = "Sarthack"
        setFirst(copy)
      }}>Click</button> */}
      {/* <div className="todo">
        <form onSubmit={(e) => {
          handleSubmit(e)
        }}>
          Enter your Name <br /> <input value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} type="text" /> <br />
          <button>Submit</button>
        </form>
      </div> */}


      {/* <h2>Value of Count is {first} </h2>
      <button onClick={fnc}>Enter</button> */}

      {/* <h2>Value of Count is {first}</h2>
      <button onClick={()=>{
        setfirst(first+1)
      }}>Click</button> */}



    </>
  )
}

export default App;