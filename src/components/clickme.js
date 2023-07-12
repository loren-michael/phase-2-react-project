import React, { useState } from 'react'

function ClickMe() {
    const [input, setInput] = useState("")
    const [submissions, setSubmissions] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        const newSub = input;
        setSubmissions([...submissions, newSub])
        console.log(submissions)
    }

return (
    <div>
        <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleSubmit} >Submit</button>
        </form>

        <p>
            {submissions.map((i) => {
                return (<div key={i}>{i}</div>)
            })}
        </p>
    </div>

    
)





}

export default ClickMe