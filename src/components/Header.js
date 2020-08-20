import React, {Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse} from 'reactstrap' ;
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import {USERS} from '../shared/users';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          users:USERS
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

render() {

var username=[];
for (var i=0;i< (this.state.users.length); i++){
    username[i]=this.state.users[i].username;
}

  return(
    <div>
      <Navbar dark color="dark" expand="md" >
          <div className="col-md-4 col-sm-5 cols">
            <NavbarBrand href="\" className="brand">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-2"/>
              Instagram
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggleNav} className="col-sm-6"/>
          <Collapse isOpen={this.state.isNavOpen} navbar className="cols">
          <div className="col-md-6 col-sm-5 cols">
                <Searchbar  options={username}/>
          </div>
          <div className="col-md-6 col-sm-2">
            <Nav navbar>

              <NavItem>
                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg ml-4 mr-2"></span></NavLink>
              </NavItem>

              <NavItem>
                  <NavLink className="nav-link"  to='/profile'><span className="fa fa-user-circle fa-lg ml-4 mr-2"></span></NavLink>
              </NavItem>

            </Nav>
          </div>
          </Collapse>
      </Navbar>
    </div>
  );
}
}

export default Header;
