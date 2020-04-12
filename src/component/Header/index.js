import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AppMenu from '../AppMenu';
import logo from '../../assets/images/logo.png';
import qrcode from '../../assets/images/qrcode.png';
import slogan from '../../assets/images/icon-slogan.gif';
import './index.less';

const ButtonGroup = Button.Group;

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='user-state-control'>
          <div>郡县网欢迎您！www.clgnews.com</div>
          <ButtonGroup>
            <Button className='state-control-btn' size='small' href="https://www.clgnews.com/login" ghost>登录</Button>
            <Button className='state-control-btn' size='small' href="https://www.clgnews.com/register" ghost>注册</Button>
          </ButtonGroup>
        </div>
        <div className='header-slogan'>
          <Link to='/'>
            <img className='logo' src={logo} alt="logo" />
          </Link>
          <div className='slogan'>
            <img src={slogan} alt="郡县治 • 天下安" />
            <img className='qrcode' src={qrcode} alt="郡县二维码" />
          </div>
        </div>
        <AppMenu />
      </React.Fragment>
    )
  }
};
