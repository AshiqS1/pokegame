import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard.js';

class Pokedex extends Component {

    render() {
        const { pokemon, exp, isWinner } = this.props;

        let title;
        if (isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {exp}</h4>
                <div className="Pokedex-card">
                    {pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;