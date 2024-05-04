
function SubmitButton({type, onClick}) {
    console.log('In submitbutton');
  return (
    <div className="border-2 border-orange-200 rounded-lg py-1">
        <button className="px-8 text-orange-400" type={type} onClick={onClick}>
            Post
        </button>
    </div>
  )
}

export default SubmitButton