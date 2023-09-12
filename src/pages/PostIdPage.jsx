import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchPostsById, isPostLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostsById(params.id);
    }, [])

    return (
        <>
            <h1>Вы открыли страницу поста № {params.id}. {}</h1>
            <div>
                {isPostLoading ? <Loader/> : <div>
                    <p>{post.title} {post.id}</p>
                </div>}
            </div>
        </>
    );
};

export default PostIdPage;