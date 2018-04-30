import {Bond} from 'oo7';
import {bonds} from 'oo7-parity';
import {Rdiv} from 'oo7-react';
import React from 'react';

// truco para ver el contendio
// de bonds
console.log(bonds);

export class App extends React.Component {

    constructor()
    {
        super();
        this.nombre = new Bond();
        this.state = {
        };
        // Se debe hacer cuando uno declara
        // un metodo!
        this.miClick = this.miClick.bind(this);
    }

    miClick()
    {
        this.nombre.trigger("Nombre nuevo");
    }

    render() {
        return (
            <div>
                <Rdiv>
                    {bonds.height}
                    {bonds.head.map(h => JSON.stringify(h))}
                </Rdiv>
                <button
                    onClick={this.miClick}
                    type="Button">
                    Button
                </button>
            </div>
        );
    }
}
