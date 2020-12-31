//import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';
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
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 08:00 AM"
          commentData="Super sick post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 08:00 AM"
          commentData="Super sick post"
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
