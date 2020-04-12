import React, { Component } from 'react';
import { Card, Button, Popover } from 'antd';
import moment from 'moment';
import { monthFormater } from '../../utils';
import './index.less';
import voteQRCode from '../../assets/images/vote_qrcode.png';

export default class EventCard extends Component {

  renderCardHeader() {
    const { primaryColor, textColor, event = {} } = this.props;
    const cardStyle = {
      background: primaryColor,
      color: textColor,
    }
    return (
      <div className={`header-container ${event.process}`} style={cardStyle}>
        <span>{monthFormater(event.month)}</span>
        <p>{event.name}</p>
        <p>发布时间：{moment(event.time).format('YYYY.MM.DD')}</p>
      </div>
    )
  }
  renderOption() {
    const {event: { process }, primaryColor} = this.props;
    const buttonStyle = {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
    }
    return (
      <div className='option-container'>
        {
          process === 'voted'
          ? (
            <Button.Group>
              <Button type='primary' size='small' style={buttonStyle} href="https://www.clgnews.com/report/detail/5e2264a591035c430d6edfc4/#px10" >十强榜</Button>
              <Button type='primary' size='small' style={buttonStyle} href="https://www.clgnews.com/report/detail/5e2264a591035c430d6edfac/#px100" ghost>百强榜</Button>
            </Button.Group>
          )
          : process === 'voting'
          ? (
            <Popover
              placement="bottom"
              trigger='click'
              content={
                <img width='145px' src={voteQRCode} alt='vote' />
              }>
              <Button type='primary' size='small'style={buttonStyle} >我要投票</Button>
            </Popover>
          )
          : (
            <Button type='primary' size='small' style={buttonStyle} disabled>等待发布</Button>
          )
        }
      </div>
    )
  }
  render() {
    const { event = {} } = this.props;
    return (
      <Card
        className='event-card-container'
        hoverable
        cover={this.renderCardHeader()}
      >
        <div className='sponser-info'>
          {event.icon && <img src={event.icon} alt='logo' />}
          <span>{event.sponser}</span>
        </div>
        {this.renderOption()}
      </Card>
    )
  }
};
