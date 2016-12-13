import React from 'react';
import speech from '../../services/Speech';


class ArticleListItem extends React.Component {
  playing = this.props.playing;
  clickHandler = this.props.click;

  handleClick(articleToPlay) {
    this.clickHandler(articleToPlay.headline);
    speech.articleContent = articleToPlay.content;

    switch(this.playing) {
      case 'FIRST_PLAY':
        console.log('firstplay');
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
      <li className="article-list-item">
        <button className="play" onClick={() => this.handleClick(this.props.article)}>Btn</button>
        <h3>{this.props.headline}</h3>
      </li>
    );
  }
}

export default ArticleListItem;