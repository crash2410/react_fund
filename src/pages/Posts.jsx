import React, {useEffect, useState} from 'react';
import './Posts.css';

import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostFrom from "../components/PostFrom";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/page";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [sortedAndSearchedPosts, setSortedAndSearchedPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPagesCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const PostListLoad = ({sortedAndSearchedPosts}) => {
        return sortedAndSearchedPosts.length !== 0 ?
            <PostList removePost={removePost} post={sortedAndSearchedPosts} title="Список постов:"/> :
            <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
    }

    const changePage = (page) => {
        setPage(page);
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
        {postError && !isPostLoading && <h1>Произошла ошибка ${postError}</h1>}
        {isPostLoading ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader/></div> :
            <PostListLoad sortedAndSearchedPosts={sortedAndSearchedPosts}/>}

        <Pagination totalPage={totalPage} changePage={changePage} page={page}/>


    </div>);
}

export default Posts;
