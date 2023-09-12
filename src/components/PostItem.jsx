import React from 'react';
import {useNavigate } from 'react-router-dom';
const PostItem = ({post, removePost}) => {
    const router = useNavigate();


    return (
        <div key={post.id} className="post">
            <div className="post__content">
                <strong >{post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className={'post__btns'}>
                <button onClick={() => router(`/posts/${post.id}`)} className="text-wrapper">Открыть</button>
                <button onClick={() => removePost(post)} className="text-wrapper">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;

