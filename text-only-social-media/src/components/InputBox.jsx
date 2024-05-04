function InputBox({post, setPost, type, placeholder}) {
    console.log('In Input');
  return (
    <div className="border-2 border-orange-200 px-2 rounded-lg py-1 w-full mr-3">
        <input
           className="outline-none bg-black text-orange-400 w-full"
           value={post}
           type={type}
           placeholder={placeholder}
           onChange={e => setPost(e.target.value)}
       />
    </div>
  )
}

export default InputBox