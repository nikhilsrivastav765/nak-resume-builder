import React from 'react'
import ModernTemp from '../templates/ModernTemp'
import ResumeForm from '../components/Form/ResumeForm'

const Modern = () => {
  return (
    <div className="flex pt-32 pb-32">
        <div className="w-full">
            <ResumeForm />
        </div>
        
        <div className="w-full">
            <ModernTemp />
        </div>
    </div>
  )
}

export default Modern