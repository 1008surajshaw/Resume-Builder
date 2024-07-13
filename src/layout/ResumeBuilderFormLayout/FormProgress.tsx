import React from 'react'

type Props = { step: number; setStep: Function };

const FormProgress = (props: Props) => {
  return (
       <h1 className='text-blue-500'> {props.step}</h1>
  )
}

export default FormProgress