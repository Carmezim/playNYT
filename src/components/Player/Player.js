import React from 'react';
// import speech from '../../services/Speech';

class Player extends React.Component {

   render(){
     let articleHeadline;
     if(this.props.headline !== null && this.props.headline !== ''){
       articleHeadline = this.props.headline;
    }
    return(
      <div className="player">
        <h3>{articleHeadline}</h3>
      </div>
    );
  }
};

export default Player;