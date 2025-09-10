import React from 'react'

const Footer = () => {

const footerData =["BSIT-01", "Purposive Communication", "Group 4"]

  return (
    <div className='flex sm:flex-row sm:justify-between w-full border-t flex-col   '>

    {footerData.map((f: string, i) => (
        <p key={i} className='text-muted-foreground mt-2.5'>{f}</p>
    ))}
    </div>
  )
}

export default Footer
