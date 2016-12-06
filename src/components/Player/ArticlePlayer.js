import React from 'react';
import {Speech} from '../../../node_modules/react-speech/dist/react-speech';

class ArticlePlayer extends React.Component {
  render(){
    return(
      <div className="article-player"
        <h1>{this.props.headline}</h1>
        <Speech text={this.props.content} />
      </div>
    );
  }
};

export default ArticlePlayer;

