
import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import { RandomQuotes } from './components';
import { fetchRandomQuote } from './feature/quoteSlice';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);
  return (
    <div className='main-div flex justify-center items-center bg-gray-700'>
      <RandomQuotes />
    </div>
  )
}

export default App
