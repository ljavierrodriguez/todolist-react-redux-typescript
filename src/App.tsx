import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import { AddArticle } from './components/AddArticle';
import { Article } from './components/Article';
import { addArticle, removeArticle } from './store/actionCreators';

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {
        articles.map((article: IArticle) => {
          return <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
          />
        })
      }
    </main>
  )

}

export default App;
