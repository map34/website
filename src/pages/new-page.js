import React from 'react';
import Helmet from 'react-helmet';

class NewPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <h1>This is a new page</h1>
      </div>
    );
  }
}

export default NewPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query NewPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
