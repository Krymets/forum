import './About.css';
import AppCards from "./cards/AboutCards";
import AppTextAbout from "./about-text/AboutText";

const MainAboutSection = () => {
    return (
        <div className="Frame57-a">
          <AppTextAbout/>
          <AppCards/>
          <div className="Frame56-a">
            <div className="About-Rectangle8">
            <div className="Frame43-a"/>
            <div className="Frame49-a">
              <div className="second-about-header-text">ХТО МИ</div>
              <div className="SmartCraftFood">Це перший форум Західної України, цілями якого є популяризація українського виробника та представлення стартапів для розвитку галузі «Smart Craft&Food»</div>
              <div className="SmartCraftFood">Це перший форум Західної України, цілями якого є популяризація українського виробника та представлення стартапів для розвитку галузі «Smart Craft&Food»</div>
            </div>
            <img className="about-image" src="/img/about.jpeg" alt=""/>
          </div></div>
        </div>
    )
}

export default MainAboutSection;
