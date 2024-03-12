'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Cat } from '@/components/models/CatAnime'
import { Heart } from '@/components/models/AnimeHeart'
import { Classroom } from '@/components/models/ClassroomAnime'
import { Mushroom } from '@/components/models/Mushroom'
import { Macbook } from '@/components/models/Macbook'
import { MeshReflectorMaterial } from '@react-three/drei'

const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false });
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false });
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false });

import { BaseView } from "@/components/canvas/View";
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  // @ts-ignore
    return (
        <>
            <div className="bg-gradient-to-b from-indigo-200 m-0">
                <div className='m-0 flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-full'>
                    {/* jumbo */}
                    <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                        <p className='w-full uppercase'>Bianca Mendoza's Portfolio</p>
                        <h1 className='my-4 text-5xl font-bold leading-tight'>Software Engineer</h1>
                        <p className='mb-8 text-2xl leading-normal'>ABOUT ME HERE</p>
                    </div>

                    <div className='h-screen text-center md:w-3/5'>
                        <BaseView className='flex w-full h-screen flex-col items-center justify-center'>
                            <Suspense fallback={null}>
                                <Mushroom scale={5} position={[4, -3, -38]} rotation={[0, Math.PI / 4, 0]}/>
                                <Cat scale={0.4} position={[-4, -4, -20]} rotation={[0.0, 0.1, 0]} />
                                <Common color={'#50509b'}/>
                                <fog attach="fog" args={['#50509b', 0, 85]} />
                                <group position={[0, -4.5, -10]}>
                                <mesh rotation={[-Math.PI / 2 , 0, 0]}>
                                    <planeGeometry args={[100, 100]} />
                                    <MeshReflectorMaterial
                                    blur={[0, 0]}
                                    resolution={2048}
                                    mixBlur={1}
                                    mixStrength={100}
                                    mirror={1}
                                    roughness={1}
                                    depthScale={1.2}
                                    minDepthThreshold={0.4}
                                    maxDepthThreshold={1.4}
                                    color="#161832"
                                    metalness={0.3}
                                    />
                                </mesh>
                                </group>
                            </Suspense>
                        </BaseView>
                    </div>
                </div>

                <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
                        {/* first row */}
                    <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
                        <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h2>
                        <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
                    </div>
                    <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
                        <BaseView orbit className='relative h-full  sm:h-48 sm:w-full'>
                            <Suspense fallback={null}>
                            <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                            <Common color={'lightpink'} />
                            </Suspense>
                        </BaseView>
                    </div>
                        {/* second row */}
                    <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
                        <BaseView orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'>
                            <Suspense fallback={null}>
                            <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
                            <Common color={'lightblue'} />
                            </Suspense>
                        </BaseView>
                    </div>
                    <div className='w-full p-6 sm:w-1/2'>
                        <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Dom and 3D are synchronized</h2>
                        <p className='mb-8 text-gray-600'>
                            3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You
                            tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to
                            have multiple views with a single, performant canvas. These views will follow their tracking elements,
                            scroll along, resize, etc.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
