import './Banner.css';
import {GreenEllipses, WhiteEllipses} from "../ellipses/Ellipses";


const MainBanner = () => {
    return (
        <div className="Group81-b">
            <div className="Rectangle8"/>
            <div className="Rectangle14">
                <div className="Frame41-b">
                    <GreenEllipses/>
                    <GreenEllipses/>
                    <GreenEllipses/>
                    <GreenEllipses/>
                    <GreenEllipses/>
                    <GreenEllipses/>
                </div>
            </div>
            <div className="Rectangle9"/>
            <div className="Rectangle10"/>
            <div className="Rectangle11"/>
            <div className="Rectangle12"/>
            <div className="Rectangle13"/>
            <div className="Frame40-b">
                <div className="banner-text">Це унікальний майданчик <br/>для обміну інформацією і досвідом з тими, хто втілює свої ідеї в життя.</div>
                <div className="Frame2-b">
                    <div className="login-button">
                        <div className="login-button-text">Увійти</div>
                    </div>
                    <div className="register-button">
                        <div className="register-button-text">Зареєстуватися</div>
                    </div>
                </div>
            </div>
            <div className="Frame34-b">
              <WhiteEllipses/>
              <WhiteEllipses/>
              <WhiteEllipses/>
              <WhiteEllipses/>
              <WhiteEllipses/>
              <WhiteEllipses/>
            </div>
            <img className="banner-image1" src="/img/banner-img1.jpeg" alt=""/>
            <img className="banner-image2" src="/img/banner-img2.jpeg" alt=""/>
            <img className="banner-image3" src="/img/banner-img3.jpeg" alt=""/>
          <div className="Frame37-b">
            <div className="Frame5-b">
              <div className="BxsWine-winemaking">
                <div className="winemaking">
                    <img src="/svg/winemaking.svg" alt=""/>
                </div>
              </div>
              <div className="Frame36-b">
                <div className="banner-item-text">Виноробство</div>
                <div className="banner-item-counter">146+</div>
              </div>
            </div>
          </div>
          <div className="Frame39-b">
            <div className="Frame36-2-b">
              <div className="banner-item-text">Сироварня</div>
              <div className="banner-item-counter">56+</div>
            </div>
          </div>
          <div className="BxsWine-cheese">
              <div className="cheese">
                <img src="/svg/cheese.svg" alt=""/>
              </div>
          </div>
          <div className="Frame38-b">
            <div className="Frame5-b">
              <div className="BxsWine-delivery">
                <div className="delivery">
                  <img src="/svg/delivery.svg" alt=""/>
                </div>
              </div>
              <div className="Frame36-b">
                <div className="banner-item-text">Доставка</div>
                <div className="banner-item-counter">14+</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MainBanner;