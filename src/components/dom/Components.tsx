"use client"
import {forwardRef, useRef} from "react";
import {motion} from "framer-motion";

type DivProps = {
    classNames?: string;
    loading?: boolean;
} & React.PropsWithChildren<React.ComponentPropsWithRef<'div'>>;

const Div: React.FC<DivProps> = forwardRef(
    ({ loading, classNames="w-full", children, ...props }, ref) => {
        return (
            <div data-loading={loading} {...props} ref={ref} className={classNames + " col-start-1 row-start-1"}>
                {children}
            </div>
        );
    }
);

function MotionDiv(props) {
    const ref = useRef()
    return (
        <motion.div {...props} ref={ref} className={props.classNames + " col-start-1 row-start-1"}/>
    )
}
export { Div, MotionDiv };