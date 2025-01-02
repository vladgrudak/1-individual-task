import {Button} from './components/Button';
import React from 'react';

type CounterPropsType = {
    maxValue: number;
    addCounter: () => void
    resetCounter: () => void
    counter: number
}

export const Counter = ({counter, maxValue, addCounter, resetCounter} : CounterPropsType) => {

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
                        isDisabled={counter === 0}
                />
            </div>
        </div>
    );
};