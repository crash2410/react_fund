import React, {useMemo, useRef, useState} from 'react';
import './styles/App.css';
import Counter from "./components/Counter";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostFrom from "./components/PostFrom";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "23sasd", body: "Description - 1"},
        {id: 2, title: "J34aS - 2", body: "Description - 2"},
        {id: 3, title: "JS - 3", body: "Description - 3"},
        {id: 4, title: "df", body: "Description - 4"}
    ]);
    const [sortedAndSearchedPosts, setSortedAndSearchedPosts] = useState([]);

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    return (<div className="App">
        <PostFrom createNewPost={addNewPost}/>
        <hr style={{margin: "10px 0"}}/>
        <PostFilter posts={posts} setSortedAndSearchedPosts={setSortedAndSearchedPosts}/>
        {sortedAndSearchedPosts.length !== 0 ? <PostList removePost={removePost} post={sortedAndSearchedPosts} title="Список постов:"/> :
            <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>}

    </div>);
}

export default App;
