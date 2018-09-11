import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'

const Link = ({ children, className, target, ...props }) => (
  <NextLink {...props} passHref>
    <a className={className} target={target}>
      {children}
    </a>
  </NextLink>
)

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  target: PropTypes.string,
}

export default Link
