import React from 'react';
import Button from './Button';

const Block_2 = () => {
    return (
        <div className={"block"}>
            <div className="display">
                <div>{localStorage.getItem("start")}</div>
            </div>
            <div className="btnWrapper">
                {/* <Button title={"inc"}/>
                <Button title={"reset"}/> */}
            </div>
        </div>
    )
}

export default Block_2