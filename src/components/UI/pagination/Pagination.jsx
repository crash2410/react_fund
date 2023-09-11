import React from 'react';
import styles from './Pagination.module.css';
import {usePagination} from "../../../hooks/usePagination";

/**
 * Компонент Pagination отвечает за отображение навигации по страницам.
 *
 * @param {number} totalPage - Общее количество страниц.
 * @param {function} changePage - Функция обработчик для изменения текущей страницы.
 * @param {number} page - Текущая активная страница.
 * @returns {JSX.Element} - Возвращает JSX-элемент навигации по страницам.
 **/
const Pagination = ({totalPage, changePage, page}) => {
    // Используем кастомный хук usePagination для получения массива со страницами.
    let pagesArray = usePagination(totalPage);

    return (
        <div className={styles.page__wrapper}>
            {/* Итерируемся по массиву страниц и отображаем каждую страницу внутри <span> */}
            {pagesArray.map(p => {
                return <span
                    key={p}
                    // Применяем классы стилей: styles.page и styles.page__current.
                    // Если текущая страница равна p, то применяем класс styles.page__current,
                    // иначе применяем только класс styles.page.
                    className={page === p ? styles.page + ' ' + styles.page__current: styles.page}
                    onClick={() => changePage(p)}>
                    {/* Выводим номер страницы */}
                    {p}
                </span>
            })}
        </div>
    );
};

export default Pagination;
