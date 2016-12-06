import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import speech from '../../services/Speech';


class ArticleList extends React.Component {

  handleClick(articleToPlay) {
     speech(articleToPlay.content);
  }

  render() {
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <div key={index} onClick={() => this.handleClick(articleItem)}>
            <ArticleListItem headline={articleItem.headline} />
          </div>
        );
      });
    }
    return (
      <div className="article-list">
        {article}
      </div>
    );
  }
};

export default ArticleList;