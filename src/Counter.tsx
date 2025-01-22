import {Button} from './components/Button';
import React, {useEffect} from 'react';

type CounterPropsType = {
    maxValue: number
    startValue: number
    counter: number

    addCounter: () => void
    resetCounter: () => void
}

export const Counter = ({counter, startValue, maxValue, addCounter, resetCounter}: CounterPropsType) => {



    return (
        <div className="App-main">
            <div className={`${counter === maxValue ? 'max-value' : ''} counter-wrapper`}>{counter}</div>
            <div className="buttons-wrapper">
                <Button title={'inc'}
                        onClick={addCounter}
                        className="my-button"
                        isDisabled={counter === maxValue}
                />
                <Button title={'reset'}
                        onClick={resetCounter}
                        className="my-button"
                        isDisabled={counter === startValue}
                />
            </div>
        </div>
    );
};