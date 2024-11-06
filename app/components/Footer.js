import React from 'react'

const Footer = () => {
  const currentyear=new Date().getFullYear();
  return (
    
    <div className='flex justify-center item center  p-2 bg-slate-800 '>
      copyright &copy;{currentyear}
    </div>
  )
}

export default Footer
