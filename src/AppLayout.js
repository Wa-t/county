import React, { Component } from "react";
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PrimaryRouter from './router/PrimaryRouter';
import SiteHeader from './component/Header';
import SiteFooter from './component/Footer';
import './AppLayout.less';

const { Header, Content, Footer } = Layout;

class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <SiteHeader />
        </Header>
        <Content>
          <PrimaryRouter {...this.props}/>
        </Content>
        <Footer>
          <SiteFooter />
        </Footer>
      </Layout>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     appReducer: state.appReducer,
//     intl: props.intl,
//     messages: messages
//   };
// };

export default connect()(AppLayout);
