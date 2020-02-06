import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const BandsList = ({ classNames, sectionTitle, bands }) => {
  return (
    <section className={classnames('page-section', classNames)} id="bands">
      <div className="page-wrapper">
        <h1 className="section-title">{sectionTitle}</h1>
      </div>
      <div className="page-wrapper bands__wrapper">
        {bands.map(({ node: { slug, title, url, image } }) => (
          <a key={slug} className="bands__item" href={url} target="_blank" rel="noopener noreferrer">
            <h2 className="bands__title">{title}</h2>
            <img className="bands__image" src={image.file.url} alt={title} />
          </a>
        ))}

      </div>
    </section>
  );
};

BandsList.propTypes = {
  classNames: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired,
  bands: PropTypes.array.isRequired
};

BandsList.defaultProps = {
  bands: []
}

export default BandsList;
