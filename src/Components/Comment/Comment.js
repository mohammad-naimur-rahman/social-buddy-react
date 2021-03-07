import React from 'react';

const Comment = ({ comment }) => {
    const { name, email, body } = comment;
    return (
        <div style={{ border: '1px solid lightgray', padding: '5px 10px' }}>
            <h4>{name}</h4>
            <h6>From: {email}</h6>
            <p>Comment: {body}</p>
        </div>
    );
};

export default Comment;