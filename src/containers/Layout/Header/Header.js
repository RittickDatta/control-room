import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>Control Room</li>
                    <li>Back Office</li>
                </ul>
            </nav>
        </div>
    )
}

Header.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

