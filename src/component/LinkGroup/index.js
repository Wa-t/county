import React, { Component } from 'react';
import { Button } from 'antd';
import './index.less';

const ButtonGroup = Button.Group;

export default class LinkGroup extends Component {
  renderLinks() {
    const { links } = this.props;
    return links.length ? (
      <ButtonGroup>
        {links.map(link => (
          <Button className="link-item" type="link" key={link.id} href={link.address} target={link.target || '_self'} ghost>
            {link.name}
          </Button>
        ))}
      </ButtonGroup>
    ) : null;
  }
  render() {
    const { title } = this.props;
    return (
      <div className="links-container">
        {title ? <span className='links-group-title'>{title}：</span> : null}
        {this.renderLinks()}
      </div>
    );
  }
}
