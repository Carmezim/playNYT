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
      playing: false
    }
  }

  componentWillMount() {

    this.setState({
      articles: articlesData,
      article: articlesData[0],
      headlinePlay: articlesData[0].headline,
    });
  }

  render() {
    return (
      <div className="player-page">

        <Player headline={this.state.headlinePlay} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
};

export default PlayerPage;
