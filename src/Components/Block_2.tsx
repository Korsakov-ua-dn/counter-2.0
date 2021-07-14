import React, { useState } from 'react';
import Button from './Button';
import {DataType} from '../App'

type Block_2Type = {
    error: string
    data: DataType
}

const Block_2: React.FC<Block_2Type> = ({error, data}) => {
    console.log('rerender B2');
    
    
    const content = (props: string) => {
        switch (error) {
            case 'Invalid start value':
                return <div className={"error"} >{error}</div>
            case 'press set':
                return <div className={"error"} style={{color: "cyan"}} >{error}</div>
            case 'Invalid max value':
                return <div className={"error"} >{error}</div>
            default: return <div className={"error"} style={{fontSize: "60px", color: "cyan"}}>{data.start}</div>
        }
    }

    // const inc = () => {
    //     currentValue += 1
    // }

    return (
        <div className={"block"}>
            <div className="display">
               { content(error) }
            </div>
            <div className="btnWrapper">
                <Button callback={() => {}} title={"inc"}/>
                <Button callback={() => {}} title={"reset"}/>
            </div>
        </div>
    )
}

export default Block_2