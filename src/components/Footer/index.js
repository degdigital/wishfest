import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ siteTitle }) => (
    <footer className="site-footer" role="contentinfo">
        <div className="page-wrapper">
            <p dangerouslySetInnerHTML={{ __html: `&copy; ${new Date().getFullYear()} ${siteTitle}. All rights reserved.` }} />
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer;
