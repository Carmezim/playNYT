import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';


class ArticleList extends React.Component {

  onClick() {

  }

  render() {
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <ArticleListItem key={index} content={articleItem.content} headline={articleItem.headline} />
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