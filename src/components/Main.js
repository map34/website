import React from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';

import { SkillGraph, responsiveWidthFactory } from './SkillGraph';

import * as GA from '../utils/reactga';
import pic01 from '../images/pic01.webp';
import pic02 from '../images/pic02.webp';
import pic03 from '../images/pic03.webp';

class Main extends React.Component {
  state = {
    skill: 'frontend'
  }

  selectSkill = (skill) => {
    GA.event({
      category: 'User',
      action: `Clicked on Skill Type: ${skill}`,
      label: 'Skill Button Clicks'
    });
    this.setState({ skill });
  }

  onContactLinkClick = (type) => {
    GA.event({
      category: 'User',
      action: `Clicked on Contact Link: ${type}`,
      label: 'Contact Link Clicks'
    });
  }

  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle(); }}></div>;

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hello there, I am a self-proclaimed software engineer and technology enthusiast
            with interests in distributed systems,
            data processing, front-end development, automotive embedded systems, and artificial intelligence.
          </p>
          <p>
            I graduated from the University of Washington with a bachelor's degree in
            Electrical and Computer Engineering.
            My focus was mainly embedded systems and VLSI, but I also was immersed in the land of software engineering.
            I also minored in Applied Mathematics where I learned to utilize numerical methods
            to solve complex engineering problems.
          </p>
          <p>I am currently working at Okta in which I help architect, implement, and test
            identity access management solutions for software developers.
            Let's network and be friends!</p>
          {close}
        </article>

        <article
          id="frontend_work"
          className={`${this.props.article === 'frontend_work' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}
        >
          <h2 className="major">Frontend Work</h2>
          <h3 className="minor">Batch Images Uploader</h3>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>At MicaSense, one example of a frontend project I contributed to is to create a native desktop application
            for uploading files.
            Once the files are uploaded, a backend system will process these files for multispectral visualizations.
            The uploader automatically restarts the uploading process during network failures.
            The uploader also includes a smart queueing system to upload multiple high-definition images,
            updates automatically (evergreen),
            and allows users to select their captures based on GPS locations.
          </p>
          <p>
          Some of the software stacks used for this are Electron (NodeJS based framework),
          NPM, ReactJS, Redux, and Exiftool.
          One of the biggest challenges of this project is to make sure the UI is responsive when users upload
          a large amount of data (in the magnitude of 10,000 to 100,000 files at a time).</p>
          {close}
        </article>

        <article
          id="backend_work"
          className={`${this.props.article === 'backend_work' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Backend Work</h2>
          <h3 className="minor">Image Processing Platform</h3>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>At MicaSense, one example back-end project I contributed to is to engineer
            a containerized Python processing platform.
            The platform delivers a high volume of multispectral imagery and time-series data to customers,
            such as scientists, engineers, and farmers.
          </p>
          <p>An example of the platform’s capability is to export
            high-definition GeoTiffs with different types of vegetation layers.
            This system requires about 1,000 to 60,000 (mostly images) files to be uploaded at a time by users.
            Then, the system calibrates, registers, stitches, and verifies these files.
            This process constitutes a job workflow that is distributed across 100 to 200 worker nodes.
            Some of the tools used include Scipy, Numpy, OpenCV, Pandas, GDAL, and Airflow.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/prananda0203@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <p>Feel free to network with me through the following links or e-mail. I usually respond
            during business hours (9am - 5pm PST) on the weekdays. Thank you so much for visiting my website.
          </p>
          <ul className="icons main-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/map34"
                className="icon fa-linkedin"
                onClick={() => { this.onContactLinkClick('linkedin'); }}
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/map34"
                className="icon fa-github"
                onClick={() => { this.onContactLinkClick('github'); }}
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1dC5nHtxZGOhxzQ8mrtDLEYujfo1UPTO4dKALm8PwVhA/edit?usp=sharing"
                className="icon fa-file-text"
                onClick={() => { this.onContactLinkClick('resume'); }}
              >
                <span className="label">Resume</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          key={this.props.width}
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{
            display: 'none',
            minWidth: `${responsiveWidthFactory(this.props.width).minWidth}px`
          }}
        >
          <h2 className="major">Skills</h2>
          <div className="graph-selections">
            <ul>
              <li>
                <a
                  className={this.state.skill === 'frontend' ? 'selected' : ''}
                  href="javascript:;"
                  onClick={() => {this.selectSkill('frontend');}}
                >
                  Frontend
                </a>
              </li>
              <li>
                <a
                  className={this.state.skill === 'backend' ? 'selected' : ''}
                  href="javascript:;"
                  onClick={() => {this.selectSkill('backend');}}
                >
                  Backend
                </a>
              </li>
            </ul>
          </div>
          <SkillGraph
            skill={this.state.skill}
            width={this.props.width}
            timeout={this.props.timeout}
          />
          {close}
        </article>

      </div>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  width,
  height
});

Main.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default withSizes(mapSizesToProps)(Main);
