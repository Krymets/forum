import './Partners.css';

const MainPartners = () => {
    return (
        <div className="Frame18-p">
          <div className="Frame15-p">
              <div className="partners-text">партнери</div>
              <div className="Frame14-p">
                  <div className="IconParkOutlineLeftC">
                      <div className="Group">
                          <img src="/svg/icon-left.svg" alt=""/>
                      </div>
                  </div>
                  <div className="IconParkOutlineLeftC">
                      <div className="Group">
                          <img src="/svg/icon-right.svg" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="Frame18-2-p">
            <img className="image-1" src="/partners-images/1.jpeg" alt=""/>
            <img className="image-2" src="/partners-images/2.png" alt=""/>
            <img className="image-3" src="/partners-images/3.jpeg" alt=""/>
            <img className="image-4" src="/partners-images/4.jpeg" alt=""/>
            <img className="image-5" src="/partners-images/5.png" alt=""/>
            <img className="image-6" src="/partners-images/6.jpeg" alt=""/>
          </div>
        </div>
    )
}

export default MainPartners;