import './Formulario.css'
import {CampoTexto} from '../CampoTexto'

export const Formulario = () => {

  const textoH2 = "Preencha os dados para criar o card do colaborador"
  return(
    <section className='formulario'>
      <form>
        <h2>{textoH2}</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Poste o endereço da imagem"/>
      </form>
    </section>
  )
}