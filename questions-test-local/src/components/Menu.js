import React from 'react'

const Menu = (props) => {

  const clickLH = () => {
    props.lh();
  }

  const clickHH = () => {
    props.hh();

  }
  return (
    <div>
    Hello
      <button onClick={clickLH}> 25 House</button>
      <button onClick={clickHH}> High House</button>
    </div>
  )
}

export default Menu
