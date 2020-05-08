import React, { Component } from 'react';
import { Row, Col, Input, List, Button } from 'antd';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_04 from '../../assets/images/banner_04.png';
import Article from './article';
import './index.less';
import './platform.less';
import { passMenus } from './passMenus';
import { getArticals, updateState } from "../../actions/platform";
import { connect } from "react-redux";


const { Search } = Input;

class Platform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowSeleted: 0,
      selectedItem: { ...props.match.params },
      searchText: '',
      nowArticle: {}
    }
  }
  componentDidMount() {
    console.log(this.props, '333333333')
    this.queryData()
  }

  onSelecte = (item) => {
    console.log(item);
    this.setState({
      selectedItem: item
    }, this.queryData)
  }

  queryData = () => {
    const { dispatch } = this.props;
    const { selectedItem: { title: tag }, searchText } = this.state;
    dispatch(getArticals({
      tag,
      searchText,
    }));
  }

  onSearch = (value) => {
    this.setState({
      searchText: value
    }, this.queryData)
  };

  viewDetail = (item) => {
    // this.props.dispatch(updateState({
    //   nowArticle: item
    // }))
    this.props.history.push(`${this.props.match.url}/${item.title}`)

  }




  render() {
    const { articals, nowArticle = {} } = this.props;
    const { name } = this.props.match.params;
    return (
      <Row className="pass-platform-container">
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24} className="pass-content-cotainer">
          <CarouselMenu onSelecte={this.onSelecte} menus={passMenus} perPageCount={8} defaultSelecte={this.state.selectedItem.id} />
          <Search placeholder="关键词搜索" onSearch={this.onSearch} enterButton size="large" />

          {!name ?
            <List
              style={{ minHeight: 300, marginBottom: 100 }}
              itemLayout="vertical"
              size="large"
              locale={{ emptyText: '暂无数据' }}
              dataSource={articals}
              renderItem={item => (
                <List.Item
                  key={item.id}
                >
                  <div className="list-item">

                    {item.extendInfo ?
                      <div className="img">
                        <img alt="" width="200" src={item.extendInfo && item.extendInfo.split(',')[0]}></img>
                      </div>
                      : null
                    }
                    <div className="right">
                      <div className="title">
                        {item.title}
                      </div>
                      <div className="content">
                        {`${item.content.slice(0, 70)}.....`}
                      </div>

                      <div className="footer">
                        <span className="publish">发布时间：{item.time}</span>
                        <span className="tag">{item.tag} </span>
                      </div>

                      <div style={{ marginTop: 20 }}>
                        <Button
                          style={{
                            backgroundColor: '#3652cb',
                            color: '#FFF'
                          }}
                          onClick={() => this.viewDetail(item)}
                          shape="round">
                          阅读详情
                        </Button>
                      </div>
                    </div>

                  </div>
                </List.Item>
              )}
            />
            : <Article title={name} />
          }
          {/* <Article /> */}
        </Col>
      </Row>
    );
  }
}

export default connect((state) => state.platformReducer)(Platform);