import React from 'react'
import ReactDOM from 'react-dom'
import Contador from './componentes/Contador'

// import ComponenteClasse from './componentes/ComponenteClasse'
// import Pai from './componentes/Pai'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import FamiliaSantos from './componentes/FamiliaSantos'
// import { CompA, CompB as BB } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import PrimeiroComponente from './componentes/PrimeiroComponente'


const elemento = document.getElementById('root')

ReactDOM.render(
    <div>

        <Contador numeroInicial={10} />



        {/* <ComponenteClasse valor="Meu componente extende de Component" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Andrade">
            <Membro nome="Laura" />
            <Membro nome="Luiza" />
        </Familia> */}
        {/* {<FamiliaSantos sobrenome="Santos" />}  */}
        {/* <MultiElementos /> */}
        {/* <CompA valor="Sou A" />
        <BB valor="BBBB" /> */}
        {/* <PrimeiroComponente valor="Bom dia" outro={666} /> */}

    </div>
    , elemento)
