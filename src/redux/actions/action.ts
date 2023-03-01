export function setCurrentUserAction(book: string) {
    console.log(book)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}