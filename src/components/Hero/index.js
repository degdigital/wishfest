import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero_bg_large.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className="hero"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div className="hero__content-wrapper">
              <div className="hero__text-wrapper">
                <h1 className="hero__title">KC Rocks 2020</h1>
                <h2 className="hero__subtitle">April 18, 2020 - The Truman KC - Kansas City, MO</h2>
              </div>
              <div className="button-group">
                <a className="button" href="https://www.thetrumankc.com/tickets/">Get Tickets</a>
                <a className="button button--reversed" href="https://secure2.wish.org/site/SPageServer?pagename=donate_now&chid=073-000">Donate</a>
              </div>
            </div>
          </BackgroundImage>
        )
      }}
    />
  );
};

export default Hero
