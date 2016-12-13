import React from 'react';

class Player extends React.Component {
   render(){
     return(
       <h3 className="player">{this.props.headline}</h3>
     );
   }
};

export default Player;