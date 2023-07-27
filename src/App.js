import Partners from "./components/partners/partners";
import "./app.css"
import AppBanner from "./components/banner/banner";
import AppMenu from "./components/menu/menu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppMenu/>
        <AppBanner/>
        <Partners/>
      </header>
    </div>
  );
}

export default App;
