import React from 'react';

// Player component is located on top of the page and handle actions of the speech synthesis as play, pause and resuming.
// It receives the clicked articles headline and content held on list item elements from ArticleListItem.

class Player extends React.Component {
  playing;
  buttonState = 'play';
  clickHandler = this.props.click;

  setSpeechSynthesis = () => {
    window.speechSynthesis.cancel();
    // Match Sentences including specified abbreviations.
    let content = this.props.content.join("").match(/((|Oct.|Dec.|Mr|Dr|Ms\.)|[^.?]+?)*[.?]/gi);

    for (let i = 0; i < content.length; i++) {
      if ('speechSynthesis' in window) {
        this.utterance = new window.SpeechSynthesisUtterance();
        this.utterance.voice = 'Google US English';
        this.utterance.voiceURI = 'Google US English';
        this.utterance.lang = 'en-US';
        this.utterance.pitch = 0.7;
        this.utterance.rate = 1;
        this.utterance.volume = 1;
        this.utterance.text = content[i];

        // Logging utterance
        console.log(this.utterance);
        // Speak utterance
        window.speechSynthesis.speak(this.utterance);
        // Logging on speech start
        this.utterance.onstart = () => {
          console.log('starting speech');
        }
        // return this.utterance;
      } else { console.warn('The current browser does not support the speechSynthesis API.') }
    }

  }
  // Methods managing SpeechSynthesis actions

  // Invoking function responsible for setting utterance with article and playing it.
  play = () => {
    this.setSpeechSynthesis();
  }
  // Pause speech
  pause = () => {
    window.speechSynthesis.pause();
  }
  // Resume paused speech
  resume = () => {
    window.speechSynthesis.resume();
  }
  // Cancel speech freeing utterance queue
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

  // Click-handler managing Player component button
  handleClick() {
    switch(this.props.playing) {
      case 'LIST_PLAY':
        console.log('List Play');
        this.play();
        this.playing = 'PLAYING';
        this.buttonState = 'paused';
        this.clickHandler(this.playing, true, this.props.headline);
        console.log(this.playing);
        break;

      case 'PLAY':
        console.log('firstplay');
        this.play();
        this.playing = 'PLAYING';
        this.buttonState = 'paused'
        this.clickHandler(this.playing, true, this.props.headline);
        console.log(this.playing);
        break;

      case 'PLAYING':
        console.log('paused');
        this.pause();
        this.playing = 'PAUSED';
        this.buttonState = 'play'
        this.clickHandler(this.playing, true, this.props.headline);
        break;

      case 'PAUSED':
        console.log('resumed');
        this.resume();
        this.playing = 'PLAYING';
        this.buttonState = 'paused';
        this.clickHandler(this.playing, true, this.props.headline);
        break;

      case 'STOP':
        console.log('stop');
        this.stop();
        this.playing = 'STOPPED';
        this.clickHandler(this.playing);
        break;

      default: console.log('player error');
        break;
    }
  }

  listPlay = () => {
    if(this.props.playing === 'LIST_PLAY'){
      console.log('list play');
      this.handleClick();
    }
  }

  render(){
    return(
      <div className="player">
        <h3 className="player-headline">{this.props.headline}</h3>
        <button className={this.buttonState} onClick={() => this.handleClick()}></button>
        {this.listPlay()}
      </div>
    );
  }
};

export default Player;