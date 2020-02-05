import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO, Layout } from '../components/';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

const BandDetail = ({ data }) => {
  const { bandName, bandDescription, bandSiteUrl } = data.contentfulBandDetail;
  return (
    <Layout>
      <SEO title={bandName} />
      <div>
        <h1>{bandName}</h1>
        <div>{documentToReactComponents(bandDescription.json, options)}</div>
        <p>{bandSiteUrl}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};
export default BandDetail;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBandDetail(slug: { eq: $slug }) {
      bandName
      bandSiteUrl
      slug
      bandDescription {
        bandDescription
          json
      }
    }
  }
`;