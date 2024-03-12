'use client'

import React, {Dispatch, SetStateAction} from 'react'
import { ComponentType, forwardRef, useState, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import dynamic from "next/dynamic";
import { Card, CardBody} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

import styles from "./Components.module.css";

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

const VRef = forwardRef(({ children, orbit, ...props }, ref) => {
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


export { VRef }


export function ExpandableCard({children, color, classes}: ViewProps) {
    const {isOpen, onOpen, onClose} = useDisclosure();
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

export function Expansion({children, color, classes}: ViewProps) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const handleOpen = () => {
        setBackdrop("blur")
        onOpen();
    }

    return (
        <>
            <div className={classes+" content-canvas"} >
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
            </div>
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
