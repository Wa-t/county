import React, { Component } from 'react';
import { Row, Col, Breadcrumb, Empty } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from "axios";
import Banner from '../../component/Banner';
import banner_04 from '../../assets/images/banner_04.png';
import './index.less';

const pageTypeObj = {
  1: '榜单公告',
  2: '榜单新闻',
  3: '榜单报告',
  4: '榜单冠名',
}

const pageUrlObj = {
  1: '/notice_list/1?json=1', // 榜单公告
  2: '/news_list/bangdannews/1?json=1',//'榜单新闻',
  3: '/report_list/1?json=1',//'榜单报告',
  4: '/business_list/1?json=1',//'榜单冠名',
}

export default class Index extends Component {
  constructor(props) {
    console.log('==============', props)
    super(props);
    this.state = {
      type: props.match.params.type || 1,
      data: [],
    };
  }
  componentDidMount() {
    axios.get(pageUrlObj[this.props.match.params.type])
    .then(res => {
      if (res.status === 200) {
        this.setState({ data: res.data && res.data.newsList ? res.data.newsList : [] });
      } else {
        this.setState({ data: []})
      }
    })
    .catch(function (error) {
      this.setState({ data: []})
      console.log(error);
    });
  }
  

  render() {
    return (
      <Row key={this.props.match.params.type} className="channel-container">
        <Row>
          <Col span={24}>
            {/* <Banner backgroundImage={banner_04} title="客服中心" desc="县域赋能产品中心" /> */}
            <Banner backgroundImage={banner_04} title={pageTypeObj[this.state.type]} desc="" />
          </Col>
          <Col span={24}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="#">{pageTypeObj[this.state.type]}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <div className="link-parent" >
          {this.state.data.length ? this.state.data.map(item => 
            <Link className="link-box" key={item._id} to={`/detail/:${item._id}?type=${this.state.type}`} >
              <div className="link-item link-item-title">{item.title}</div>
              <div className="link-item link-item-date">{moment(item.publishDate || item.publish).format('YYYY-MM-DD')}</div>
            </Link>
          ) : <Empty style={{ minHeight: 300 }} description="暂无数据"/>}
        </div>
      </Row>
    );
  }
}
