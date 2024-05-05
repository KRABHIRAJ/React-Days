import './Stories.css'
import Icon from '@mui/material/Icon';


function StoriesComponent({label, logo}) {
  return (
    <div>
      <div className='category-outer-circle flex justify-center items-center'>
        <div className='category-inner-circle'>
          <Icon>star</Icon>
        </div>
      </div>
      <p>{label}</p>
    </div>
  )
}

export default StoriesComponent