import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Link = ({ children, to, classNames, activeClassName, partiallyActive, ...other }) => {

  const handleClick = e => {
    const regEx = new RegExp('^(http|https)://', 'i');
    const isExternal = regEx.test(to);
    if (!isExternal) {
      e.preventDefault();
      scrollTo(to);
    }
  };

  return (
    <a className={classNames} href={to} {...other} onClick={handleClick}>
      {children}
    </a>
  )
}
export default Link