import React from 'react'

const Menu = (props) => {
  const clickLH = () => {
    props.onClick();
    props.lh();
  }
  const clickHH = () => {
    props.onClick();
    props.hh();
  }
  return (
    <div>

    <button onClick={clickLH}> Long House</button>
    <button onClick={clickHH}> High House</button>

    </div>
  )
}

export default Menu
