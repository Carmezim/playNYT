import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import speech from '../../services/Speech';

class ArticleList extends React.Component {

  handleClick(articleToPlay) {
    speech.articleContent = articleToPlay;
    speech.play();
  }

  handleClick_2() {
    speech.pause();
  }

  handleClick_3() {
    speech.resume();
  }

  handleClick_4() {
    speech.stop();
  }

  render() {
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <div key={index}>
            <button onClick={() => this.handleClick(articleItem.content)}>button 1</button>
            <button onClick={() => this.handleClick_2()}>button 2</button>
            <button onClick={() => this.handleClick_3()}>button 3</button>
            <button onClick={() => this.handleClick_4()}>button 4</button>
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