import "./App.css";
import { StoriesComponent } from "./components";
import categoryItems from "./datasource/categories";

function App() {
  return (
    <div className="bg-black text-white h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <div className="bg-gray-400 h-[520px] w-[430px] rounded-xl p-3 items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {categoryItems.map((item) => (
            <div className="px-2 py-3 " key={item.name}>
              <StoriesComponent logo={item.iconName} label={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
