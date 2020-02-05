import React from 'react';
import { SEO, Layout, Hero, Countdown, Venue } from '../components/';
import signature from '../images/signature.svg';
import thesamples from '../images/thesamples.jpg';
import counterculture from '../images/counterculture.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section className="page-section page-section--dark" id="about-kc-rocks">
      <div className="page-wrapper">
        <h1 className="section-title">About KC Rocks</h1>
        <h2 className="section-subtitle">It's amazing what good people can do <span className="text-highlight">when they get together for a great cause.</span></h2>
        <div className="columns">
          <p>That's the idea behind KC Rocks, a benefit for Make-A-Wish&reg; Missouri & Kansas.</p>
          <p>The power of positivity, community and friendship is what we hope to capture through a fun filled night of music at KC Rocks 2020.  This inaugural year of KC Rocks is held in April because it marks the beginning of spring which symbolizes love, hope, youth, growth…..and really fun parties….</p>
          <p>Make-A-Wish® Missouri & Kansas granted 433 wishes in 2019 and our hope is to grant even more in 2020. A wish come true helps children feel stronger, more energetic, more willing and able to battle their critical illness. For many, the wish marks a turning point in the fight against their illnesses. Doctors, nurses and other health professionals say, the wish experience works in concert with medicine to make their patients feel better emotionally and even physically. That is why wishes matter. That is why we grant wishes.</p>
          <p>We hope you can join us for an epic night featuring The Samples and Counter Culture and to support such a wonderful cause.</p>
          <p><img className="signature" src={signature} alt="Jeff and Janet Eden" /></p>
          <p><small><em>Jeff and Janet Eden</em></small></p>
        </div>
      </div>
    </section>
    <Countdown />
    <section className="page-section page-section--purple" id="about-make-a-wish">
      <div className="page-wrapper">
        <h1 className="section-title">About Make-A-Wish</h1>
        <h2 className="section-subtitle">A wish experience <span className="text-highlight">can be a game-changer</span> for a child with a critical illness.</h2>
        <div className="columns">
          <p>This one belief guides us in everything we do at Make-A-Wish®. It inspires us to grant wishes that change the lives of the kids we serve. It compels us to be creative in exceeding the expectations of every wish kid. It drives us to make our donated resources go as far as possible.</p>
          <p>Wishes are more than just a nice thing. And they are far more than gifts, or singular events in time. Wishes impact everyone involved - wish kids, volunteers, donors, sponsors, medical professionals and communities. The impact varies. For wish kids, just the act of making their wish come true can give them the courage to comply with their medical treatments. Parents might finally feel like they can be optimistic. And still others might realize all they have to offer the world through volunteer work or philanthropy.</p>
          <p>Whatever the odds, whatever the obstacles&hellip;wishes find a way to make the world better.</p>
        </div>
      </div>
    </section>
    <section className="page-section page-section--dark" id="bands">
      <div className="page-wrapper">
        <h1 className="section-title">The Bands</h1>
      </div>
      <div className="page-wrapper page-wrapper--wide">
        <div className="bands__wrapper">
          <a className="bands__item" href="http://thesamples.com/" target="_blank">
            <h2 className="bands__title">The Samples</h2>
            <img className="bands__image" src={thesamples} alt="The Samples" />
          </a>
          <a className="bands__item" href="https://www.facebook.com/countercultureband/" target="_blank">
            <h2 className="bands__title">Counter Culture</h2>
            <img className="bands__image" src={counterculture} alt="Counter Culture" />
          </a>
        </div>
      </div>
    </section>
    <Venue />
    <section className="page-section page-section--purple" id="venue">
      <div className="page-wrapper">
        <h1 className="section-title">The Venue</h1>
        <h2 className="section-subtitle">One of Kansas City’s most unique event spaces, <span className="text-highlight">housed in an industrial-chic warehouse.</span></h2>
        <div className="columns">
          <p>Originally built in the early 1930s, The Truman has been restored and adapted as an ideal space to host KC Rocks 2020! Conveniently located just two minutes from Downtown, The Truman is located in The East Crossroads.</p>
          <p>The Crossroads Arts District is a vibrant and diverse community that welcomes all walks of life and all forms of artistic expression. Home to more than 400 local artists and 100 independent studios, the Crossroads Arts District is one of the most concentrated gallery districts in the nation. Beyond the galleries, restaurants, and storefronts, you will find an equally impressive collection of professional design studios, architectural firms, advertising agencies, and other innovative businesses.</p>
          <p>The Truman is located at <a href="https://www.google.com/maps/place/The+Truman/@39.095258,-94.576122,15z/data=!4m2!3m1!1s0x0:0xd5f8572ee7fa137c?sa=X&ved=2ahUKEwjc1cqL6rjnAhVwma0KHXrcBBsQ_BIwCnoECBkQCA">601 E Truman Rd Kansas City, MO 64106</a>.</p>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
