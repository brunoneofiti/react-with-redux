import React, {Component} from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        // this.state.numero  = this.state.numero + 1
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alteraNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca })
    }
    
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Mais</button>
                <button onClick={this.menosUm}>Menos</button>
                <button onClick={() => this.alteraNumero(10)}>Mais 10</button>
                <button onClick={() => this.alteraNumero(-10)}>Menos 10</button>
            </div>
        )       
    }
}