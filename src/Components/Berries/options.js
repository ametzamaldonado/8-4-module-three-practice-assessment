import React from 'react'

function options({ berry, i}) {
  return (
    <><option value={berry.name} num={i + 1} key={i + 1}> {i + 1} : {berry.name} </option></>
  )
}

export default options