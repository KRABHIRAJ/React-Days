import './Stories.css'
import Icon from '@mui/material/Icon';
import { useNavigate } from "react-router-dom";

function StoriesComponent({label, logo}) {
  const navigate = useNavigate();
  const redirectToStoriesRoute = () => {
    navigate(`category/${label.toLowerCase()}`)
  }
  return (
    <div onClick={() => redirectToStoriesRoute()} className="cursor-pointer" >
      <div className='category-outer-circle flex justify-center items-center'>
        <div className='category-inner-circle flex justify-center items-center'>
          <Icon className='text-white'>{logo}</Icon>
        </div>
      </div>
      <p className='text-center font-semibold'>{label}</p>
    </div>
  )
}

export default StoriesComponent