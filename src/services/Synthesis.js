var SpeechSynthesis = function(article){
  this.utterance = new window.SpeechSynthesisUtterance();
  this.utterance.voice =  'Google US English';
  this.utterance.voiceURI = 'Google US English';
  this.utterance.lang = 'en-US';
  this.utterance.pitch = 0.8;
  this.utterance.rate = 1;
  this.utterance.text = article.toString();
  this.utterance.volume = 1;
};

SpeechSynthesis.prototype.onend = function(func) {
  this.utterance.onend = func;
};

SpeechSynthesis.prototype.onerror = function(func) {
  this.utterance.onerror = func;
};

SpeechSynthesis.prototype.speak = function() {
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(this.utterance);
};

SpeechSynthesis.prototype.pause = function() {
  window.speechSynthesis.pause();
};

SpeechSynthesis.prototype.cancel = function() {
  window.speechSynthesis.cancel();
};

SpeechSynthesis.prototype.resume = function() {
  window.speechSynthesis.resume();
};

module.exports = SpeechSynthesis;