import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ siteTitle }) => (
    <footer className="site-footer">
        <div className="page-wrapper">
            {siteTitle}
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
