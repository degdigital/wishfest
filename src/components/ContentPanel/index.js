import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ContentPanel = ({ slug, classNames, title, subtitle, content }) => {

  const subtitleOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <>{children}</>
    }
  };
  const contentOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imgNode = node.data.target.fields;
        return (
          <p><img className="rte-image" src={imgNode.file['en-US'].url} alt={imgNode.title['en-US']} /></p>
        );
      }
    }
  };

  return (
    <section className={classnames('page-section', classNames)} id={slug}>
      <div className="page-wrapper">
        <h1 className="section-title">{title}</h1>
        <h2 className="section-subtitle">{documentToReactComponents(subtitle, subtitleOptions)}</h2>
        <div className="columns">{documentToReactComponents(content, contentOptions)}</div>
      </div>
    </section>
  );
};

// ContentPanel.propTypes = {
//   slug: PropTypes.string.isRequired,
//   classNames: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired
// };

export default ContentPanel;
