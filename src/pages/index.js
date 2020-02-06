import React from 'react';
import { graphql } from 'gatsby';
import { SEO, Layout, Hero, ContentPanel, Countdown, Venue } from '../components/';
// import signature from '../images/signature.svg';
import thesamples from '../images/thesamples.jpg';
import counterculture from '../images/counterculture.jpg';

const findItemBySlug = (items, slug) => items.find(item => item.node.slug === slug).node;
const IndexPage = ({ data }) => {
  const contentPanelItems = data.allContentfulContentPanel.edges;
  const aboutKCRocksItem = findItemBySlug(contentPanelItems, 'about-kc-rocks');
  const aboutMAWItem = findItemBySlug(contentPanelItems, 'about-make-a-wish');
  const venueItem = findItemBySlug(contentPanelItems, 'venue');

  return (
    <Layout>
      <SEO title="A Benefit for Make-A-Wish" />
      <Hero />
      <ContentPanel classNames="page-section--dark" slug={aboutKCRocksItem.slug} title={aboutKCRocksItem.title} subtitle={aboutKCRocksItem.childContentfulContentPanelSubtitleRichTextNode.json} content={aboutKCRocksItem.childContentfulContentPanelContentRichTextNode.json} />
      <Countdown />
      <ContentPanel classNames="page-section--purple" slug={aboutMAWItem.slug} title={aboutMAWItem.title} subtitle={aboutMAWItem.childContentfulContentPanelSubtitleRichTextNode.json} content={aboutMAWItem.childContentfulContentPanelContentRichTextNode.json} />
      <section className="page-section page-section--dark" id="bands">
        <div className="page-wrapper">
          <h1 className="section-title">The Bands</h1>
        </div>
        <div className="page-wrapper page-wrapper--wide">
          <div className="bands__wrapper">
            <a className="bands__item" href="http://thesamples.com/" target="_blank" rel="noopener noreferrer">
              <h2 className="bands__title">The Samples</h2>
              <img className="bands__image" src={thesamples} alt="The Samples" />
            </a>
            <a className="bands__item" href="https://www.facebook.com/countercultureband/" target="_blank" rel="noopener noreferrer">
              <h2 className="bands__title">Counter Culture</h2>
              <img className="bands__image" src={counterculture} alt="Counter Culture" />
            </a>
          </div>
        </div>
      </section>
      <Venue />
      <ContentPanel classNames="page-section--purple" slug={venueItem.slug} title={venueItem.title} subtitle={venueItem.childContentfulContentPanelSubtitleRichTextNode.json} content={venueItem.childContentfulContentPanelContentRichTextNode.json} />
    </Layout >
  );
};

export default IndexPage;

export const query = graphql`
  query ContentPanelsQuery {
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
  }
`;