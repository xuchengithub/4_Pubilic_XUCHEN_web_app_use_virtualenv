import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header style={headingStyle}>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps ={
    title:"Nexidea Test Page"
}

Header.propTypes = {
    title: PropTypes.string,
}


// style={headingStyle}//add this to h1

const headingStyle = {
    border: "1px solid steelblue",
    textAlign: 'center',
    paddingbottom:"25px"
}

export default Header