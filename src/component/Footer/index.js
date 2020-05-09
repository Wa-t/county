import React, { Component } from 'react';
import { Button } from 'antd';
import LinkGroup from '../LinkGroup';
import { footerMenu, friendlyLink, mediaPartners } from './linkData';
import Copyright from '../Copyright';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-menu">
          {/* <Link to='http://baidu.com'>关于我们</Link> */}
          <Button.Group>
            {footerMenu.map(menu => (
              <Button type="primary" key={menu.id} href={menu.address} ghost>
                {menu.name}
              </Button>
            ))}
          </Button.Group>
        </div>
        <LinkGroup title={friendlyLink.groupName} links={friendlyLink.sites} />
        <LinkGroup title={mediaPartners.groupName} links={mediaPartners.sites} />
        <Copyright />
      </div>
    );
  }
}
