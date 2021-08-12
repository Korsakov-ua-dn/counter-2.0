import React, { ChangeEvent, useState } from 'react'
import Button from './Button'
import { StateType, setError, setDataValue } from '../store/counter-reducer'
import s from './PrevSettings.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../store/store'

const PrevSettings = () => {
    console.log("PrevSettings")
    
    const state = useSelector<AppRootStateType, StateType>(state => state.data)
    const dispatch = useDispatch()

    const error = state.error

    let [inputValue, setInputValue] = useState({start: state.start, max: state.max})

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        let id = e.currentTarget.id

        if (id === "start") {
            setInputValue({...inputValue, [id]: value}) 
            if (value < 0) {error !== 'Invalid input value' && dispatch(setError('Invalid input value'))} else
            if (inputValue.max && value >= inputValue.max) {error !== 'Invalid input value' && dispatch(setError('Invalid input value'))} else
            if (!inputValue.max) {error !== 'Invalid input value' && dispatch(setError('Invalid input value'))} else
            {error !== 'press set' && dispatch(setError('press set'))}
        } else {
            setInputValue({...inputValue, [id]: value}) 
            if (value <= 0) {error !== 'Invalid input value' && dispatch(setError('Invalid input value'))} else
            if (inputValue.start && value <= inputValue.start) {error !== 'Invalid input value' && dispatch(setError('Invalid input value'))} else
            if (inputValue.start && inputValue.start < 0) {error !== 'Invalid input value' && dispatch(setError('Invalid input value'))} else
            {error !== 'press set' && dispatch(setError('press set'))}
        }
    }

    const setDataToState = () => {
        if ((inputValue.start && inputValue.max) || (inputValue.start === 0 && inputValue.max === 0)) {
            dispatch(setError(''))
            dispatch(setDataValue(inputValue.start, inputValue.max))
        }
    }

    let disable = false
    switch (error) {
        case 'Please set values':
        case 'Max value limit':
        case 'Invalid input value':
            disable = true
    }

    return (
        <div className={"block"}>
            <div className="display">
                <div >
                    <span className={s.span}>max value:</span>
                    <input id={'max'} onChange={onChangeInputHandler} type="number" value={inputValue.max !== null 
                        ? inputValue.max : "" } className={s.input} />
                </div>
                <div>
                    <span className={s.span}>start value:</span>
                    <input id={'start'} onChange={onChangeInputHandler} type="number" value={inputValue.start !== null 
                        ? inputValue.start : "" } className={s.input} />
                </div>
            </div>
            <div className="btnWrapper">
                <Button disable={disable} callback={setDataToState} title={"set"}/>
            </div>
        </div>
    )
}

export default PrevSettings