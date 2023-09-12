import axios from "axios";

/**
 * Класс сервиса для обработки запросов API, связанных с постами.
 **/
export default class PostService {

    /**
     * Получает все посты из API.
     *
     * @returns {Promise} - Промис, который разрешается в массив постов.
     **/
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getPostById(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts' + '/' + id);
    }
}