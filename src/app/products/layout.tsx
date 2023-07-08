import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className=''>  
      {children}
      </body>
    </html>
  )
}

export default layout