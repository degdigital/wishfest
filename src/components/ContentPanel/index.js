import React from 'react';
import PropTypes from 'prop-types';

const ContentPanel = ({ title, description }) => {

    return (
        <section className="content-panel">
            <div className="page-wrapper">
                <h1 className="content-panel__title">The Music</h1>
            </div>
        </section>
    );
};

ContentPanel.propTypes = {
    title: PropTypes.string.isRequired
};

export default ContentPanel;