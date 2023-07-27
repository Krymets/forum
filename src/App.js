import Partners from "./components/partners/partners";
import "./app.css"
import AppBanner from "./components/banner/banner";
import AppMenu from "./components/menu/menu";
import Companies from "./components/companies/companies";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppMenu/>
        <AppBanner/>
        <div className="App-body">
            <Partners/>
            <Companies/>
        </div>
      </header>
    </div>
  );
}

export default App;
