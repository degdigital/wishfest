import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, classNames, activeClassName, partiallyActive, ...other }) => {
  const isInternal = /^\/(?!\/)/.test(to)
  if (isInternal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a className={classNames} href={to} {...other}>
      {children}
    </a>
  )
}
export default Link