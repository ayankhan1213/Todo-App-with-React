import { useState } from "react"
const App = () => {
  const [title, setTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted by" , title );
    setTitle("")
  }
  return (
    <>
      <div className="todo">
        <form onSubmit={(e) => {
          handleSubmit(e)
        }}>
          Enter your Name <br /> <input value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} type="text" /> <br />
          <button>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App;