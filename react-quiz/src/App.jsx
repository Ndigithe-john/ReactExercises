import Header from "./Header";
import MainComponent from "./MainComponent";
function App() {
  return (
    <div className="app">
      <Header />
      <MainComponent className="main">
        <p>1/15</p>
        <p>Questions</p>
      </MainComponent>
    </div>
  );
}

export default App;
