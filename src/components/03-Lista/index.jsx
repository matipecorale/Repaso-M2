import { Component, useState } from 'react'

let id = 0;

export default class Lista extends Component {
    constructor() {
        super()
        this.state = {
            productos: []
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState({ productos: [...this.state.productos, { name: ev.target[0].value, id: id++ }] })
        //ev.target[0].value = '';
        ev.target.reset();
    }
    handleClose = (id) => {
        const array = this.state.productos.filter((producto) => producto.id !== id)//!!!!!
        this.setState({ productos: array });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input">Producto</label>
                    <input type="text" id='input' />
                    <button >Agregar</button>
                </form>
                <ul>
                    {
                        this.state.productos.map((producto) => {
                            return (
                                <li key={producto.id}>
                                    {producto.name}
                                    <button onClick={() => this.handleClose(producto.id)}>x</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }

}