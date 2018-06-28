import React from 'react';
import '../assets/scss/main.scss';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      loading: 'is-loading'
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    });

  }

  handleCloseArticle() {

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      });
    }, 350);

  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;
    const { location, children } = this.props;

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
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        {content}

        <div id="bg"></div>
      </div>
    );
  }
}

export default Template;

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
