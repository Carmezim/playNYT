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
      headlinePlay: '',
      headline: '',
      content: '',
      selected: '',
      playing: 'FIRST_PLAY',
      index: null,
      firstPlay: ''
    }
  }

  clickHandlerPlayer(articleOnPlayer) {
    console.log(articleOnPlayer);
    this.setState({
      headlinePlay: articleOnPlayer.headline
    });
  }

  componentWillMount() {

    this.setState({
      articles: articlesData,
      article: articlesData[0],
    });
  }

  render() {
    console.log(this.state.headlinePlay);
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
