import React from 'react';
// import speech from '../../services/Speech';

class Player extends React.Component {
   render(){
     return(
       <h3 className="player">{this.props.headline}</h3>
     );
   }
};

export default Player;