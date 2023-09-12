// Функция getPagesCount вычисляет общее количество страниц, исходя из общего количества элементов и лимита элементов на странице
export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}