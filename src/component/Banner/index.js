import React from 'react';
import './index.less';

const Banner = props => {
  const { backgroundImage, title, desc } = props;
  const bannerStyle = {
    background: `url(${backgroundImage || ''}) center no-repeat`
  }
  return (
    <div className="header-banner-container" style={bannerStyle}>
      <div className="hundred-slogan">
        <p>{title}</p>
        <p />
        {/* <p>{desc}</p> */}
      </div>
    </div>
  );
};

export default Banner;
