import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/alexing" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.medium.com/@alexing" target="_blank">
              <i className="fa fa-medium"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/alexingberg" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:hi@alexingberg.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links