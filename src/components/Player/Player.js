import React from 'react';
import speech from '../../services/Speech';

// Player component is located on top of the page and handle actions of the speech synthesis as play, pause and resuming.
// It receives the clicked articles headline and content held on list item elements from ArticleListItem.

class Player extends React.Component {
  playing;
  clickHandler = this.props.click;

  //Perform actions of playing, pausing and resuming audio depending on actual state.

  handleClick() {

    switch(this.props.playing) {
      case 'FIRST_PLAY':
        console.log('firstplay');
        speech.startSpeech();
        this.playing = 'PLAYING';
        this.clickHandler(this.props.headline, this.playing);
        break;

      case 'PLAYING':
        console.log('pause');
        speech.pause();
        this.playing = 'PAUSED';
        this.clickHandler(this.props.headline, this.playing);
        break;

      case 'PAUSED':
        console.log('resume');
        speech.resume();
        this.playing = 'PLAYING';
        this.clickHandler(this.props.headline, this.playing);
        break;

      case 'STOP':
        console.log('stop');
        speech.stop();
        this.playing = 'STOPPED';
        this.clickHandler(this.props.headline, this.playing);
        break;

      default: console.log('player error');
        break;
    }

  }
   render(){
     return(
       <div>
         <h3 className="player">{this.props.headline}</h3>
         <button onClick={() => this.handleClick()}>Play</button>
         {this.props.playing}
       </div>
     );
   }
};

export default Player;