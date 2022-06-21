import React from 'react'

function Ingredient({ instructions }) {


    return (
        <div>
            {instructions.map((inst) => {
                return <li key={inst}>{inst}</li>
            })}
        </div>
    )
}

export default Ingredient