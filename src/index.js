//import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Create a react component
const App = () => {
  return(
    <div className="">
      <ApprovalCard>
        <div>
        <h4>Warning!</h4>
        Are you sure youu want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 08:00 AM"
          commentData="Super sick post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 08:00 AM"
          commentData="Thats dope man!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 08:00 AM"
          commentData="Keep up the good work!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  )
};


//Take the component and show it on the screen

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
