import Partners from "./components/partners/partners";
import "./app.css"
import AppBanner from "./components/banner/banner";
import AppMenu from "./components/menu/menu";
import Companies from "./components/companies/companies";
import About from "./components/about/about";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AppMenu/>
        <AppBanner/>
        <div className="App-body">
            <Partners/>
            <Companies/>
            {/*<Partners/>*/}
            <About/>
        </div>
      </div>
    </div>
  );
}

export default App;
