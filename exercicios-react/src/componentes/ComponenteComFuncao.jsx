import React from 'react'


export default props => {
    
    const aprovados = ['Marina', 'Mariana', 'Luiza', 'Laura']
    
    const geraItens = itens => {
        return itens.map( item => <li>{item}</li> )
    }

    return (
        <ul>
            {geraItens(aprovados)}
        </ul>
    )
}