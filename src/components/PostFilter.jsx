import React, {useEffect, useMemo, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({posts, setSortedAndSearchedPosts}) => {

    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    /**
     * Возвращает мемоизированный отсортированный массив постов.
     *
     * Функция использует хук useMemo для мемоизации отсортированного массива постов на основе
     * зависимостей selectedSort и posts. Если selectedSort присутствует, функция создает новый
     * массив из массива posts и сортирует его по свойству selectedSort объектов. В противном
     * случае, возвращается исходный массив posts.
     *
     * @returns {Array} Мемоизированный отсортированный массив постов.
     */

    const sortedPosts = useMemo(() => {
        console.log('222')
        if (selectedSort){
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts
    }, [selectedSort, posts]);

    /**
     * Возвращает мемоизированный массив отсортированных и отфильтрованных постов.
     *
     * Функция использует хук useMemo для мемоизации массива отсортированных и отфильтрованных постов
     * на основе зависимостей searchQuery и sortedPosts. Если searchQuery присутствует, функция фильтрует
     * массив sortedPosts на основе свойства title каждого поста, сравнивая его с searchQuery (регистронезависимое сравнение).
     * В противном случае, возвращается исходный массив sortedPosts.
     *
     * @returns {Array} Мемоизированный массив отсортированных и отфильтрованных постов.
     */
    const sortedAndSearchedPosts = useMemo(() => {
        return searchQuery ? sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase())) : sortedPosts;
    }, [searchQuery, sortedPosts]);

    useEffect(() => {
        setSortedAndSearchedPosts(sortedAndSearchedPosts);
    }, [searchQuery, sortedPosts]);

    const sortPosts = (sortValue) => {
        setSelectedSort(sortValue);
    }


    return (<div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Введите название поста"
            />
            <MySelect value={selectedSort} onChange={sortPosts} defaultValue={"DEFAULT"}
                      options={[{value: "title", name: "По названию"}, {value: "body", name: "По описанию"}]}/>
        </div>);
};

export default PostFilter;