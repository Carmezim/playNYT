import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
// import speech from '../../services/Speech';

class ArticleList extends React.Component {
  playing = this.props.playing;
  render() {
    var clickHandler = this.props.click;
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <ArticleListItem
            key={index}
            playing={this.playing}
            articleContent={articleItem.content}
            article={articleItem}
            headline={articleItem.headline}
            click={clickHandler}
          />
        );
      });
    }
    return (
      <ul className="article-list">
        {article}
      </ul>
    );
  }
};

export default ArticleList;