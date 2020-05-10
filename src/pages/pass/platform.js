import React, { Component } from 'react';
import { Row, Col, Input, List, Button } from 'antd';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_04 from '../../assets/images/banner_04.png';
import Article from './article';
import { getUrlParams } from '../../utils';
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
    }
  }
  componentDidMount() {
    const data = getUrlParams();
    if (data && data.value) {
      this.setState({
        searchText: data.value
      }, this.queryData)
    } else {
      this.queryData()
    }

  }

  onSelecte = (item) => {
    this.props.history.replace(`/tong/platform/${item.id || 'all'}/${item.title || 'all'}`);
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

  onInput = (e) => {
    this.setState({ searchText: e.target.value })
  }

  onSearch = (value) => {
    this.setState({
      searchText: value
    }, this.queryData)
  };

  viewDetail = (item) => {
    this.props.history.push(`${this.props.match.url}/${item.title}`)
  }




  render() {
    const { articals } = this.props;
    const { name } = this.props.match.params;
    const newMenus = passMenus.slice(0, 1).concat(passMenus.slice(1).reverse())


    return (
      <Row className="pass-platform-container">
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24} className="pass-content-cotainer">
          <CarouselMenu onSelecte={this.onSelecte} menus={newMenus} perPageCount={8} defaultSelecte={this.state.selectedItem.id} />
          <Search placeholder="关键词搜索" onChange={this.onInput} onSearch={this.onSearch} value={this.state.searchText} enterButton size="large" />

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

                    {item.img ?
                      <div className="img">
                        <img alt="" width="300" src={item.img}></img>
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

                      <div style={{ marginTop: 23 }}>
                        <Button
                          style={{
                            backgroundColor: '#3652cb',
                            color: '#FFF',
                            width: 110,
                            height: 35
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