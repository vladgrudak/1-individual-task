import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {CounterSettings} from './CounterSettings';

function App() {

    // Инициализируем state для хранения данных счётчика и настроек
    const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);

    // Увеличение счётчика
    const addCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }

    // Сброс счётчика
    const resetCounter = () => {
        setCounter(startValue)
    }

    // Обновляем стейты стартового значения и максимального, также устанавливаем новое стандартное значение счетчика
    const setSettings = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)

        setCounter(startValue)
    }

    const [errorMessage, setErrorMessage] = useState<string>('')

    const showErrorMessage = (errorMessage: string) => {
        setErrorMessage(errorMessage)
    }

    return (
        <div className="App">
            <header className="App-header">
                <CounterSettings
                    startValue={startValue}
                    maxValue={maxValue}
                    setSettings={setSettings}
                    showErrorMessage={showErrorMessage}
                />
                <Counter
                    counter={counter}
                    maxValue={maxValue}
                    startValue={startValue}

                    errorMessage={errorMessage}

                    addCounter={addCounter}
                    resetCounter={resetCounter}
                />
            </header>
        </div>
    );
}

export default App;
