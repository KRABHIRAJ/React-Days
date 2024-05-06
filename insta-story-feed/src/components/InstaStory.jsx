import { useParams, useNavigate } from "react-router-dom";
import storiesData from "../datasource/storiesData";
import Stories from "react-insta-stories";
import Fade from "react-reveal/Fade";

function InstaStory() {
  const { category } = useParams();
  const naviagte = useNavigate();
  const storyData = storiesData[category];

  const redirectToHome = () => {
    naviagte("/");
  };

  const getStoriesObject = () => {
    const stories = storyData.map((item) => {
        return {
            content: (props) => (
                <div className="flex items-center justify-center h-[100vh] w-[100vw] rounded-xl">
                    <div key={item.image} className=" bg-orange-400 object-cover h-[520px] w-[430px] rounded-xl">
                        <img src={item.image} alt="stories" className="object-cover h-[520px] w-[430px] rounded-xl" />
                    </div>
                </div>
            )
        }
    });
    return stories;
  };
  return (
    <div className="stories-container w-screen h-screen">
      <Fade right>
        <Stories
          stories={getStoriesObject()}
          defaultInterval={2500}
          width={"100%"}
          height={"100%"}
          onAllStoriesEnd={redirectToHome}
        />
      </Fade>
    </div>
  );
}

export default InstaStory;
