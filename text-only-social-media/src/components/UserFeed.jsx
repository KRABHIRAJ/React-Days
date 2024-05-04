function UserFeed({allPosts}) {
    console.log('In userfeed');

  return (
    <div className="">
        {
            allPosts?.map((currPost) => (
                <div key={currPost.id} className="border-2 border-orange-200 my-2 px-4 py-2 rounded-xl w-full">
                    <p>Post : {currPost.post}</p>
                    <p>User : {currPost.user}</p>
                </div>
            ))
        }
    </div>
  )
}

export default UserFeed