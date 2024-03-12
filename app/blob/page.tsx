'use client'

import dynamic from 'next/dynamic'

const Blob = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Blob), { ssr: false })
const BaseView = dynamic(() => import('@/components/canvas/View').then((mod) => mod.BaseView), {ssr: false})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Random Page</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Maybe an about me section</h1>
          <p className='mb-8 text-2xl leading-normal'>Blah blah blah blah</p>
        </div>
      </div>

      <BaseView className='absolute top-0 flex h-screen w-full flex-col items-center justify-center'>
          <Blob />
        <Common />
      </BaseView>
    </>
  )
}