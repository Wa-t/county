import React, { Component } from 'react';
import { Row, Col, Input, List, Button } from 'antd';
import Banner from '../../../component/Banner';
import CarouselMenu from '../../../component/CarouselMenu';
import banner_04 from '../../../assets/images/banner_04.png';
// import Article from '../../component/Article';
import './index.less';
import { passMenus } from '../passMenus';
import { connect } from "react-redux";
import Item from 'antd/lib/list/Item';


class Article extends Component {
  constructor(props) {
    super(props)
  }

  state = {

  }
  componentDidMount() {
    this.setState({
      nowArticle: { ...this.props.nowArticle }
    })
    console.log(this.props)
  }




  render() {
    const { nowArticle = {} } = this.state;
    return (
      <Row className="pass-platform-container">
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24} className="pass-article-cotainer">
          <h2 className="title">{nowArticle.title}</h2>
          <div className="content">{nowArticle.content}</div>
        </Col>
      </Row>
    );
  }
}

export default connect((state) => state.platformReducer)(Article);