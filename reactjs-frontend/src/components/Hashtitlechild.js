import React from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import {BrowserRouter} from 'react-router-dom';

function Hashtitlechild({text}) {
    let href="/#" + text
    console.log(href)
    return (
        
        <BrowserRouter>
            <>
                <Link to={href}>{text}</Link>
            </>
        </BrowserRouter>
    )
}

Hashtitlechild.propTypes = {
    text: PropTypes.string
}

export default Hashtitlechild

