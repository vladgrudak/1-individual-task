import {Button} from './components/Button';
import React, {ChangeEvent, useEffect, useState} from 'react';

type Props = {
    startValue: number
    maxValue: number
    setSettings: (startValue: number, maxValue: number) => void
}


export const CounterSettings = ({setSettings, startValue, maxValue}: Props) => {

    // Контролируемые инпуты
    const [maxValueInput, setMaxValueInput] = useState<number>(maxValue)
    const [startValueInput, setStartValueInput] = useState<number>(startValue)

    const updateMaxValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValueInput(+event.target.value)
    }

    const updateStartValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValueInput(+event.target.value)
    }


    // Установка и сохранение значений настроек в LocalStorage
    const setSettingsHandler = () => {
        setSettings(startValueInput, maxValueInput)

        localStorage.setItem('maxValue', JSON.stringify(maxValueInput))
        localStorage.setItem('startValue', JSON.stringify(startValueInput))
    }

    // Берём стартовые значения для инпутов и для счётчика из LocalStorage
    useEffect( () => {
        const savedStartValueString = localStorage.getItem('startValue')
        const savedMaxValueString = localStorage.getItem('maxValue')

        if (savedStartValueString && savedMaxValueString) {
            const savedStartValue = JSON.parse(savedStartValueString)
            const savedMaxValue = JSON.parse(savedMaxValueString)

            setStartValueInput(savedStartValue)
            setMaxValueInput(savedMaxValue)
            setSettings(savedStartValue, savedMaxValue)
        }
    }, [] )


    return (
        <div className="App-main">
            <div className={'settings-wrapper'}>
                <div className={'value-input-wrapper'}>
                    <span>max value:</span>
                    <input type="number" value={maxValueInput} onChange={updateMaxValueInput}/>
                </div>
                <div className={'value-input-wrapper'}>
                    <span>start value:</span>
                    <input type="number" value={startValueInput} onChange={updateStartValueInput}/>
                </div>
            </div>
            <div className="buttons-wrapper">
                <Button title={'set'}
                        onClick={setSettingsHandler}
                        className="my-button"
                        isDisabled={false}
                />
            </div>
        </div>
    );
};