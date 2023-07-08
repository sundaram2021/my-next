"use client"
import React from 'react'
import Login from '@/app/components/Login'
import { Modal } from '@/app/components/Modal'
import { useRouter } from 'next/navigation';


function page() {
    const router = useRouter();
  return (
    <Modal onClose={() => router.back()} >
        <div className='fixed inset-0 bg-zinc-900/20 z-10'>
            <div className='container flex items-center h-full max-w-lg mx-auto'>
                <div className='relative bg-white w-full h-fit py-20 px-2 rounded-lg'>
                    <Login />
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default page