import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import speech from '../../services/Speech';

class ArticleList extends React.Component {
  playing = this.props.playing;

  handleClick(articleToPlay) {
    switch(this.playing) {
      case 'FIRST_PLAY':
        console.log('firstplay');
        speech.articleContent = articleToPlay;
        speech.play();
        this.playing = 'PLAYING';
        break;

      case 'PLAYING':
        console.log('pause');
        speech.pause();
        this.playing = 'PAUSED';
        break;

      case 'PAUSED':
        console.log('resume');
        speech.resume();
        this.playing = 'PLAYING';
        break;

      default: console.log('player error');
        break;
    }
  }

  render() {
    let article;
    if(this.props.articles) {
      article = this.props.articles.map((articleItem, index) => {
        return(
          <div key={index}>
            <button onClick={() => this.handleClick(articleItem.content)}>Btn</button>
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