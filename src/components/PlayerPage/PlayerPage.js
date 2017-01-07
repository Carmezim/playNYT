import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Player from '../Player/Player';
// import job from '../../services/CronJob';
import articlesData from '../../../articles.json';

class PlayerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      article: '',
      url: '',
      headlinePlay: '',
      headline: '',
      content: '',
      selected: '',
      playing: 'PLAY',
      index: null,
      initialized: false
    }
  }
  // Handle state changes through props from children to parent component.
  clickHandlerPlayer = (isPlaying, isInitialized, headlineOnPlayer, articleContent) => {
    let nextState = Object.assign({}, this.state, {playing: isPlaying, initialized: isInitialized, headlinePlay: headlineOnPlayer, content: articleContent      });
    this.setState(this.validateHeadline(nextState));
  }
  // validates if headline variable isn't empty
  validateHeadline = (state) => {
    let validation = {};
    if (this.state.headlinePlay.length === 0 && state.content === null) {
      validation.titleError = "Article can't be empty";
    }
    return Object.assign({}, state, validation);
  }

  componentWillMount() {
    this.setState({
      articles: articlesData,
      article: articlesData[0],
      content: articlesData[0].content,
      headlinePlay: articlesData[0].headline
    });
  }

  componentDidMount(){
    // job();
  }

  render() {
    return (
      <div className="player-page">
        <Player
          content={this.state.content}
          initialized={this.state.initialized}
          headline={this.state.headlinePlay}
          playing={this.state.playing}
          click={this.clickHandlerPlayer} />
        <ArticleList
          initialized={this.state.initialized}
          playing={this.state.playing}
          articles={this.state.articles}
          click={this.clickHandlerPlayer} />
      </div>
    );
  }
};

export default PlayerPage;
