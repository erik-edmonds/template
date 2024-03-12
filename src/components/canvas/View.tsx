'use client'

import React from 'react'
import { ComponentType, forwardRef, useState, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import dynamic from "next/dynamic";
import { Card, CardBody} from "@nextui-org/react";
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

import styles from "./Components.module.css";
import {Model} from "@/templates/models/Models";

type ViewProps = {
    children: ComponentType;
    color: ComponentType;
    classes: string;
    animation: string;
};

// @ts-ignore
export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

export const VRef = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})

export const BaseView = dynamic(() => import('@/components/canvas/View').then((mod) => mod.VRef), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-65'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

export const  ModelView =({children, color, classes}: ViewProps) => {
    return (
        <div className={classes+" content-canvas"} >
            <Card
                isBlurred
                isPressable
                className="border-none bg-background/60 dark:bg-default-100/50 h-full w-full"
                shadow="lg">
                <CardBody>
                    <BaseView orbit className={`relative h-full sm:h-48 sm:w-full`}>
                        <Suspense fallback={null}>
                            {children}
                            {color}
                        </Suspense>
                    </BaseView>
                </CardBody>
            </Card>
        </div>
    )
}

export const TextView = dynamic(() => import('@/components/canvas/View').then((mod) => mod.VRef), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

TextView.displayName = 'TextView'
ModelView.displayName = 'ModelView'
VRef.displayName = 'VRef'

function CardRow(props) {
    //const model = null;
    return(
        <div className='mx-auto my-0 flex w-full flex-col flex-wrap items-center p-0 md:flex-row machine-learning lg:w-4/5'>
            {
                (props.sectionId % 2 === 1)
                    ? (
                        <>
                            <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
                                <h2 className='mb-3 text-3xl font-bold leading-none'>{props.title}</h2>
                                <p className='mb-8'>{props.detail}</p>
                            </div> {
                            (props.sectionId === 1)
                                ? (
                                    <>
                                        <ExpandableCard classes={'relative my-12 lg:h-full w-full animate-bounce py-0 sm:w-1/2 md:mb-40'}>
                                            { //TODO: Make size, route, scale dynamic
                                                (props.logo)
                                                    ? <Model logo route='/blob' scale={2} position={[0, -1.6, 0]} />
                                                    : <Model path={ props.model } spin={true} route='/blob' scale={2} position={[0, -1.6, 0]} />
                                            }
                                            <Common color={'rgba(244, 244, 247, 0.2)'} />
                                        </ExpandableCard>
                                    </>
                                )
                                : (
                                    <>
                                        <ExpandableCard classes={'relative my-12 lg:h-full w-full  py-0 sm:w-1/2 md:mb-40'}>
                                            { //TODO: Make size, route, scale dynamic
                                                (props.logo)
                                                    ? <Model logo  route='/blob' scale={2} position={[0, -1.6, 0]} />
                                                    : <Model path={ props.model } spin={true} route='/blob' scale={2} position={[0, -1.6, 0]} />
                                            }
                                            <Common color={'rgba(244, 244, 247, 0.2)'} />
                                        </ExpandableCard>
                                    </>
                                )
                        }
                        </>
                    )
                    : (
                        <>
                            <ExpandableCard classes={'relative my-12 lg:h-full w-full py-0 sm:w-1/2 md:mb-40'}>
                                { //TODO: Make size, route, scale dynamic
                                    (props.logo)
                                        ? <Model logo  route='/blob' scale={2} position={[0, -1.6, 0]} />
                                        : <Model path={props.model} spin={true} route='/blob' scale={2} position={[0, -1.6, 0]} />
                                }
                                <Common color={'rgba(244, 244, 247, 0.2)'} />
                            </ExpandableCard>
                            <div className='w-full p-6 sm:w-1/2'>
                                <h2 className='mb-3 text-3xl font-bold leading-none'>{props.title}</h2>
                                <p className='mb-8'>{props.detail}</p>
                                <p className='mb-8'>
                                </p>
                            </div>
                        </>
                    )
            }
        </div>
    )
}


function CardSection(props) {
    const rows = props.data;
    return (
        <>
            <div className={"mx-auto my-0 flex w-full flex-col flex-wrap items-center p-0 md:flex-row lg:w-4/5 "+props.categoryKey}>
                <div className='flex w-screen flex-col p-0 text-center md:w-full md:text-center'>
                    <h1 className='my-0 text-5xl font-bold leading-normal'>{props.categoryName}</h1>
                    {
                        rows.map((data) => {
                                return <CardRow key={data.key} {...data} />
                            }
                        )}
                </div>
            </div>
        </>
    )
}


export function Section(props) {
    const list = props.list;
    return (
        <>
            {
                list.map(category => {
                    return <CardSection data={category.data} categoryName={category.categoryName} categoryKey={category.categoryKey} />
                })
            }
        </>
    )
}

export function ExpandableCard({children, color, classes}: ViewProps) {
    const setBackdrop = React.useState('opaque')[1]
    const [open, set] = useState(false)

    const cardSpring = useSpringRef()
    const translation = useSpringRef();

    const { size, ...rest } = useSpring({
        ref: cardSpring,
        config: config.stiff,
        from: { size: '50%'},
        to: {
            size: open ? '100%' : '50%'
        },
    })

    const transition = useTransition([], {
        ref: translation,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    useChain(open ? [cardSpring, translation] : [translation, cardSpring], [
        0,
        open ? 0.1 : 0.6,
    ]);
    const handleOpen = () => {
        setBackdrop("blur")
        set((open) => !open)
    }

    return (
        <>
            <animated.div className={classes+" content-canvas cursor-pointer shadow-xl w-full h-full"}
                          style={{ ...rest, width: size, height: size }}
                          onClick={() => handleOpen()}>
                <Card
                    isBlurred
                    isPressable
                    className="border-none bg-background/60 dark:bg-default-100/50 h-full w-full"
                    onPress={() => handleOpen()}
                    shadow="lg">
                    <CardBody>
                        <BaseView orbit className={`relative h-full sm:h-48 sm:w-full`}>
                            <Suspense fallback={null}>
                                {children}
                                {color}
                            </Suspense>
                        </BaseView>
                    </CardBody>
                </Card>
            </animated.div>
        </>
    );
}
