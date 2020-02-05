import React from 'react';
import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from '../';
import '../../css/app.css';

const PrimaryNav = () => {

  const data = useStaticQuery(graphql`
    query MenuLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            classNames
          }
        }
      }
    }
  `);

  return (
    <nav className="primary-nav">
      <ul className="primary-nav__list">
        {data.site.siteMetadata.menuLinks.map(({ name, link, classNames }) => (
          <li className="primary-nav__item" key={`primary-nav__item--${name}`}>
            <Link className={classnames('primary-nav__link', classNames)} to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PrimaryNav
