import PropTypes from 'prop-types'

const Button = (props) => {

  return (
    <button
      onClick= {props.onClick}
      className = 'btn'> {props.text}
    </button>

  )
}


export default Button
