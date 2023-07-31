import "./App.css"
import MainMenu from "./components/landing-page/menu/Menu";
import MainBanner from "./components/landing-page/banner/Banner";
import MainPartners from "./components/landing-page/partners/Partners";
import MainCompanies from "./components/landing-page/companies/Companies";
import MainLoginBanner from "./components/landing-page/login-banner/LoginBanner";
import MainAboutSection from "./components/landing-page/about-section/About";

function App() {
  return (
    // <div className="Back">
    <div className="App">
      <div className="AppHeader">
        <MainMenu/>
        <MainBanner/>
        <div className="AppBody">
            <MainPartners/>
            <MainCompanies/>
            {/*<MainPartners/>*/}
            <MainLoginBanner/>
            <MainAboutSection/>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
