import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostFrom = ({createNewPost}) => {
    const [post, setPost] = useState({
        id: 5,
        title: "JS - 5",
        body: "Description - 5"
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: +new Date()
        }

        createNewPost(newPost);
        setPost({
            id: 0,
            title: "",
            body: ""
        })

    }

    return (
        <form>
            {/* Управляемый компонент */}
            <MyInput value={post.title} onChange={e => setPost({
                ...post,
                title: e.target.value
            })} type="text" placeholder="Название поста"/>
            {/* Неуправляемый компонент */}
            <MyInput value={post.body}  onChange={ e => setPost({
                ...post,
                body: e.target.value
            })} type="text" placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostFrom;