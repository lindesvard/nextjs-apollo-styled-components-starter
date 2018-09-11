import React, { Component } from 'react'

export default WrappedComponent => class withParams extends Component {
    static getInitialProps = ({ query }) => query

    render = () => <WrappedComponent {...this.props} />
}
