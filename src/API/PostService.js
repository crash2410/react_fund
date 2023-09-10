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
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data
    }
}