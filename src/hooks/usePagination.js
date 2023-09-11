export const usePagination = (totalPage) => {
    let numberOfPages = [];

    for (let i = 0; i < totalPage; i++) {
        numberOfPages.push(i + 1);
    }

    return numberOfPages
}