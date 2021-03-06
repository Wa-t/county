import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card, List, Form, Select, Breadcrumb, Popover, Modal, Tabs, Icon, Skeleton } from 'antd';
import moment from 'moment';
import WaitModal from '../../component/WaitModal'
import QuickEntry from '../../component/QuickEntry';
import Banner from '../../component/Banner';
import './index.less';
import banner_02 from '../../assets/images/banner_02.png';
import entry_01 from '../../assets/images/entry_01.png';
import entry_02 from '../../assets/images/entry_02.png';
import entry_03 from '../../assets/images/entry_03.png';
import icon_notices from '../../assets/images/icon_notices.png';
import icon_news from '../../assets/images/icon_news.png';
import icon_reports from '../../assets/images/icon_reports.png';
import icon_sponsers from '../../assets/images/icon_sponsers.png';
import voteQRCode from '../../assets/images/vote_qrcode.png';
import { navMenu } from './linkData';
import publish10 from '../../assets/images/publish10.png'
import publish100 from '../../assets/images/publish100.png'
import publishReport from '../../assets/images/publish-report.png'
import publishNews from '../../assets/images/publish-news.png'
import unPublish from '../../assets/images/unPublish.png'

import * as actions from '../../actions/hundred';

const { Option } = Select;
const BreadcrumbItem = Breadcrumb.Item;
const { TabPane } = Tabs;



