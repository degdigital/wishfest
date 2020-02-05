import React from 'react';
import PropTypes from 'prop-types';

const ContentBlock = ({ title, description }) => {


  return (
    <section className="content-block">
      <h1 className="content-block__title">{title}</h1>
      {/* <div className="content-block__description">{description}</div> */}
    </section>
  );
};

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired
};

export default ContentBlock
