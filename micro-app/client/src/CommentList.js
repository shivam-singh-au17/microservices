import React from 'react'

/*
import React, { useState, useEffect } from 'react'
import axios from 'axios'
*/

const CommentList = ({ comments }) => {

    /*
    const [comment, setComment] = useState({});

    const fetchComment = async (event) => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComment(res.data);
    }

    useEffect(() => {
        fetchComment();
    }, [])

    */

    const renderedcomment = Object.values(comments).map((comment) => {

        let content;

        if (comment.status === "approved") {
            content = comment.content;
        }

        if (comment.status === "pending") {
            content = "This comment is awaiting moderation";
        }

        if (comment.status === "rejected") {
            content = "This comment has been rejected";
        }

        return (
            <li
                key={comment.id}
            >
                {content}
            </li>
        )
    })

    return (
        <div>
            <h3 className='px-3'>All Comment: {comments.length}</h3>
            <ul>{renderedcomment}</ul>
        </div>
    )
}

export default CommentList
