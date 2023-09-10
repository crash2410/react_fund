import React, {useEffect, useMemo, useRef, useState} from 'react';
import './styles/App.css';
import Counter from "./components/Counter";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostFrom from "./components/PostFrom";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [sortedAndSearchedPosts, setSortedAndSearchedPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
        const posts = await PostService.getAll()
        setPosts(posts);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const PostListLoad = ({sortedAndSearchedPosts}) => {
        return sortedAndSearchedPosts.length !== 0 ? <PostList removePost={removePost} post={sortedAndSearchedPosts} title="Список постов:"/> :
                <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
    }

    return (<div className="App">
        <MyButton style={{margin: "10px 0"}} onClick={() => setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostFrom createNewPost={addNewPost}/>
        </MyModal>

        <hr style={{margin: "10px 0"}}/>
        <PostFilter posts={posts} setSortedAndSearchedPosts={setSortedAndSearchedPosts}/>
        {
            postError && !isPostLoading && <h1>Произошла ошибка ${postError}</h1>
        }
        {isPostLoading ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader/></div> :
            <PostListLoad sortedAndSearchedPosts={sortedAndSearchedPosts}/>}



    </div>);
}

export default App;
