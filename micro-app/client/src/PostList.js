import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {

    const [posts, setPosts] = useState({});

    const fetchPost = async (event) => {
        const res = await axios.get("http://localhost:4002/posts");

        setPosts(res.data);
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const renderedPosts = Object.values(posts).map((post, i) => {
        return (
            <div
                className='card mt-2 bg-warning'
                style={{ width: "32%" }}
                key={post.id}
            >
                <div className="card-body fs-4 fw-bold">{i + 1}. {post.title}</div>
                <CommentList comments={post.comments} />
                <CommentCreate postId={post.id} />
            </div>
        )
    })

    return (
        <div>
            <h1 className='mt-4'>Posts: {renderedPosts.length}</h1>
            <div className='d-flex flex-row flex-wrap justify-content-between'>{renderedPosts}</div>
        </div>
    )
}

export default PostList
