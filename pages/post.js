import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'ui'
import withParams from 'libs/withParams'

const Post = ({ id }) => (
  <div>
    <h1>Post #{id}</h1>
    <Link href="/">Go back</Link>
  </div>
)

Post.propTypes = {
  id: PropTypes.string,
}

export default withParams(Post)
