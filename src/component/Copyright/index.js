import React from 'react';
import './index.less';
import logoWhite from '../../assets/images/logo-white.png';

const Copyright = props => {
  return (
    <div className="copyright">
      <img src={logoWhite} alt="logo" />
      <span>
        《小康》杂志社旗下网站 北京小康文化发展有限公司版权所有 Copyright©2019{' '}
        <a href="http://www.chinaxiaokang.com/" target="_blank" rel="noopener noreferrer" >
          www.chinaxiaokang.com
        </a>
      </span>
      <div>
      <a  href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" >
          京 ICP 备 12037298号-1 
        </a>
      </div>
    </div>
  );
};

export default Copyright;
