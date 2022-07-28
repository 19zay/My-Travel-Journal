import Navbar from "./Components/Navbar"
import data from "./Components/data";
import MainBody from "./Components/MainBody";

function App() {
  const places = data.map(place=>{
    return <MainBody
            key = {place.id}
            place = {place}
            />
  })
  return (
    <div className="App">
      <Navbar/>
      {places}
    </div>
  );
}

export default App;
