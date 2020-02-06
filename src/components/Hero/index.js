import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
      query {
        contentfulHero(slug: {eq: "kc-rocks-2020"}) {
          donateLinkText
          donateLinkUrl
          getTicketsLinkText
          getTicketsLinkUrl
          subtitle
          title
          backgroundImage {
            fluid(maxWidth: 1920) {
              sizes
              src
              srcSet
              aspectRatio
              base64
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    `}
      render={data => {
        const {
          donateLinkText,
          donateLinkUrl,
          getTicketsLinkText,
          getTicketsLinkUrl,
          subtitle,
          title,
          backgroundImage
        } = data.contentfulHero;
        return (
          <BackgroundImage
            Tag="section"
            className="hero"
            fluid={backgroundImage.fluid}
            backgroundColor={`#040e18`}
          >
            <div className="hero__content-wrapper">
              <div className="hero__text-wrapper">
                <h1 className="hero__title">{title}</h1>
                <h2 className="hero__subtitle">{subtitle}</h2>
              </div>
              <div className="button-group">
                <a className="button" href={getTicketsLinkUrl}>{getTicketsLinkText}</a>
                <a className="button button--reversed" href={donateLinkUrl}>{donateLinkText}</a>
              </div>
            </div>
          </BackgroundImage>
        )
      }}
    />
  );
};

export default Hero;
