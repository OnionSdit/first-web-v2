import React from 'react';

function Right() {
    return (
      <>
        <div className="right">
                <div className="line"><i className="fas fa-child"></i><u> Họ Tên</u> : Sơn Phúc Đạt <i className="fas fa-check-circle"></i></div>
                <div className="line"><i className="far fa-calendar-alt"></i><u>Năm Sinh </u>: 2000</div>
                <div className="line"><i className="fas fa-globe-americas"></i> <u>Nơi ở </u>: Tp Hồ Chí Minh </div>
                <div className="line"><i className="fab fa-fly"></i><u>Quê Quán</u>: Trà Vinh</div>
                <div className="line"><i className="fas fa-briefcase"></i><u>Công Việc</u>: Hiện tại tôi vẫn chưa có công việc.
                </div>
                <div className="line"><i className="fas fa-city"></i><u>Học Vấn</u>: Tôi đang theo học tại <a href="https://www.hutech.edu.vn/" target="_blank" rel="noopener noreferrer">Trường Đại Học Công Nghệ Tp Hồ Chí Minh</a>
                </div>
                <div className="line"><i className="fab fa-facebook"></i><u>Facebook</u>: <a href="https://www.facebook.com/Account.SPD.Verifi" target="_blank" rel="noopener noreferrer">Sơn Phúc Đạt </a><i className="fas fa-check-circle" style={{color:"blue"}}></i></div>
                <div className="line"><i className="fas fa-envelope"></i><u>Gmail</u>: <a href="mailto:Sonphucdat.tech@gmail.com">Sonphucdat.tech@gmail.com</a></div>
                <div className="line"><i className="fas fa-mobile"></i><u>Gọi Điện</u>: <a href="tel:0327064368">
                        0327.064.368</a></div>
            </div>
      </>
    );
  }
  
  export default Right;
  
