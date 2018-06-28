import React from 'react';

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p className="copyright">Design. Implement. Test. Ask Questions!</p>
  </footer>
);

Footer.propTypes = {
  timeout: React.PropTypes.bool
};

export default Footer;
