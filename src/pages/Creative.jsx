import React from 'react'
import ResumeForm from '../components/Form/ResumeForm'
import CreativeTemp from '../templates/CreativeTemp'

const Creative = () => {
  return (
    <div className="flex pt-32 pb-32">
        <div className="w-full">
            <ResumeForm />
        </div>
        
        <div className="w-full">
            <CreativeTemp />
        </div>
    </div>
  )
}

export default Creative