import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {

  const [time, setTime ] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div className="bg-gray-900 w-full h-full py-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-lime-500">Digital Clock</p>
        <div className="border-4 border-lime-500 px-20 py-16 rounded-lg mt-4">
          <p className="text-7xl font-bold text-lime-500 ">{time.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  )
}

export default DigitalClock