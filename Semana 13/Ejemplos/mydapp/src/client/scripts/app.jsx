import {Bond} from 'oo7';
import {bonds} from 'oo7-parity';
import {Rdiv, Rspan} from 'oo7-react';
import React from 'react';

const CounterABI = [{"constant":false,"inputs":[{"name":"_option","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hasVoted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":true,"name":"option","type":"uint256"}],"name":"Voted","type":"event"}];

const Opciones = ["Google", "Microsoft", "Apple"];

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
        this.counter = bonds.makeContract('0xADB233f71aE8558Fba8243b4011135eE390C0f95', CounterABI);
    }

    miClick()
    {
        this.nombre.trigger("Nombre nuevo");
    }

    render () {
        return (<div>
            {Opciones.map((n, i) => (<div key={i}>
                <Rspan style={{
                    borderLeft: this.counter
                        .votes(i)
                        .map(v => `${1 + v * 10}px black solid`)
                }}>
                    <span style={{float: 'left', minWidth: '3em'}}>
                        {n}
                    </span>
                </Rspan>
            </div>))}
        </div>);
    }
}
