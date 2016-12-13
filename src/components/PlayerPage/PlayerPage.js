import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Player from '../Player/Player';
//import job from '../../Api/CronJob';
import articlesData from '../../../articles.json';

class PlayerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      article: '',
      url: '',
      headlinePlay: 'testing',
      headline: '',
      content: '',
      selected: '',
      playing: 'FIRST_PLAY',
      index: null,
      firstPlay: ''
    }
  }

  clickHandlerPlayer = (articleOnPlayer) => {
    let nextState = Object.assign({}, this.state, {headlinePlay: articleOnPlayer});
    this.setState(this.validateHeadline(nextState));
  }
    validateHeadline = (state) => {
      let validation = {};
      if (state.headlinePlay.length === 0) {
        validation.titleError = "this.state.headlinePlay is receiving an empty value";
      }
      return Object.assign({}, state, validation);
    }



  componentWillMount() {
    this.setState({
      articles: articlesData,
      article: articlesData[0],
    });
  }

  render() {

    return (
      <div className="player-page">
        <Player headline={this.state.headlinePlay} />
        <ArticleList
          firstPlay={this.state.firstPlay}
          playing={this.state.playing}
          articles={this.state.articles}
          click={this.clickHandlerPlayer} />
      </div>
    );
  }
};

export default PlayerPage;
