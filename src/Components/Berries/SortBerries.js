import {React, useState} from 'react';



function SortBerries({ berries, setInput, input }){
    console.log(berries);
    console.log(input)


    const selectedBerry = (e) => {
        console.log(e.target.value);
        // setInput(e.target.value);
    }
    

    return (
        <div>
            <h1>Sort Berries</h1>
            <select onChange={selectedBerry} >
                <option value='empty' required></option>
                {berries.map((berry, i )=> {
                    return (<option value={i + 1} id={berry.name} key={i + 1}>{berry.name} </option>)
                })}
            </select>
        </div>
    )
}

export default SortBerries