import './partners.css';

const Partners = () => {
    return (
        <div className="Frame18-p">
          <div className="Frame15-p">
              <div className="partners-text">партнери</div>
              <div className="Frame14-p">
                  <div className="IconParkOutlineLeftC" style={{width: 24, height: 24, position: 'relative'}}>
                      <div className="Group" style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute'}}>
                          <div className="Vector" style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute', border: '0.50px #989FA6 solid'}}></div>
                          <div className="Vector" style={{width: 4.50, height: 9, left: 7, top: 5.50, position: 'absolute', border: '0.50px #989FA6 solid'}}></div>
                      </div>
                  </div>
                  <div className="IconParkOutlineRightC" style={{width: 24, height: 24, position: 'relative'}}>
                      <div className="Group" style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute'}}>
                          <div className="Vector" style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute', border: '0.50px #3C4044 solid'}}></div>
                          <div className="Vector" style={{width: 4.50, height: 9, left: 8.50, top: 5.50, position: 'absolute', border: '0.50px #3C4044 solid'}}></div>
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
        // <div className="frame18">
        //     <div className="frame15">
        //         ПАРТНЕРИ
        //         <span>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        //           <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#989FA6" stroke-linejoin="round"/>
        //           <path d="M13.5 16.5L9 12L13.5 7.5" stroke="#989FA6" stroke-linecap="round" stroke-linejoin="round"/>
        //         </svg>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        //           <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#3C4044" stroke-linejoin="round"/>
        //           <path d="M10.5 16.5L15 12L10.5 7.5" stroke="#3C4044" stroke-linecap="round" stroke-linejoin="round"/>
        //         </svg>
        //         </span>
        //     </div>
        //     <div className="frame18-2">
        //       <img src="../../assets/partners-images/05b9858d34ae7f51514f827372b4d8a9.jpeg" alt="Картинка 1" />
        //       <img src="../../assets/partners-images/9ea16eea263af31f063216940d1dbe5f.jpeg" alt="Картинка 2" />
        //     </div>
        // </div>
    )
}

export default Partners;