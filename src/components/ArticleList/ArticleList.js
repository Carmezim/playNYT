import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
// import speech from '../../services/Speech';
class ArticleList extends React.Component {
  render() {
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <ArticleListItem
            initialized={this.props.initialized}
            key={index}
            playing={this.props.playing}
            articleContent={articleItem.content}
            article={articleItem}
            headline={articleItem.headline}
            author={articleItem.author}
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

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired,
  initialized: React.PropTypes.bool.isRequired,
  playing: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired
};

export default ArticleList;