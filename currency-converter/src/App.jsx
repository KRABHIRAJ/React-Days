import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [fromAmt, setFromAmt] = useState(0);
  const [toAmt, setToAmt] = useState(0);
  const [fromType, setFromType] = useState('usd');
  const [toType, setToType] = useState('inr');

  const currencyInfo = useCurrencyInfo(fromType);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setToAmt((currencyInfo[toType] * fromAmt).toFixed(2));
  }

  const swapValue = () => {
    console.log('Swap Clicked');
    setToAmt(fromAmt);
    setFromAmt(toAmt);
    setFromType(toType);
    setToType(fromType);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={fromAmt}
                            onAmountChange={setFromAmt}
                            selectCurrency={fromType}
                            onCurrencyChange={setFromType}
                            currencyOptions={currencyOptions}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            onClick={() => swapValue()}
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={toAmt}
                            onAmountChange={setToAmt}
                            selectCurrency={toType}
                            onCurrencyChange={setToType}
                            currencyOptions={currencyOptions}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App