import PropTypes from 'prop-types'
import Button from './Button'
import '../index.css'

const Header = (props) => {
  return (
    <div className= "header">
      <h1>{props.title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: 'Cate School Trivia',
}

Header.propTypes = {
  title : PropTypes.string.isRequired,
  color: PropTypes.string,
}


export default Header
