import React from 'react';

class ArticleListItem extends React.Component {
  // variable to hold player state
  playing;
  // Pass clickHandler function through props from PlayerPage component
  clickHandler = this.props.click;
  // initialized flag
  initialized = this.props.initialized;

  // Handle clicks on articles listed immediately playing the audio of each article content
  handleClick(articleToPlay) {
    // Asserting if an utterance is being played it gets canceled
    this.playing = 'LIST_PLAY';
    // Sending data to PlayerPage component changing state
    this.clickHandler(this.playing, true, articleToPlay.headline, articleToPlay.content);
  }

  render() {
    return (
      <div className="article-list-item-container">
        <li className="article-list-item" onClick={() => this.handleClick(this.props.article)}>
          <h3>{this.props.headline}</h3>
        </li>
      </div>
    );
  }
}

export default ArticleListItem;