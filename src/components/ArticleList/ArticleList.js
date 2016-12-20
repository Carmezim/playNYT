import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
// import speech from '../../services/Speech';

class ArticleList extends React.Component {
  playing = this.props.playing;
  render() {
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <ArticleListItem
            initialized={this.props.initialized}
            key={index}
            playing={this.playing}
            articleContent={articleItem.content}
            article={articleItem}
            headline={articleItem.headline}
            click={this.props.click}
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