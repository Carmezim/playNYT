import React from 'react';
import speech from '../../services/Speech';


class ArticleListItem extends React.Component {
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
    return (
      <div className="article-list-item">
        <li>
          <button onClick={() => this.handleClick(this.props.articleContent)}>Btn</button>
          <h3>{this.props.headline}</h3>
        </li>
      </div>
    );
  }
}

export default ArticleListItem;