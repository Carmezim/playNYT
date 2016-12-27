import speechUtteranceChunker from './polyfill';
import SpeechSynthesis from './Synthesis';


var speech = {
  articleContent: [],

  startSpeech: function() {
    this.speechSynthesis = new SpeechSynthesis(this.articleContent);
    speechUtteranceChunker(this.speechSynthesis.utterance, {
      chunckLenght: 150
    }, function () {
      this.stop();
    });
    this.speechSynthesis.onend(this.onend);
    this.speechSynthesis.onerror(this.onerror);
  },

  play: function() {
    this.startSpeech();
    this.speechSynthesis.speak();
  },

  pause: function() {
    this.speechSynthesis.pause();
  },

  resume: function() {
    this.speechSynthesis.resume();
  },

  stop: function() {
    console.log('stop');
    this.speechSynthesis.cancel();
  },

  onend: function() {
    stop();
  },

  onerror: function() {
    stop();
  },

};
speech.SpeechSynthesis = SpeechSynthesis;
export default speech;