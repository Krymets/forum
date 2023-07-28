import Partners from "./components/partners/partners";
import "./app.css"
import AppBanner from "./components/banner/banner";
import AppMenu from "./components/menu/menu";
import Companies from "./components/companies/companies";
import About from "./components/about/about";
function App() {
  return (
    <div className="back">
        <div className="App">
          <header className="App-header">
            <AppMenu/>
            <AppBanner/>
            <div className="App-body">
                <Partners/>
                <Companies/>
                <About/>
            </div>
          </header>
        </div>
    </div>
  );
}

export default App;
