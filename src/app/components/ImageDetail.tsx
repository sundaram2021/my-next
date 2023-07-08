'use client'

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

interface imageDetailProps {
    link?: string
}

function ImageDetail(props: imageDetailProps) {
    const { link } = props;
    const router = useRouter()
    const param = useParams()
  return (
    <div className='w-80 h-80 bg-slate-950'>        
        <button className='w-20 h-10 rounded-md text-lg text-white' onClick={() => router.back()}>Back</button>
        <div className='w-40 h-40 bg-slate-950 rounded-lg mx-auto my-auto'>Link {link ? link : param.link}</div>
    </div>
  )
}

export default ImageDetail