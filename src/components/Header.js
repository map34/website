import React from 'react';
import Typist from 'react-typist';

const descTexts = [
  { text: 'A Full-stack Software Engineer.' },
  { text: 'An Embedded Systems Engineer.' },
  { text: 'A World Traveler.' },
  { text: 'A Music Aficionado.'},
  { text: 'A Go Getter.' }
];

class Header extends React.Component {
  state = {
    typing: true
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  }

  render() {
    return (
      <header id="header" style={this.props.timeout ? {display: 'none'} : {}}>
        <div className={`logo ${this.props.rotateIcon ? 'rotating' : ''}`}>
          <span onClick={() => {this.props.onOpenArticle('skills');}} className="icon fa-database"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Mochamad Adrian Prananda</h1>
            {this.state.typing ?
              <Typist onTypingDone={this.done}>
                {
                  descTexts.map(token => [
                    <p>{token.text}</p>,
                    <Typist.Backspace count={token.text.length} delay={1000} />
                  ])
                }
              </Typist> : ''
            }
          </div>
        </div>
        <nav className="gen-selections">
          <ul>
            <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('intro');}}>Intro</a></li>
            <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('frontend_work');}}>Frontend Work</a></li>
            <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('backend_work');}}>Backend Work</a></li>
            <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('contact');}}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
};

export default Header;
