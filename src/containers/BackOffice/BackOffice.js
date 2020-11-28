import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const BackOffice = () => {
    return (
        <div>
            BackOffice
        </div>
    )
}

BackOffice.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BackOffice)
