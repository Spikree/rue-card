import scrollBackGroundImage from "./assets/scrollBackground.png";

function App() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${scrollBackGroundImage})` }}
    ></div>
  );
}

export default App;
