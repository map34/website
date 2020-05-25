import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
      </div>
    );
  }
}

export default BlogPostTemplate;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
