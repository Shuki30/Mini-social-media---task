import React , {useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,Media,Button,Form, FormGroup,Input,Col
} from 'reactstrap';
import {USERS} from '../shared/users';

function Renderpost({post,Comments}) {

  const [like, setLike] = useState(true);
  const [comment,setComment] = useState(false);

  var users = USERS;
  console.log(users);
  var post_user;

  for(var i=0; i < users.length ; i++){
      if(users[i].id === post.userid){
        post_user = users[i].username;
      }
  }

  function like_toggle() {
    setLike(!like);
    console.log("like");
  }

  function comment_toggle(){
    setComment(!comment);
  }

  const Rendercomments = ({comments}) => {
      return(
      <div className="comments">
      <p><u>Comments</u></p>
      {comments.map(comment => {
        return (
          <p><span className="caption_usr">{comment.username}</span> &nbsp; {comment.comment}</p>
        );
      })}
      </div>
    );
  }

  return(
    <Card className="card">
      <Media>
        <Media left top href="#">
          <img src={post.dp} className="propic" alt="propic" />
        </Media>
        <Media body>
          <p className="username">
            {post_user}
          </p>
        </Media>
      </Media>
      <br/>
      <CardImg src={post.image} className="post_img" alt="Card image cap" />
      <CardBody className="caption">
        <Button className="no-border" outline onClick={like_toggle}>
        {like ? <span className="fa fa-heart-o fa-2x"></span> : <span className="fa fa-heart heart fa-2x"></span>}
        </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className="no-border" outline onClick={comment_toggle}>
        <span className="fa fa-comment fa-2x"></span>
        </Button>
        <CardText><br></br><span className="caption_usr">{post_user}</span> &nbsp;&nbsp;{post.caption}</CardText>
        {comment? <Rendercomments comments={Comments}/>:<div></div>}
      </CardBody>
      <Form className="comment_form">
        <FormGroup row>
          <Col sm={10} className="comment_input">
            <Input type="comment" name="comment" placeholder="Add a comment.." className="no_border_radius"/>
          </Col>
          <Col sm={2} className="comment_submit">
            <Button className="no_border_radius">Post</Button>
          </Col>
        </FormGroup>
      </Form>
    </Card>
  );
}

export default Renderpost;
