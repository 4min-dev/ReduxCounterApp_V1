import React from 'react'
import '../../../style/css/UI/errors/errorInterface.css'
import '../../../style/css/UI/buttons/errorReloadButton.css'
import { GreenStyleButton } from '../buttons/GreenStyleButton'

type TErrorHandler = {
    error:string
}

export const ErrorInterface:React.FC<TErrorHandler> = ({error}) => {

    const reloadPage = () => window.location.reload()

  return (
    <div className='errorInterface'>
      <h1>There was an error - {error}</h1>
      <GreenStyleButton handleClick={reloadPage} buttonText='Reload page'/>
    </div>
  )
}