import React from 'react';

import uniqueId from 'lodash/uniqueId';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import resumePdf from '../assets/adrian_prananda_resume.pdf';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

const data = [
  { subject: 'Math', A: 100, fullMark: 100 },
  { subject: 'Chinese', A: 98, fullMark: 100 },
  { subject: 'English', A: 86, fullMark: 100 },
  { subject: 'Geography', A: 99, fullMark: 100 },
  { subject: 'Physics', A: 85, fullMark: 100 },
  { subject: 'History', A: 65, fullMark: 100 },
];

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle();}}></div>;

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}
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
          <p>I am currently working at 4C Insights as a software development engineer in which I contribute
            to engineer both the responsive frontend and distributed backend systems.
            Let's network and be friends!</p>
          {close}
        </article>

        <article
          id="frontend_work"
          className={`${this.props.article === 'frontend_work' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}
        >
          <h2 className="major">Frontend Work</h2>
          <h3 className="minor">Batch Images Uploader</h3>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>One example of a frontend project I contributed to is
            to create a native desktop application for users to properly upload their data to us to be processed.
            Some of the capabilities of the application include automatic
            restarts during failure, smart queueing system to upload multiple high-definition images,
            automatic (ever green) updates, and ability for users to select their captures based on GPS.
          </p>
          <p>
            Some of the software stacks used for this is
            Electron (NodeJS based framework), NPM, ReactJS, Redux and Exiftool.
            One of the biggest challenges on this project is to make sure the UI is
            responsive when users upload a large amount of data
            (in the magnitude of 10,000 to 100,000 files a t a time).</p>
          {close}
        </article>

        <article
          id="backend_work"
          className={`${this.props.article === 'backend_work' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Backend Work</h2>
          <h3 className="minor">Image Processing Platform</h3>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>One example back-end project I contributed to is to engineer a containerized Python processing platform
            that is used extensively by principal scientists and engineers in my recent company. The purpose of the
            platform is to be able to process high-volume of image and time series data to deliver to the
            customers.
          </p>
          <p>Another example of the platform’s capability is to export high-definition Geotiffs with
            different types of vegetation layers. This requires about 1,000 to 60,000 (mostly images) files to
            be uploaded at a time by users, in which have to be properly radiometrically calibrated,
            registered, stitched, and verified. Some of the tools used include Scipy, Numpy, OpenCV,
            pandas, GDAL, and Airflow.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
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
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/map34" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/map34" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href={resumePdf} className="icon fa-file-text">
                <span className="label">Resume</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''}
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}
        >
          <h2 className="major">Skills</h2>
          <RadarChart
            key={this.props.timeout ? uniqueId : -1}
            cx={300}
            cy={250}
            outerRadius={150}
            width={600}
            height={500}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff' }}/>
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
          {/* <p>Hello there, I am a self-proclaimed software engineer and technology enthusiast
            with interests in distributed systems,
            data processing, front-end development, automotive embedded systems, and artificial intelligence.
          </p> */}
          {close}
        </article>

      </div>
    );
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
};

export default Main;
