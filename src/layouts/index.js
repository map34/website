import React from 'react';
import '../assets/scss/main.scss';
import Helmet from 'react-helmet';

class Template extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;
    const { children } = this.props;

    const content = (
      <div id="wrapper" className="page">
        <div style={{
          maxWidth: '1140px'
        }}>
          {children()}
        </div>
      </div>
    );

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        {content}
      </div>
    );
  }
}

export default Template;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
