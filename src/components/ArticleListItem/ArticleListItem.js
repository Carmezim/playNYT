import React from 'react';

class ArticleListItem extends React.Component {
  // initializes variable that holds player state
  playing;
  // assign clickHandler function through props from PlayerPage component to class variable
  clickHandler = this.props.click;
  // initializes empty array used to hold map function indexes from ArticleList
  initialized = this.props.initialized;

  // Handle clicks on articles listed immediately playing the audio of each article content
  handleClick(articleToPlay) {
    // checks if list item holding article on list was already clicked by searching its index on firstClick array
    this.playing = 'PLAYING';
    this.clickHandler(articleToPlay.headline, this.playing, true, articleToPlay);
  }

  render() {
    return (
      <li className="article-list-item" onClick={() => this.handleClick(this.props.article)}>
        <h3>{this.props.headline}</h3>
      </li>
    );
  }
}

export default ArticleListItem;