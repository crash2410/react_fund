import React, {useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import {usePosts} from "../hooks/usePosts";

const PostFilter = ({posts, setSortedAndSearchedPosts}) => {

    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const sortedAndSearchedPosts = usePosts(posts, selectedSort, searchQuery);


    useEffect(() => {
        setSortedAndSearchedPosts(sortedAndSearchedPosts);
    }, [searchQuery, selectedSort, sortedAndSearchedPosts, setSortedAndSearchedPosts],);

    const sortPosts = (sortValue) => {
        setSelectedSort(sortValue);
    }


    return (<div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Введите название поста"
            />
            <MySelect value={selectedSort} onChange={(value) => sortPosts(value)} defaultValue={"DEFAULT"}
                      options={[{value: "title", name: "По названию"}, {value: "body", name: "По описанию"}]}/>
        </div>);
};

export default PostFilter;