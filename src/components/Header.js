import React, {Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse} from 'reactstrap' ;
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import {usernames} from '../shared/usernames';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

render() {
  return(
    <div>
      <Navbar dark color="dark" expand="md" >
          <div className="col-md-4 col-sm-5 cols">
            <NavbarBrand href="\" className="brand">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-2"/>
              Instagram
            </NavbarBrand>
          </div>
          <div className="col-md-4 col-sm-5 cols">
            <Searchbar  options={usernames}/>
          </div>
          <div className="col-md-4 col-sm-2">
            <NavbarToggler onClick={this.toggleNav}/>
            <Collapse isOpen={this.state.isNavOpen} navbar className="cols">
            <Nav navbar>
              <NavItem>
                  <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg ml-4 mr-2"></span></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link"  to='/'><span className="fa fa-user-circle fa-lg ml-4 mr-2"></span></NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          </div>
      </Navbar>
    </div>
  );
}
}

export default Header;
