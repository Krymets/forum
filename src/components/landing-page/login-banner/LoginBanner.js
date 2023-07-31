import './LoginBanner.css';
import {WhiteTripleEllipses} from "../ellipses/Ellipses";


const MainLoginBanner = () => {
    return (
        <div className="Group84-lb">
            <div className="Rectangle22-lb"/>
            <div className="Frame104-lb">
                <div className="Rectangle15-lb"/>
                <img className="lb-img" src="/img/lb-img.jpeg" alt=""/>
                <div className="Rectangle16-lb"/>
                <div className="Frame41-lb">
                    <WhiteTripleEllipses/>
                    <WhiteTripleEllipses/>
                    <WhiteTripleEllipses/>
                    <WhiteTripleEllipses/>
                    <WhiteTripleEllipses/>
                    <WhiteTripleEllipses/>
                </div>
                <div className="Frame106-lb">
                  <div className="Frame40-lb">
                      <div className="Frame105-lb"/>
                      <div className="Frame2-lb">
                          <div className="login-button-lb">
                              <div className="login-button-text-lb">Увійти</div>
                          </div>
                          <div className="register-button-lb">
                              <div className="register-button-text-lb">Зареєстуватися</div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className="login-banner-shadow-text">Майданчик для тих, хто втілює свої ідеї в життя.</div>
            <div className="login-banner-text">Майданчик для тих, хто втілює свої ідеї в життя.</div>
        </div>
    )
}

export default MainLoginBanner;