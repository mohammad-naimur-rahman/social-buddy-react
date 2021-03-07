import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';


const PostDetails = () => {
    const { postID } = useParams();
    const [detail, setdetail] = useState({});
    const { title, body } = detail;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(res => res.json())
            .then(data => setdetail(data));
    }, [postID])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postID])
    return (
        <div style={{ padding: '40px 50px' }}>
            <h3>This is a post no: {postID}</h3>
            <p>Post title: {title}</p>
            <p>Post: {body}</p>
            <div>
                {
                    comments.map(cm => <Comment comment={cm}></Comment>)
                }
            </div>
        </div>
    );
};

export default PostDetails;