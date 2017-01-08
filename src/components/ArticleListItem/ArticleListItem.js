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
    this.clickHandler(this.playing, true, articleToPlay.headline, articleToPlay.author, articleToPlay.content);
  }

  render() {
    return (
      <div className="article-list-item">
        <li className="list-item" onClick={() => this.handleClick(this.props.article)}>
          <h3>{this.props.headline}</h3>
          <p>{this.props.author}</p>
        </li>
      </div>
    );
  }
}

ArticleListItem.propTypes = {
  headline: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
  initialized: React.PropTypes.bool.isRequired
};

export default ArticleListItem;