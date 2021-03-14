import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
        <h5>
          Hi, I'm <span className="bold">Alex Ingberg</span>
        </h5>
          Data Scientist & Computer Engineer.
          <br/> <br/>
          Researching and analyzing data in various projects on my spare time. 
          <br/> <br/>
          Music lover, travelling fanatic and also<a href='https://photos.alexingberg.com/' className="link"> an amateur photographer. </a>
          <br/> <br/>
          Drop me a line!
        </div>
      </div>
    )
  }
}

export default About