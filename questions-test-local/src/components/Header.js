import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <div className= "header">
      <h1 style={{color:'limegreen'}}>{props.title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: 'Question Test',

}

Header.propTypes = {
  title : PropTypes.string.isRequired,
  color: PropTypes.string,
}


export default Header
