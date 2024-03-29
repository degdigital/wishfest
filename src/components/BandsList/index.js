import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BandsList = ({ classNames, sectionTitle, bands }) => {

  const contentOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
    }
  };

  return (
    <section className={classnames('page-section', classNames)} id="bands">
      <div className="page-wrapper">
        <h1 className="section-title">{sectionTitle}</h1>
      </div>
      <div className="page-wrapper bands__wrapper">
        {bands.map(({ node: { slug, title, url, image, childContentfulBandDescriptionRichTextNode } }) => (
          <a key={slug} className="bands__item" href={url} target="_blank" rel="noopener noreferrer">
            <h2 className="bands__title">{title}</h2>
            <Img className="bands__image" alt={title} sizes={image.sizes} />
            {childContentfulBandDescriptionRichTextNode && <div className="bands__description">{documentToReactComponents(childContentfulBandDescriptionRichTextNode.json, contentOptions)}</div>}
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
