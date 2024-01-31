import './CampoTexto.css'

export const CampoTexto = (props) => {

  const placeholderModification = `${props.placeholder}...`
  const labelModification = `${props.label}`
  
  return (
    <div className="campo-texto">
      <label>{labelModification}</label>
      <input placeholder={placeholderModification}/>
    </div>
  )
}