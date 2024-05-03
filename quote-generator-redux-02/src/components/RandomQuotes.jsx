import { useDispatch, useSelector } from "react-redux"
import { fetchRandomQuote } from "../feature/quoteSlice";

function RandomQuotes() {
    const quote = useSelector(state => state.randomQuote);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    if(isLoading){
        return (
            <div className="bg-white flex flex-col text-black w-[60%] h-[70%] rounded-xl p-4 items-center justify-evenly">
            <p className="text-center text-3xl font-semibold">Loading .....</p>
        </div>
        )
    }else{
        return (
        <div className="bg-white flex flex-col text-black w-[60%] h-[70%] rounded-xl p-4 items-center justify-evenly">
            <p className="text-center text-3xl font-semibold">{quote?.content}</p>
            <button onClick={() => dispatch(fetchRandomQuote())} className="bg-green-600 px-5 py-3 text-white text-xl rounded-xl ">Generate Quote</button>
        </div>
    )
    }
}

export default RandomQuotes