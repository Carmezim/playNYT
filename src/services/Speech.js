import React from 'react';
import speechUtteranceChunker from './polyfill';


const speech = (article) => {
  if(article !== undefined && article !== null){
    console.log(article);

    let utterance = new window.SpeechSynthesisUtterance();
    let selected = window.speechSynthesis.getVoices();
    utterance.voice = selected[2];
    utterance.voiceURI = 'Google US English';
    utterance.lang = 'en-US';
    utterance.pitch = 10;
    utterance.rate = 1;
    utterance.text = article.toString();
    utterance.volume = 1;

    speechUtteranceChunker(utterance, {
      chunckLength: 160
    }, function() {
      console.log('Speech finished');
    });
  }
};


export default speech;