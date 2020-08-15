import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class About extends Component {
    render() {
        return (
          <div className="main">
            <span>Company:ThoughtWorks Local</span><br/>
            <span>Location Xi'an</span>
            <br/>
            <br/>
            <span>For more information,please</span><br/>
            <span>view our </span>
            <NavLink className="red" exact to='/'>website.</NavLink>
          </div>
        );
      }
}
export default About;