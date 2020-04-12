import React, { Component } from 'react';
import { Row, Col, List, Input } from 'antd';
import moment from 'moment';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_03 from '../../assets/images/banner_03.png';
import { checkFull } from '../../utils';
import './index.less';
import { menus } from './menus';
import { videos } from './videos';

const { Search } = Input;
const previewPlayTime = 10;
const videoTagType = {
  NEWS: '县域联播',
  COLUMN: '县域专栏',
  TRAVELLING: '旅游休闲',
  PRODUCTS: '特色产品',
  ENTERTAINMENT: '文娱热播',
  RANKINGS: '榜单专题',
};

export default class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playItemId: 0,
    };
  }
  componentDidMount() {
    window.onresize = () => {
      if (!checkFull()) {
        alert('11');
      }
      console.log('resize');
    };
  }
  handleMouseEnter(ev) {
    let videoItem = ev.currentTarget;
    if (videoItem.getAttribute('hoverplay') === 'true') {
      videoItem.currentTime = 0;
    }
    videoItem.play();
    videoItem.addEventListener(
      'timeupdate',
      () => {
        let timeDisplay;
        //用秒数来显示当前播放进度
        timeDisplay = Math.floor(videoItem.currentTime);
        //当视频播放到 60s的时候做处理
        if (timeDisplay >= previewPlayTime && videoItem.getAttribute('hoverplay') !== 'false') {
          //处理代码
          !videoItem.paused && videoItem.pause();
        }
      },
      false
    );
  }
  handleMouseLeave(ev) {
    // 离开 video 标签就停止播放
    let videoItem = ev.currentTarget;
    if (videoItem.getAttribute('hoverplay') !== 'false') {
      videoItem.pause();
    }
  }
  handleItemClick(ev, itemId) {
    const { playItemId } = this.state;
    let listItem = ev.currentTarget;
    let videoDom = listItem.childNodes[1].childNodes[0];
    // 同个 item 重复点击处理
    if (itemId === playItemId) return;
    this.setState({ playItemId: itemId });
    // 删除前一个激活 item
    if (document.querySelector('.list-item-active')) {
      console.log('ant-avatar-image');
      let prevVideo = document.querySelector('.list-item-active');
      prevVideo.classList.remove('list-item-active');
      prevVideo.childNodes[1].childNodes[0].pause();
      prevVideo.childNodes[1].childNodes[0].setAttribute('hoverplay', 'true');
      prevVideo.childNodes[1].childNodes[0].muted = true;
    }
    listItem.classList.add('list-item-active');
    videoDom.setAttribute('hoverplay', 'false');
    videoDom.muted = false;
    setTimeout(() => videoDom.play(), 200);
  }
  renderVideoList() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        dataSource={videos}
        renderItem={item => (
          <List.Item
            key={item.id}
            onClick={ev => this.handleItemClick(ev, item.id)}
            extra={
              <video
                className="video-component"
                controls
                controlsList="noremote footbar nodownload noremoteplayback"
                disablePictureInPicture={true}
                // onClick={() => console.log('a')}
                onMouseEnter={ev => this.handleMouseEnter(ev)}
                onMouseLeave={ev => this.handleMouseLeave(ev)}
                muted
                hoverplay="true"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            }
          >
            <List.Item.Meta title={item.title} description={item.desc} />
            <span className="release-time">发布时间：{moment(item.time).format('YYYY-MM-DD')}</span>
            <div className="tag-list">{item.tagList.length ? item.tagList.map(tag => <span className="tag-name">{videoTagType[tag]}</span>) : null}</div>
          </List.Item>
        )}
      />
    );
  }
  render() {
    return (
      <Row className="channel-container">
        <Col span={24}>
          <Banner backgroundImage={banner_03} title="郡县号" desc="县域民生视频引擎" />
        </Col>
        <Col span={24}>
          <CarouselMenu menus={menus} />
          <Search placeholder="关键词搜索" onSearch={value => console.log(value)} enterButton size="large" />
        </Col>
        <Col span={24} className="video-list-container">
          {this.renderVideoList()}
        </Col>
      </Row>
    );
  }
}
