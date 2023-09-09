import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({post, title, removePost}) => {
    if (!post.length) {
        return <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
    }

    return (
        <>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {post.map(post => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem removePost={() => removePost(post)}  post={post}/>
                    </CSSTransition>
                })}
            </TransitionGroup>

        </>
    )
};

export default PostList;