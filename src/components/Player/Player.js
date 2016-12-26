import React from 'react';

// Player component is located on top of the page and handle actions of the speech synthesis as play, pause and resuming.
// It receives the clicked articles headline and content held on list item elements from ArticleListItem.

class Player extends React.Component {
  playing;
  article = this.props.content;
  clickHandler = this.props.click;

  setSpeechSynthesis = () => {
    // Match Sentences including specified abbreviations.
    let content = this.article.match(/((|Oct.|Dec.|Mr|Mr.|Dr|Ms\.)|[^.?]+?)*[.?]/gi);
    for (let i =0; i < content.length; i++) {
      // if ('speechSynthesis' in window) {
        this.utterance = new window.SpeechSynthesisUtterance();
        this.utterance.voice = 'Google US English';
        this.utterance.voiceURI = 'Google US English';
        this.utterance.lang = 'en-US';
        this.utterance.pitch = 0.7;
        this.utterance.rate = 1;
        this.utterance.volume = 1;
        this.utterance.text = content[i];

        console.log(this.utterance);

        window.speechSynthesis.speak(this.utterance);


        this.utterance.addEventListener('end', function () {
          window.speechSynthesis.cancel();
          console.log('ended');
        })
        // return this.utterance;
      // } else { console.warn('The current browser does not support the speechSynthesis API.') }
    }
  }


  play = () => {
    this.setSpeechSynthesis();
  }

  pause = () => {
    window.speechSynthesis.pause();
  }

  resume = () => {
    window.speechSynthesis.resume();
  }

  stop = () => {
    console.log('stop');
    window.speechSynthesis.cancel();
  }

  onend = () => {
    stop();
  }

  onerror = () => {
    stop();
  }


  handleClick() {

    switch(this.props.playing) {
      case 'FIRST_PLAY':
        console.log('firstplay');
        this.play();
        this.playing = 'PLAYING';
        this.clickHandler(this.props.headline, this.playing, true);
        break;

      case 'PLAYING':
        console.log('pause');
        this.pause();
        this.playing = 'PAUSED';
        this.clickHandler(this.props.headline, this.playing);
        break;

      case 'PAUSED':
        console.log('resume');
        this.resume();
        this.playing = 'PLAYING';
        this.clickHandler(this.props.headline, this.playing);
        break;

      case 'STOP':
        console.log('stop');
        this.stop();
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