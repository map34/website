import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p className="copyright">Design. Implement. Test. Ask Questions!</p>
    <br />
    <p className="copyright">Version: {props.version}</p>
    <p className="copyright">Powered by</p>
    <ul className="icons footer-icons">
      <li>
        <a
          href="https://www.gatsbyjs.org/"
          className="icon gatsby-icon"
        >
          <span className="label">Gatsby</span>
        </a>
      </li>
      <li>
        <a
          href="https://marketingplatform.google.com/about/analytics/"
          className="icon ga-icon"
        >
          <span className="label">Google Analytics</span>
        </a>
      </li>
      <li>
        <a
          href="https://reactjs.org/"
          className="icon react-icon"
        >
          <span className="label">React</span>
        </a>
      </li>
      <li>
        <a
          href="https://sass-lang.com/"
          className="icon sass-icon"
        >
          <span className="label">SASS</span>
        </a>
      </li>
    </ul>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
  version: PropTypes.string
};

export default Footer;
