import React from 'react';
import '../assets/scss/main.scss';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import * as GA from '../utils/reactga';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.version = props.data.site.siteMetadata.version;
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      rotateIcon: true
    };
    this.timeoutIds = [];
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    GA.initializeGA(this.props);
    this.timeoutIds.push(setTimeout(() => {
      this.setState({loading: ''});
      // Rotate after finishing loading
      this.timeoutIds.push(setTimeout(() => {
        this.setState({
          rotateIcon: false
        });
      }, 1600));
    }, 100));
  }

  componentWillUnmount() {
    this.timeoutIds.forEach(id => {
      if (id) {
        clearTimeout(id);
      }
    });
  }

  handleOpenArticle(article) {
    GA.event({
      category: 'User',
      action: `Clicked on article ${article}`,
      label: 'Article Clicks'
    });

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      });
    }, 350);

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      });
    }, 350);

  }

  render() {
    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <div id="wrapper">
          <Header
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
            rotateIcon={this.state.rotateIcon}
          />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
          />
          <Footer timeout={this.state.timeout} version={this.version} />
        </div>
        <div id="bg"></div>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        version
      }
    }
  }
`;

export default IndexPage;
