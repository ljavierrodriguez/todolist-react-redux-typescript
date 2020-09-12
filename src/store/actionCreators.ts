import * as actionTypes from './actionTypes';

export const addArticle = (article: IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article
    }

    return simulateHttpRequest(action)
}

export const removeArticle = (article: IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article
    }

    return simulateHttpRequest(action)
}

export const simulateHttpRequest = (action: ArticleAction) => {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}