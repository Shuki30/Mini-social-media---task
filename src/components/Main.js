import React, { Component } from 'react';
import Header from './Header';
import {POSTS} from '../shared/posts';
import {COMMENTS} from '../shared/comments';
import {USERS} from '../shared/users';
import Newsfeed from './Newsfeed';
import Profile from './Profile';
import Renderpost from './PostComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props) {
       super(props);
       this.state = {
           posts: POSTS,
           comments: COMMENTS,
           users : USERS
       };
   }

  render(){

    const PostWithId=({match})=>
    {
      var comments = this.state.comments.filter( comment => comment.postid.toString() === (parseInt(match.params.postId,10).toString()) );
      var post = this.state.posts.filter( (post => post.id === parseInt(match.params.postId,10)) )[0];
      return(
        <Renderpost post={post} Comments={comments} />
      )
    }

    const ProfileWithId=({match})=>
    {
      var comments = this.state.comments;
      var posts = this.state.posts;
      var user = this.state.users.filter( user => user.id.toString() === (parseInt(match.params.userId,10).toString()))[0];
      console.log("user");
      console.log(user);
      if(user == null){
        user=this.state.users[0];
      }
      return(
        <Profile posts={posts} comments={comments} user={user}/>
      )
    }

    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/home" component={() => <Newsfeed posts={this.state.posts} comments={this.state.comments} />} />
          <Route exact path="/profile/:userId" component={ProfileWithId} />
          <Route path='/post/:postId' component={PostWithId}/>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
