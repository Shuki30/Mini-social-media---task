import React, { Component } from 'react';
import Header from './Header';
import {POSTS} from '../shared/posts';
import Post from './Post';

class Main extends Component{

  constructor(props) {
       super(props);
       this.state = {
           posts: POSTS
       };
   }

  render(){
    return(
      <div>
      <Header/>
      <Post posts={this.state.posts}/>
      </div>
    );
  }
}

export default Main;
