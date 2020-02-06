import React from 'react';
import { graphql } from 'gatsby';
import { SEO, Layout, Hero, ContentPanel, Countdown, BandsList, Venue } from '../components/';
import { findItemBySlug } from '../utils/';

const IndexPage = ({ data }) => {

  const contentPanelItems = data.allContentfulContentPanel.edges;
  const aboutKCRocksItem = findItemBySlug(contentPanelItems, 'about-kc-rocks');
  const aboutMAWItem = findItemBySlug(contentPanelItems, 'about-make-a-wish');
  const venueItem = findItemBySlug(contentPanelItems, 'venue');
  const bandItems = data.allContentfulBand.edges;

  return (
    <Layout>
      <SEO title="A Benefit for Make-A-Wish" />
      <Hero />
      <ContentPanel classNames="page-section--dark" slug={aboutKCRocksItem.slug} title={aboutKCRocksItem.title} subtitle={aboutKCRocksItem.childContentfulContentPanelSubtitleRichTextNode.json} content={aboutKCRocksItem.childContentfulContentPanelContentRichTextNode.json} />
      <Countdown />
      <ContentPanel classNames="page-section--purple" slug={aboutMAWItem.slug} title={aboutMAWItem.title} subtitle={aboutMAWItem.childContentfulContentPanelSubtitleRichTextNode.json} content={aboutMAWItem.childContentfulContentPanelContentRichTextNode.json} />
      <BandsList classNames="page-section--dark" bands={bandItems} />
      <Venue />
      <ContentPanel classNames="page-section--purple" slug={venueItem.slug} title={venueItem.title} subtitle={venueItem.childContentfulContentPanelSubtitleRichTextNode.json} content={venueItem.childContentfulContentPanelContentRichTextNode.json} />
    </Layout >
  );
};

export default IndexPage;

export const dataQuery = graphql`
  query PageQuery {
    allContentfulContentPanel {
      edges {
        node {
          slug
          title
          childContentfulContentPanelSubtitleRichTextNode {
            content {
              content {
                value
              }
            }
            json
          }
          childContentfulContentPanelContentRichTextNode {
            json
          }
        }
      }
    }
    allContentfulBand(sort: {order: ASC, fields: id}) {
      edges {
        node {
          slug
          title
          url
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
