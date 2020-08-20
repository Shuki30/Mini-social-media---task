import React, { Component } from 'react';
import Header from './Header';
import {POSTS} from '../shared/posts';
import {COMMENTS} from '../shared/comments';
import Newsfeed from './Newsfeed';
import Profile from './Profile';
import Renderpost from './PostComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props) {
       super(props);
       this.state = {
           posts: POSTS,
           comments: COMMENTS
       };
   }

  render(){

    const PostWithId=({match})=>
    {
      var comments = this.state.comments.filter( comment => comment.postid.toString() === (parseInt(match.params.postId,10).toString()) );
      var post = this.state.posts.filter( (post => post.id === parseInt(match.params.postId,10)) )[0];
      console.log(comments);
      console.log(post);
      return(
        <Renderpost post={post} Comments={comments} />
      )
    }

    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/home" component={() => <Newsfeed posts={this.state.posts} comments={this.state.comments} />} />
          <Route exact path="/profile" component={() => <Profile posts={this.state.posts} comments={this.state.comments} />} />
          <Route path='/post/:postId' component={PostWithId}/>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
