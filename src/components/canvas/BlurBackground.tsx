"use client"
import {motion} from "framer-motion";


export const BlurBackground = () => {
    return (
        <>
            <motion.div className="first col-start-1 row-start-1" animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease:"linear"}}/>
            <motion.div className="second " animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration:2, ease:"linear"}}/>
        </>
    )
}