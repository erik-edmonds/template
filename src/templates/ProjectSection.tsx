import React, {useMemo, useState, useRef } from "react";
import { promises as fs } from "fs";
import { useControls, useCreateStore, Leva, LevaPanel } from "leva";

import Data  from "@/data/data.json";
import { Section } from "@/components/canvas/View";

const array = [...Data];


//TODO: Switch data to be programmatic
export function ProjectSection(props) {
    const MLStore = useCreateStore();
    const VizStore = useCreateStore();
    const CVStore = useCreateStore();
    const HobbiesStore = useCreateStore();

    let [ currentArray, setArray ] = useState([...array]);

    //Fix to improve performance
    const handleFilter = (value) => {
        currentArray.filter(item => item.categoryKey == value).map(item => item.applied = !(item.applied));
        const filter = currentArray.filter(name => name.applied == true);
        setArray([...filter]);
    };

    const machineLearning = useControls(
        {
            "Machine Learning": {
                value: true,
                onChange: (v) => {
                    handleFilter("machine-learning");
                }
            },
        },
        { store: MLStore }
    );

    const visualizations = useControls(
        {
            Visualizations: {
                value: true,
                onChange: (v) => {
                    handleFilter("visualizations");
                }
            }
        },
        { store: VizStore }
    );

    const computerVision = useControls(
        {
            "Computer Vision": {
                value: true,
                onChange: (v) => {
                    handleFilter("computer-vision");
                }
            }
        },
        { store: CVStore }
    );

    const hobbies = useControls(
        {
            Hobbies: {
                value: true,
                onChange: (v) => {
                    handleFilter("hobbies");
                }
            }
        },
        { store: HobbiesStore }
    );

    return(
    <>
        <div
            style={{
                width: 350,
            }}>
            <Leva />
            <LevaPanel fill flat titleBar={false} store={MLStore} />
            <LevaPanel fill flat titleBar={false} store={VizStore} />
            <LevaPanel fill flat titleBar={false} store={CVStore} />
            <LevaPanel fill flat titleBar={false} store={HobbiesStore} />
        </div>
        <Section list={currentArray} {...props} />
    </>)
}
