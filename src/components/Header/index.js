import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { PrimaryNav } from '../';
import logo from '../../images/site_logo.svg';

const Header = ({ siteTitle }) => {

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classnames('site-header', {
      'is-sticky': isSticky
    })} role="banner" ref={ref}>
      <div className="page-wrapper">
        <h1 className="site-logo">
          <Link to="/">
            KC<span>Rocks</span>
          </Link>
        </h1>
        <PrimaryNav />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
