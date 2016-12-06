import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
//import job from '../../Api/CronJob';
import articlesData from '../../../articles.json';

class PlayerPage extends React.Component {
  constructor() {
    super();
    this.state = {articles: [], url: '', headline: '', content: '', selected: ''}
  }

  componentWillMount() {
    this.setState({articles: articlesData});
  //  job();
  }

  render() {
    return (
      <div className="player-page">
      <ArticleList articles={this.state.articles} />
      </div>
    );
  }
};

export default PlayerPage;
