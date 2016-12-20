import React from 'react';

// Player component is located on top of the page and handle actions of the speech synthesis as play, pause and resuming.
// It receives the clicked articles headline and content held on list item elements from ArticleListItem.

class Player extends React.Component {
  playing;
  clickHandler = this.props.click;
  timeoutResumeInfinity;

  resumeInfinity = () => {
    console.log('resuming');
    window.speechSynthesis.resume();
    this.timeoutResumeInfinity = setTimeout(this.resumeInfinity, 1000);
  }

  clearResume = () => {
    clearTimeout(this.timeoutResumeInfinity);
  }

  setSpeechSynthesis = () => {
    if ('speechSynthesis' in window) {
      this.utterance = new window.SpeechSynthesisUtterance();
      this.utterance.voice = 'Google US English';
      this.utterance.voiceURI = 'Google US English';
      this.utterance.lang = 'en-US';
      this.utterance.pitch = 0.7;
      this.utterance.rate = 1;
      this.utterance.text = "  PRINCEVILLE, N.C. — Betty Cobb’s house is a shell nearly two months after floodwaters went halfway up the walls of her one-story home.   ";
      this.utterance.volume = 1;

    } else {
      console.warn('The current browser does not support the speechSynthesis API.')
    }
  }

  play = () => {
    this.setSpeechSynthesis();
    this.resumeInfinity();
    window.speechSynthesis.speak(this.utterance);
  }

  pause = () => {
    this.clearResume();
    window.speechSynthesis.pause();
  }

  resume = () => {
    this.resumeInfinity();
    window.speechSynthesis.resume();
  }

  stop = () => {
    this.clearResume();
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