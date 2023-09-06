import React from 'react';

const PostItem = ({post, removePost}) => {

    return (
        <div key={post.id} className="post">
            <div className="post__content">
                <strong >{post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <button onClick={() => removePost(post)} className="text-wrapper">Удалить</button>
        </div>
    );
};

export default PostItem;

