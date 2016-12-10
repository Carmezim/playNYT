import speechUtteranceChunker from './polyfill';
import SpeechSynthesis from './Synthesis';


var speech = {

  startSpeech: function(articleContent) {
    this.speechSynthesis = new SpeechSynthesis(articleContent.toString());
    speechUtteranceChunker(this.speechSynthesis.utterance, {
      chunckLenght: 160
    }, function () {
      this.stop();
    });
    this.speechSynthesis.onend(this.onend);
    this.speechSynthesis.onerror(this.onerror);
  },

  play: function(content) {
    this.startSpeech(content.toString());
    this.speechSynthesis.speak();
  },

  pause: function() {
    this.speechSynthesis.pause();
  },

  resume: function() {
    this.speechSynthesis.resume();
  },

  stop: function() {
    this.speechSynthesis.cancel();
  },

  onend: function() {
    stop();
  },

  onerror: function() {
    stop();
  },

};
export default speech;