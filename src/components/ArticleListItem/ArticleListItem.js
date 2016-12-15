import React from 'react';
import speech from '../../services/Speech';


class ArticleListItem extends React.Component {
  // initializes variable that holds player state
  playing;
  // assign clickHandler function through props from PlayerPage component to class variable
  clickHandler = this.props.click;
  // initializes empty array used to hold map function indexes from ArticleList
  firstClick = [];

  // Handle clicks on articles listed immediately playing the audio of each article content
  handleClick(articleToPlay, index) {

    // checks if list item holding article on list was already clicked by searching its index on firstClick array
    if(!this.firstClick.includes(index)){
      this.playing = 'PLAYING';
      this.firstClick.push(index);
      speech.articleContent = articleToPlay.content;
      console.log('ARTICLE ITEM STATE', this.playing);
      this.clickHandler(articleToPlay.headline, this.playing);
      speech.startSpeech();

      console.log(this.firstClick);
    }
    else if (this.playing === 'PLAYING') {
      this.clickHandler(articleToPlay.headline, this.playing);
      speech.stop();
      speech.startSpeech();
    }

    else{
      this.clickHandler(articleToPlay.headline, this.playing);
      speech.play();
      this.playing = 'PLAYING';
      this.clickHandler(articleToPlay.headline, this.playing);

    }
  }


  render() {
    return (
      <li className="article-list-item" onClick={() => this.handleClick(this.props.article, this.props.indexKey)}>
        <h3>{this.props.headline}</h3>
      </li>
    );
  }
}

export default ArticleListItem;