import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <Membro nome="Serginho" sobrenome="Chulapa" />
        <Membro nome="Paulinho" sobrenome="MacLAren" />
        <Membro nome="Kleber" sobrenome="Pereira" />
        <Membro nome="Alberto" sobrenome={props.sobrenome} />
    </div>