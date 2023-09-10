import {useMemo} from "react";

/**
  * Пользовательская функция для сортировки массива постов по указанному свойству.
  *
  * @param {Array} posts - Массив постов для сортировки.
  * @param {string} sort - Свойство, по которому нужно сортировать посты.
  * @returns {Array} - Отсортированный массив постов.
 **/
export const useSortedPosts = (posts, sort) => {

    // Используем мемоизацию, чтобы убедиться, что отсортированный массив пересчитывается только при изменении `sort` или `posts`
    return useMemo(() => {
        if (sort) {
            // Сортируем массив постов на основе указанного свойства с использованием метода `localeCompare`
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        // Если не указано свойство для сортировки, возвращаем исходный массив постов
        return posts

    }, [sort, posts])
}

/**
  * Пользовательская функция для фильтрации и сортировки постов на основе указанных параметров.
  *
  * @param {Array} posts - Массив постов для фильтрации и сортировки.
  * @param {string} sort - Параметр сортировки.
  * @param {string} query - Поисковый запрос.
  * @returns {Array} - Отфильтрованный и отсортированный массив постов.
 **/
export const usePosts = (posts, sort, query) => {
    // Сортируем посты на основе указанного параметра сортировки
    const sortedPosts = useSortedPosts(posts, sort);

    // Используем мемоизацию для избежания ненужных повторных вычислений
    return useMemo(() => {
        // Фильтруем отсортированные посты на основе поискового запроса, если он указан
        return query ? sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())) : sortedPosts;

    }, [query, sortedPosts]);
}