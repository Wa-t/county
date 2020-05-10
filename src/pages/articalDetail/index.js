import React, { Component } from 'react';
import { Row, Col, Empty } from 'antd';
import Banner from '../../component/Banner';
import banner_04 from '../../assets/images/banner_04.png';
import axios from "axios";
import './index.less';
import moment from 'moment'
import { getUrlParams } from '../../utils'

const isEmptyObj = (obj) => !Object.keys(obj).length

const { type = "" } = getUrlParams() || {}
const before = {
  1: 'notice',
  2: 'news',
  3: 'report',
  4: 'business',
}

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: {}
    };
  }
  componentDidMount() {
    const { id } = this.state;
    axios.get(`/${before[type]}/detail/${id}?json=1`)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            data: res.data
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { title, obj = {}, detail = {} } = this.state.data;
    const { id } = this.state;

    const lastData = isEmptyObj(obj) ? detail : obj

    const noData = !id || !type || isEmptyObj(lastData)
    return (
      <Row className="channel-container">
        <Row>
          <Col span={24}>
            {/* <Banner backgroundImage={banner_04} title="关于郡县" desc="县域赋能产品中心" /> */}
            <Banner backgroundImage={banner_04} title="&nbsp;" desc="" />
          </Col>
        </Row>
        <Row>
          <div className="article">

            {!noData ? (
              <>
                <h2 className="title">{title}</h2>
                <div className="publishDate">发布时间：{moment(lastData.publishDate || lastData.publish || '').format('YYYY-MM-DD')}</div>
                <div className="content" dangerouslySetInnerHTML={{ __html: lastData.content }} />
              </>) : <Empty style={{ minHeight: 300 }} description="暂无数据" />
            }
            {lastData.px10 ? (
              <div id="px10" style={{ textAlign: 'center' }}>
                <img style={{ width: '70%' }} className="img" src={lastData.px10} alt="" />
              </div>) : null}
            {lastData.px100 ? (
              <div id="px100" className="img" style={{ textAlign: 'center' }} >
                <img style={{ width: '70%' }} src={lastData.px100} alt="" />
              </div>) : null}
          </div>
        </Row>
      </Row>
    );
  }
}
