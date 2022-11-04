import React from 'react'
import PropTypes from 'prop-types'

 const FirstApp = ({title,subtitle}) => {
    const getResult = (a,b)=>{
        return a+b
    }

  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}
FirstApp.defaultProps={
    title: 'No hay Titulo',
    subtitle: 'No hay Subtitulo' 
}
export default FirstApp;

