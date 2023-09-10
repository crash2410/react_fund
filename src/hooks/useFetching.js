import {useState} from "react";

/**
 * Пользовательский хук для обработки получения данных.
 *
 * @param {function} callback - Функция обратного вызова, которая будет выполнена для получения данных.
 * @returns {Array} - Массив, содержащий функцию получения данных, состояние isLoading и состояние ошибки.
 **/
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    /**
     * Функция для получения данных.
     * */
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}