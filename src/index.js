import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from 'faker'; 

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" content="test comment!" timeAgo="Just Now" dp={faker.image.avatar()} />
      <CommentDetail author="Tom" content="Hey! hows it going?" timeAgo="Today at 7:00pm"  dp={faker.image.avatar()}/>
      <CommentDetail author="Jane" content="REEEEEE!" timeAgo="Today at 6:00pm" dp={faker.image.avatar()}/>
      <CommentDetail author="Janet" content="jajajajajaja!" timeAgo = "Today at 5:00pm"  dp={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
