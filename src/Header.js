import React from 'react';

function Header({ children }) {
  return (
    <>
      <div class="blogit">
        <blog><a href="index.html">ONIONSDIT</a></blog>
      </div><br></br>
      <div id="text-run">
        <p> -- Chào mừng các bạn đến với BlogIT của Sơn Phúc Đạt --</p>
      </div><br></br>
      <div id="nav">
        {children}
      </div><br></br>
    </>
  );
}

export default Header;
