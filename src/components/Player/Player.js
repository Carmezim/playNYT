import React from 'react';

// Player component is located on top of the page and handle actions of the speech synthesis as play, pause and resuming.
// It receives the clicked articles headline and content held on list item elements from ArticleListItem.

class Player extends React.Component {
  playing;
  buttonState = 'play';
  clickHandler = this.props.click;

  // Fetch API voices
  voices = window.speechSynthesis.getVoices();

  // Handle all Speech configuration as the speech itself
  setSpeechSynthesis = () => {
    // Making sure to free utterance queue
    window.speechSynthesis.cancel();

    // Need to learn regex and improve this
    const reg = /((|Oct.|ST. |Dec.|Gov.|Mo.|A.|B.|C.|W.|I.|L.|U.|V.|P.|J.|N.|Mr.|Dr.|Ms\.)|[^.?]+?)*[.?]/gi; //LOL
    let content = this.props.content.join("").match(reg);
    // Check SpeechSynthesis is supported on browser
    if ('speechSynthesis' in window) {
      // Speak content divided in smaller sizes at a time to bypass API character limit bug
      for (let i = 0; i < content.length; i++) {
        // Utterance configuration
        this.utterance = new window.SpeechSynthesisUtterance();
        this.utterance.voice = this.voices[2];
        this.utterance.voiceURI = this.voices[2];
        this.utterance.lang = 'en-US';
        this.utterance.pitch = 0.75;
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

      }

    } else { console.warn('The current browser does not support the speechSynthesis API.'); }
  }

  // Methods managing SpeechSynthesis actions

  // Methods responsible for handling Player actions, setting utterance with article and playing/pausing/resuming it.
  play = () => {
    this.setSpeechSynthesis();
  }

  pause = () => {
    window.speechSynthesis.pause();
  }

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

  // Click-handler managing Player component button actions by simulating Play/Pause/Resume functionalities
  handleClick() {
    switch(this.props.playing) {
      case 'LIST_PLAY':
        console.log('List Play');
        this.play();
        this.playing = 'PLAYING';
        this.buttonState = 'paused';
        this.clickHandler(this.playing, true, this.props.headline, this.props.author);
        console.log(this.playing);
        break;

      case 'PLAY':
        console.log('firstplay');
        this.play();
        this.playing = 'PLAYING';
        this.buttonState = 'paused'
        this.clickHandler(this.playing, true, this.props.headline, this.props.author);
        console.log(this.playing);
        break;

      case 'PLAYING':
        console.log('paused');
        this.pause();
        this.playing = 'PAUSED';
        this.buttonState = 'play'
        this.clickHandler(this.playing, true, this.props.headline, this.props.author);
        break;

      case 'PAUSED':
        console.log('resumed');
        this.resume();
        this.playing = 'PLAYING';
        this.buttonState = 'paused';
        this.clickHandler(this.playing, true, this.props.headline, this.props.author);
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
  // Handles playlist action by invoking handleclick() which already takes care of all Player action cases
  listPlay = () => {
    if(this.props.playing === 'LIST_PLAY'){
      console.log('list play');
      this.handleClick();
    }
  }

  render(){
    // Voices won't change mid speech due async nature of getVoices() method by only starting speech when API voices finish loading
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
    };

    return(
      <div className="player">
        <h3 className="player-headline">{this.props.headline}</h3>
        <p>{this.props.author}</p>
        <button className={this.buttonState} onClick={() => this.handleClick()}></button>
        {this.listPlay()}
      </div>
    );
  }
};

// Type checking
Player.propTypes = {
  author: React.PropTypes.string.isRequired,
  playing: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
  content: React.PropTypes.array
}

export default Player;
