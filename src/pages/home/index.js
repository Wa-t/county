import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button } from "antd";
import Polygon from "../../component/Polygon";
import FloatingImage from "../../component/FloatingImage";
import "./index.less";
import { countyModules } from "./moduleMenu";

class HomePage extends Component {
  state = {
    currentCarouselIdx: 0,
    carouselCount: 0,
  };
  componentDidMount() {
    this.setState({
      carouselCount: this.refs.carousel.props.children.length,
    });
    // var videoDOMs = document.querySelectorAll(".video-panel video");
    // 防止复制的 video 也进行播放
    // videoDOMs[0].innerHTML = "";
    // videoDOMs[2].innerHTML = "";
  }
  renderCarouselVedioItem(type = "carouse") {

    //autoplay="autoplay" loop="loop"
    const { currentCarouselIdx } = this.state;
    return (
      <div
        className={`video-panel ${currentCarouselIdx === 1 ? "inactive" : ""}`}
      >
        <video
          width="100%"
          controls
          controlsList="noremote footbar nodownload noremoteplayback"
          disablePictureInPicture={true}
          id="banner-video"
          // autoPlay="autoplay"
          loop="loop"
          autostart="true"
        >
          <source
            src="https://cdn.clgnews.com/video/site.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  renderCarouselModuleItem() {
    return (
      <div className="module-menu-panel">
        <div className="menu-row-container">
          {/* {countyModules.map((module, i) => (
                  i < 3 && <Polygon key={module.id} title={module.title} desc={module.desc} path={module.path ? module.path : (module.foreignSite.path ? module.foreignSite.path : '')} />
                ))} */}
          {countyModules.map((module, i) => {
            if (i < 3) {
              if (module.path) {
                return (
                  <Link key={module.id} to={module.path}>
                    <Polygon title={module.title} desc={module.desc} />
                  </Link>
                );
              } else {
                return (
                  <a
                    key={module.id}
                    href={
                      module.foreignSite.path ? module.foreignSite.path : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Polygon title={module.title} desc={module.desc} />
                  </a>
                );
              }
            }
            return null;
          })}
        </div>
        <div className="menu-row-container">
          {countyModules.map((module, i) => {
            if (i > 2) {
              if (module.path) {
                return (
                  <Link key={module.id} to={module.path}>
                    <Polygon title={module.title} desc={module.desc} />
                  </Link>
                );
              } else {
                return (
                  <a
                    key={module.id}
                    href={
                      module.foreignSite.path ? module.foreignSite.path : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Polygon title={module.title} desc={module.desc} />
                  </a>
                );
              }
            }
            return null;
          })}
        </div>
      </div>
    );
  }

  handleSwitch(type) {
    //
    if (type === "prev") {
      this.refs.carousel.prev();
    } else {
      this.refs.carousel.next();
    }
  }
  handleChange(current) {
    this.setState({
      currentCarouselIdx: current,
    });
    var videoDOMs = document.querySelectorAll(".video-panel video");
    // current === 0 && videoDOMs[0].paused
    //   ? videoDOMs[0].play()
    //   : videoDOMs[0].pause();
    // 防止复制的 video 也进行播放
    !videoDOMs[1].paused && videoDOMs[1].pause();
  }
  renderCarouselPanel() {
    const { currentCarouselIdx, carouselCount } = this.state;
    return (
      <div className="carousel-container">
        {/* <Button
          className="switch-btn prev"
          shape="circle"
          icon="left"
          onClick={() => this.handleSwitch("prev")}
          disabled={currentCarouselIdx === 0}
        ></Button>
        <Button
          className="switch-btn next"
          shape="circle"
          icon="right"
          onClick={() => this.handleSwitch("next")}
          disabled={currentCarouselIdx === carouselCount - 1}
        ></Button> */}
        <Carousel
          ref="carousel"
          afterChange={(current) => this.handleChange(current)}
        >
          {this.renderCarouselModuleItem()}
          {/* {this.renderCarouselVedioItem()} */}
        </Carousel>
      </div>
    );
  }
  renderHomeBlockContent() {
    return (
      <div className="home-content">
        <div className="block-content-01">
          <p className="county-title">中国县域发展榜</p>
          <p className="slogan">
            展现中国实现全面小康的<span className="highlight">辉煌成就</span>
          </p>
          <p className="slogan">
            <span className="highlight">创建中国县域发展</span>的综合测评体系
          </p>
          <div className="Introduction-video">
            <div className="video-title">介绍视频</div>
            {this.renderCarouselVedioItem("Introduction")}
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { currentCarouselIdx } = this.state;
    return (
      <Row>
        <Col className="page-banner" span={24}>
          <div className="float-image-container">
            <FloatingImage
              className={`${
                currentCarouselIdx === 0 && " show-floating-image "
                }`}
              position={["20%", "260px"]}
              delay="0.1s"
            />
            <FloatingImage
              className={`${
                currentCarouselIdx === 0 && " show-floating-image "
                }`}
              position={["40%", "40px"]}
              size="small"
              delay="0.2s"
            />
            <FloatingImage
              className={`${
                currentCarouselIdx === 0 && " show-floating-image "
                }`}
              position={["60%", "450px"]}
              size="small"
              delay="0.1s"
            />
            <FloatingImage
              className={`${
                currentCarouselIdx === 0 && " show-floating-image "
                }`}
              position={["75%", "80px"]}
              size="small"
              delay="0s"
            />
            <FloatingImage
              className={`${
                currentCarouselIdx === 0 && " show-floating-image "
                }`}
              position={["75.8%", "84px"]}
              delay="0.1s"
            />
          </div>
          {this.renderCarouselPanel()}
        </Col>
        <Col span={24}>{this.renderHomeBlockContent()}</Col>
      </Row>
    );
  }
}

// const stateToProps = ({ loggedUserState }) => ({
//   userInfo: loggedUserState.userInfo,
// });
export default connect()(HomePage);
