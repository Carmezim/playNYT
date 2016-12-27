let SpeechSynthesis = function(article) {
  this.utterance = new window.SpeechSynthesisUtterance();
  this.utterance.voice = 'Google US English';
  this.utterance.voiceURI = 'Google US English';
  this.utterance.lang = 'en-US';
  this.utterance.pitch = 0.8;
  this.utterance.rate = 1;
  this.utterance.text = article.toString();
  this.utterance.volume = 1;
};

let timeoutResumeInfinity;

function resumeInfinity() {
  window.speechSynthesis.resume();
  timeoutResumeInfinity = setTimeout(function() {resumeInfinity()}, 1000);
}

function clearResume() {
  clearTimeout(timeoutResumeInfinity);
}

SpeechSynthesis.prototype.speak = function() {
  window.speechSynthesis.cancel();
  console.log('this.speak');
  window.speechSynthesis.speak(this.utterance);
  resumeInfinity();
};

SpeechSynthesis.prototype.pause = function() {
  clearResume();
  window.speechSynthesis.pause();
};

SpeechSynthesis.prototype.cancel = function() {
  clearResume();
  window.speechSynthesis.cancel();
};

SpeechSynthesis.prototype.resume = function() {
  resumeInfinity();
  window.speechSynthesis.resume();
};

SpeechSynthesis.prototype.onend = function() {
  clearResume();
  window.speechSynthesis.onend();
};

SpeechSynthesis.prototype.onerror = function() {
  window.speechSynthesis.cancel();
};

module.exports = SpeechSynthesis;