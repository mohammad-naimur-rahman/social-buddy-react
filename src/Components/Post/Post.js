import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div style={{ padding: '20px', margin: '15px', borderRadius: '3px', boxShadow: '0 0 5px rgba(0, 128, 128, .6)', width: '400px' }}>
            <h3><strong>{id}: </strong>{title}</h3>
            <p>{body}</p>
            <button style={{ padding: '7px 15px', borderRadius: '3px', margin: '5px 10px', background: 'teal', color: 'white', border: 'none', fontSize: '16px', cursor: 'pointer' }} onClick={() => showComments(id)}>See details</button>
        </div>
    );
};

export default Post;