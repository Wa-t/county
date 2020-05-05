import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,  Button, Card, List, Form, Select, Breadcrumb, Popover, Modal,Tabs, Icon } from 'antd';
import moment from 'moment';
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
import { notices, news, reports, sponsers } from './listData';
import { navMenu } from './linkData';
import { inProgressList, publishList, noPublishList } from './data';

const { Option } = Select;
const BreadcrumbItem = Breadcrumb.Item;
const { TabPane } = Tabs;


class HundredCounty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      declareVisible: false,
      inProgressList: inProgressList,
      publishList: publishList,
      noPublishList: noPublishList
    }
  }
  handleDeclareAction = () => {
    this.setState({
      declareVisible: true
    })
  }
  handleSearchClick = () => {
    this.showModal();
  }
  showModal() {
    this.setState({
      visible: true
    })
  }
  hideModal = () => {
    this.setState({
      visible: false,
      declareVisible: false
    });
  };

  renderTabs = () => {
    return (
      <Card className="tabs-card">
        <Tabs defaultActiveKey="1" type="card" >
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
    const {inProgressList} = this.state
    return (
      <ul className="selecting">
        {
          inProgressList.map((o, i) => {
            return (
              <li key={i} >
              <div className="left">
                <Button  className="selecting-tag">榜单公告</Button>
                <Button  className="selecting-tag">榜单冠名</Button>
              </div>
              <div className="center">
                <div className="title">{o}</div>
                <div>发布时间：2020年4月14日</div>
              </div>
              <div className="right">
                我要投票
              </div>
            </li>
            )
          })
        }
      </ul>
    )
  }

  renderPublish = () => {
    const {publishList} = this.state
    return (
      <ul className="publish">
        {
          publishList.map((item, index) => {
            return (
              <li key={index}>
                <div className="left">
                  <div className="title">{item}</div>
                  <div className="time">发布时间：2020年4月14日</div>
                </div>
                <div className="right">
                  <button>十佳榜</button>
                  <button>百佳榜</button>
                  <button>榜单<br />报告</button>
                  <button>榜单<br />新闻</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  renderNoPublish = () => {
    const {noPublishList} = this.state
    return (
      <ul className="no-publish">
        {
          noPublishList.map((item, index) => {
            return (
              <li key={index}>
                <div className="left">2020<br />四月</div>
                <div className="right">
                  <div className="title">{item}</div>
                  <div className="time">发布时间：2020年4月14日</div>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  renderSearchList() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onSubmit={this.handleSubmit}>
        <Form.Item label="榜单">
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Select placeholder="选择县域" onChange={this.handleSelectChange}>
              <Option value="1">2020中国县域电子商务百强榜</Option>
              <Option value="2">2020中国礼仪百佳县市</Option>
              <Option value="3">2020中国春季休闲百佳县市</Option>
              <Option value="4">2020中国县域消费百强榜</Option>
              <Option value="5">2020中国县域文化消费百强榜</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="县域">
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select placeholder="选择榜单" onChange={this.handleSelectChange}>
              <Option value="1">130102 河北 石家庄市 长安区</Option>
              <Option value="2">130104 河北 石家庄市 桥西区</Option>
              <Option value="3">130105 河北 石家庄市 新华区</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit" onClick={this.handleSearchClick}>
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }
  render() {
    const { visible, declareVisible } = this.state;
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
              } else if (parseInt(item.id) === 7) {
                return (
                  <Popover key={item.id} placement="bottom" trigger="click" content={<img width="145px" src={voteQRCode} alt="vote" />}>
                    <Button>{item.name}</Button>
                  </Popover>
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
            <QuickEntry entryDesc="2020中国县域发展榜" entryName="榜单发布总表" background={entry_01} styleConfig={{color: '#FFFFFF', btnBackground: '', btnColor: '#FFFFFF'}}/>
            <QuickEntry entryDesc="2020中国县域发展榜" entryName="参榜申报专区" background={entry_02} styleConfig={{color: '#4C61CA', btnBackground: '#FFFFFF', btnColor: '#4C61CA'}}/>
            <QuickEntry entryDesc="2020中国县域发展榜" entryName="课题组" background={entry_03} styleConfig={{color: '#2B61AD', btnBackground: '#2B61AD', btnColor: '#FFFFFF'}}/>
          </Col>
          <Col xs={24} xl={14}>
             <Card
              className="list-card"
              style={{ position: 'relative' }}
            >
              <h3>中国县域发展排行榜</h3>
              <h4 style={{ color: '#1b63da' }}>展现中国全面小康辉煌成就·创建县域发展综合测评体系</h4>
              
              <p>百县榜是由《小康》杂志联合多个国家权威部门和专业机构，面向中国县域基层行政单位，
隆重推出的百县榜单工程：中国县域发展榜。“中国县域发展榜”聚焦县域发展，针对全
国每个县域的多项政务领域，深度观察社会民生发展的“毛细血管”，展现中国全面小康
的辉煌成就，创建中国2856个县域发展的综合测评体系...</p>
                <Button style={{ position: 'absolute', bottom: 10, right: 24 }} type="link" href="#/appDetail">
                  更多
                </Button>
            </Card>
            <Card
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
                <Button type="link" href="https://www.clgnews.com/notice_list/1">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={notices}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
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
                <Button type="link" href="https://www.clgnews.com/news_list/bangdannews/1">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={news}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
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
                <Button type="link" href="https://www.clgnews.com/report_list/1">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={reports}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
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
                <Button type="link" href="https://www.clgnews.com/business_list/1">
                  更多
                </Button>
              }
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={sponsers}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
          </Col>
        </Row>
        <Modal
          title="提示"
          okText="确定"
          visible={visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          footer={[
            <Button key="submit" type="primary" onClick={this.hideModal}>确定</Button>
          ]}
        >
          <p>很遗憾没有入选！</p>
        </Modal>
        <Modal
          title="提示"
          okText="确定"
          visible={declareVisible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          footer={[
            <Button key="submit" type="primary" onClick={this.hideModal}>确定</Button>
          ]}
        >
          <p>站点正在建设中</p>
        </Modal>
      </Row>
    );
  }
}

const HundredCountyF = Form.create()(HundredCounty);

export default HundredCountyF;
