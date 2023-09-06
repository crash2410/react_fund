import React from 'react';
import PostItem from "./PostItem";

const PostList = ({post, title, removePost}) => {
    if (!post.length) {
        return <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
    }

    return (
        <>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {
                post.map(post => {
                    console.log(post.id);
                    return <PostItem removePost={() => removePost(post)} key={post.id} post={post}/>
                })
            }
        </>
    )
};

export default PostList;