class HundredCounty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      declareVisible: false,
      searchResultList: [],
      tabKey: '1',
      modalText: '正在开发中...'
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.updateState({ loading: true }))
    dispatch(actions.fetchData())
  }

  handleDeclareAction = (text) => {
    this.setState({
      declareVisible: true,
      modalText: typeof text === 'string' ? text : undefined
    })
  }
  handleSearchClick = (e) => {
    const { searchList = [] } = this.props.data;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
      const { bangId } = values
      const searchResultList = searchList.filter(item => item._id === bangId)
      this.setState({
        searchResultList
      })
    });
  }


  onToGuanming = (data) => {
    console.log('ffffffff')
  }

  onToReport = (data) => {
    const { report } = data;
    if (!report) {
      this.handleDeclareAction('敬请期待！')
    }
  }

  onChangeKey = (key) => {
    this.setState({ tabKey: key })
  }

  hideModal = () => {
    this.setState({
      declareVisible: false,
    });
  };

  filterOptions = (input, option) => {
    console.log(input, option);

    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

  }
  getFilterList = (filterKey) => {
    const { list = [] } = this.props.data;
    return list.filter(item => {
      return item.status === filterKey
    })
  }


  renderTabs = () => {

    return (
      <Card className="tabs-card">
        <Tabs activeKey={this.state.tabKey} onChange={this.onChangeKey} className="" >
          <TabPane tab="进行中榜单" key="1">
            <div className="tab-pane-box">
              {this.renderInProgress()}
            </div>
          </TabPane>
          <TabPane tab="已发布榜单" key="2">
            <div className="tab-pane-box">
              {this.renderPublish()}
            </div>

          </TabPane>
          <TabPane tab="未发布榜单" key="3">
            <div className="tab-pane-box">
              {this.renderNoPublish()}
            </div>
          </TabPane>

          <TabPane tab={<span><Icon type="search" />查询</span>} key="4">
            <div className="tab-pane-box">
              {this.renderSearchList()}
            </div>
          </TabPane>
        </Tabs>
      </Card>
    )
  }

  renderInProgress = () => {
    const { loading } = this.props;
    const currentList = this.getFilterList(1) // 1进行中
    return (
      <ul className="selecting">
        <Skeleton loading={loading} >
          {
            currentList.map((item, i) => {
              return (
                <li key={i} >
                  <div className="left">
                    <Button className="selecting-tag" onClick={(item) => this.onToReport(item)}>榜单公告</Button>
                    <Button className="selecting-tag" onClick={(item) => this.onToGuanming(item)}>榜单冠名</Button>
                  </div>
                  <div className="center">
                    <div className="title">{item.title}</div>
                    <div>发布时间：{item.publishDate}</div>
                  </div>
                  <div className="right">
                    <Popover key={item._id} placement="right" trigger="hover" content={<img width="145px"
                      // src={`https://www.clgnews.com/qrcode?url=https%3A%2F%2Fapp.clgnews.com%2F%2Fapp%2Findex.php%3Fi%3D5%26c%3Dentry%26do%3Dindex%26m%3Dyyb_vote%26id%3D46`}
                      src={`https://api.clgnews.com/qrcode?url=${item.link}`}
                      alt="vote"
                    />}>
                      <div> 我要投票
                      </div>
                    </Popover>
                  </div>
                </li>
              )
            })
          }
        </Skeleton>
      </ul>
    )
  }

  renderPublish = () => {
    const { loading } = this.props;
    const currentList = this.getFilterList(3) // 3已发布（已结束）
    return (
      <ul className="publish">
        <Skeleton loading={loading} >
          {
            currentList.map((item, index) => {
              const link = `#/detail/${item._id}?type=3`
              return (
                <li key={index}>
                  <div className="left">
                    <div className="title">
                      <a href={`${link}`} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </div>
                    <div className="time">发布时间：{item.publishDate}</div>
                  </div>
                  <div className="right">
                    <div>
                      <a href={`${link}&link=px10`} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publish10} alt="" />
                      </a>
                    </div>
                    <div>
                      <a href={`${link}&link=px100`} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publish100} alt="" />
                      </a>
                    </div>
                    <div>
                      <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publishReport} alt="" />
                      </a>
                    </div>
                    <div>

                      <a href="#/newList/2" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publishNews} alt="" />
                      </a>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </Skeleton>

      </ul>
    )
  }

  renderNoPublish = () => {
    const { loading } = this.props;
    const currentList = this.getFilterList(0) // 0未发布（待启动）
    return (
      <ul className="no-publish">
        <Skeleton loading={loading} >
          {
            currentList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="left">
                    <img src={unPublish} alt="" />
                  </div>
                  <div className="right">
                    <div className="title">{item.title}</div>
                    <div className="time">发布时间：{item.publishDate}</div>
                  </div>
                </li>
              )
            })
          }
        </Skeleton>
      </ul>
    )
  }

  renderSearchList() {
    const { getFieldDecorator } = this.props.form;
    const { searchList = [] } = this.props.data;
    const { searchResultList } = this.state;
    return (
      <div>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onSubmit={this.handleSubmit}>
          <Form.Item label="已发布榜单">
            {getFieldDecorator('bangId', {
              rules: [{ required: true, message: '请选择榜单' }],
            })(
              <Select
                placeholder="选择榜单"
                showSearch
                onChange={this.handleSelectChange}
                filterOption={this.filterOptions}
              >
                {
                  searchList.map(item => <Option key={item._id} value={item._id}>{item.title}</Option>)
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit" onClick={this.handleSearchClick}>
              查询
            </Button>
          </Form.Item>
        </Form>
        <ul className="no-publish">
          {
            searchResultList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="left">
                    <img src={unPublish} alt="" />
                  </div>
                  <div className="right">
                    <div className="title">
                      <a href={`#/detail/${item._id}?type=3`} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </div>
                    <div className="time">发布时间：{item.publishDate}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </div>
    );
  }
  render() {
    const { visible, declareVisible, modalText } = this.state;
    const { data, loading } = this.props;
    const { gonggao = [], news = [], guanming = [], report = [] } = data;
    return (
      <Row className="hundred-county-container">
        <Col span={24}>
          <Banner backgroundImage={banner_02} title="百县榜" desc="中国县域发展榜" />
        </Col>
        <Col className="nav-container" span={24}>
          <Breadcrumb separator=">">
            <BreadcrumbItem>
              <Link to="/">首页</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="#">中国县域发展榜</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button.Group>
            {navMenu.map((item, i) => {
              if (parseInt(item.id) === 6) {
                return (
                  <Button key={item.id} onClick={this.handleDeclareAction}>
                    {item.name}
                  </Button>
                );
              } else
                if (parseInt(item.id) === 7) {
                  return (
                    <Button key={item.id} onClick={() => { this.onChangeKey('1') }}>{item.name}</Button>
                  );
                } else {
                  return (
                    <Button key={item.id} href={item.address}>
                      {item.name}
                    </Button>
                  );
                }
            })}
          </Button.Group>
        </Col>
        <Row gutter={20}>
          <Col xs={24} xl={10}>
            {this.renderTabs()}
            <QuickEntry href="#/cooperation?id=summary-report" entryDesc="2020中国县域发展榜" entryName="榜单发布总表" background={entry_01} styleConfig={{ color: '#FFFFFF', btnBackground: '', btnColor: '#FFFFFF' }} />
            <QuickEntry onClick={this.handleDeclareAction} entryDesc="2020中国县域发展榜" entryName="参榜申报专区" background={entry_02} styleConfig={{ color: '#4C61CA', btnBackground: '#FFFFFF', btnColor: '#4C61CA' }} />
            <QuickEntry onClick={this.handleDeclareAction} entryDesc="2020中国县域发展榜" entryName="课题组" background={entry_03} styleConfig={{ color: '#2B61AD', btnBackground: '#2B61AD', btnColor: '#FFFFFF' }} />
          </Col>
          <Col xs={24} xl={14}>
            <Card
              className="list-card"
              style={{ position: 'relative' }}
            >
              <h3>中国县域发展排行榜</h3>
              <h4 style={{ color: '#1b63da' }}>
                <a href="#/appDetail" target="_blank" >展现中国全面小康辉煌成就·创建县域发展综合测评体系</a>
              </h4>

              <p>百县榜是由《小康》杂志联合多个国家权威部门和专业机构，面向中国县域基层行政单位，
              隆重推出的百县榜单工程：中国县域发展榜。“中国县域发展榜”聚焦县域发展，针对全
              国每个县域的多项政务领域，深度观察社会民生发展的“毛细血管”，展现中国全面小康
的辉煌成就，创建中国2856个县域发展的综合测评体系...</p>
              <Button
                style={{ position: 'absolute', bottom: 10, right: 24 }}
                type="link"
                href="#/appDetail"
                target="_blank"
              >
                更多
                </Button>
            </Card>
            <Card
              loading={loading}
              className="list-card"
              title={
                <span>
                  <span className="icon">
                    <img src={icon_news} alt="news" />
                  </span>
                  榜单新闻
                </span>
              }
              extra={
                <Button target="_blank" type="link" href="#/newList/2">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={news.slice(0, 3)}
                renderItem={item => (
                  <List.Item>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=2`}>
                      <span>{item.title}</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=2`}>
                      <span>{moment(item.addDate).format('YYYY-MM-DD')}</span>
                    </a>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
              loading={loading}
              className="list-card"
              title={
                <span>
                  <span className="icon">
                    <img src={icon_reports} alt="report" />
                  </span>
                  榜单报告
                </span>
              }
              extra={
                <Button target="_blank" type="link" href="#/newList/3">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={report}
                renderItem={item => (
                  <List.Item>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=3`}>
                      <span>{item.title}</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=3`}>
                      <span>{moment(item.beginDate).format('YYYY-MM-DD')}</span>
                    </a>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
              loading={loading}
              className="list-card"
              title={
                <span>
                  <span className="icon">
                    <img src={icon_notices} alt="notices" />
                  </span>
                  榜单公告
                </span>
              }
              extra={
                <Button target="_blank" type="link" href="#/newList/1">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={gonggao}
                renderItem={item => (
                  <List.Item>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=1`}>
                      <span>{item.title}</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=1`}>
                      <span>{moment(item.beginDate).format('YYYY-MM-DD')}</span>
                    </a>
                  </List.Item>
                )}
              ></List>
            </Card>


            <Card
              loading={loading}
              className="list-card"
              title={
                <span>
                  <span className="icon">
                    <img src={icon_sponsers} alt="sponser" />
                  </span>
                  榜单冠名
                </span>
              }
              extra={
                <Button target="_blank" type="link" href="#/newList/4">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={guanming}
                renderItem={item => (
                  <List.Item>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=4`}>
                      <span>{item.title}</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={`#/detail/${item._id}?type=4`}>
                      <span>{moment(item.beginDate).format('YYYY-MM-DD')}</span>
                    </a>
                  </List.Item>
                )}
              ></List>
            </Card>
          </Col>
        </Row>
        <WaitModal visible={declareVisible} text={modalText} onOk={this.hideModal} onCancel={this.hideModal} />
      </Row>
    );
  }
}

const HundredCountyF = Form.create()(HundredCounty);

export default connect(state => state.hundredReducer)(HundredCountyF);
