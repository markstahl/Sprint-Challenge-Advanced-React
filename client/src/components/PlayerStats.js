import React from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';

class PlayerStats extends React.Component {
  constructor() {
    super();
    this._isMounted = false;
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({isMounted: true}, () => {
        axios.get(`http://localhost:5000/api/players`)
            .then( (res) => {
                if(this._isMounted) {
                    this.setState({ 
                      players: res.data 
                    });
                }
            } ).catch(err => console.log(err))
    });
}

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="player-cards">
        {this.state.players.map(player => {
          return (
            <PlayerCard 
              key={player.id}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          );
        })}
      </div>
    );
  }
}

export default PlayerStats;