import React , {useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,Media,Button
} from 'reactstrap';

function Renderpost({post}) {

  const [state, setState] = useState(true);

  function toggle() {
    setState(!state);
  }

  return(
    <Card className="card">
      <Media>
        <Media left top href="#">
          <img src={post.dp} className="propic" alt="propic" />
        </Media>
        <Media body>
          <p className="username">
            {post.username}
          </p>
        </Media>
      </Media>
      <br/>
      <CardImg src={post.image} className="post_img" alt="Card image cap" />
      <CardBody className="caption">
        <CardText><span className="caption_usr">{post.username}</span> &nbsp;&nbsp;{post.caption}</CardText>
        <Button className="no-border" outline onClick={toggle}>
        {state ? <span className="fa fa-heart-o fa-2x"></span> : <span className="fa fa-heart heart fa-2x"></span>}
        </Button>
      </CardBody>
    </Card>
  );
}

const Post = (props) => {

  const allposts = props.posts.map((post) => {
    return (
        <div className="container">
        <Renderpost post={post}/>
        </div>
    );
  });

  return (
    <div>
      {allposts}
    </div>
  );
};

export default Post;
