import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setposts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setposts(data))
            .catch(err => alert(err))
    }, [])

    const divStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        flesGrow: 1
    }
    return (

        <div>
            <h1>This is home</h1>
            <h3>I have got {posts.length} post</h3>
            <div style={divStyle}>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Home;