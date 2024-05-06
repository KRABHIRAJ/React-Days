import './Stories.css'
import Icon from '@mui/material/Icon';


function StoriesComponent({label, logo}) {
  return (
    <div className="cursor-pointer" >
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