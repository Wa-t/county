import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, Card } from 'antd';
import Banner from '../../component/Banner';
import './index.less';
import banner_02 from '../../assets/images/banner_02.png';
import summary from '../../assets/images/summary.png'

const BreadcrumbItem = Breadcrumb.Item;

class HundredDetail extends Component {

  render() {
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
              <Link to="">中国县域发展榜</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="#">详情</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col>
          <div className="hundred-detail-container">
          <h2 className="article-title">百县榜：中国县域发展排行榜</h2>
          <h4 className="sub-title">展现中国全面小康辉煌成就·创建县域发展综合测评体系</h4>


          <p className="detail">百县榜是由《小康》杂志联合多个国家权威部门和专业机构，面向中国县域基层行政单位，隆重推出的<span className="mark">百县榜单工程：中国县域发展榜</span>。“中国县域发展榜”聚焦县域发展，
          针对全国每个县域的多项政务领域，深度观察社会民生发展的“毛细血管”，展现中国全面小康的辉煌成就，创建中国2856个县域发展的综合测评体系，旨在为县域政务管
          理者和各有关职能单位提供执政参考，促进县域治理及经济发展，助推全国县域全面实现小康目标“最后一公里”，弘扬县域治理先进，塑造特色县域品牌和提升县域发展
          的社会综合形象。</p>
          <p className="detail">中国县域发展榜将每年发布<span className="mark">52个专项主题榜单</span>。每个榜单均涵盖全国所有县域行政单位,实现全域覆盖排榜，并通过《小康》杂志重点发布公示<span className="mark">前100位上榜县域</span>，称为<span className="mark">“百县榜”</span>。</p>
          <p >中国县域发展榜榜单是中国首个以县域发展为主题的系列榜单，榜单排榜全程公众互动，发布面向3000万优质读者和影响1.4亿传媒受众。有深远影响力和国际公信力。</p>
          <p className="detail">中国县域发展榜的测评标准：榜单实行全频视界测评，设置网络数据分析、县域专题调研、社会公众态度和专家评审意见四项指标进行加权，经综合测评排出榜单。</p>
          <p className="detail">网络数据分析占据40%基础分值：立足全网大数据，包括客观指标分、媒体认可分及网络情绪分等三个积分模块，实行三级梯次评价。三方积分汇总形成网络数据部分的基础评判分。</p>
          <p className="detail">县域专题调研占据20%加权分值：通过信息的采集，评估特质属性分、特定亮点分、特色案例分等三个积分模块，实行三级梯次评价。三方积分汇总形成主题调研部分的基础评判分。</p>
          <p className="detail">社会公众态度占据20%加权分值：通过全社会互动，采用全网投票、问卷调查、街访座谈等形式取得公众态度分，成为排榜的重要参考分值。</p>
          <p className="detail">专家评审意见占据20%加权分值：通过中国县域发展榜课题组的各领域专家顾问，对榜单初排情况进行审核，给出专业的分析，进行客观的打分。</p>
          <p className="detail">中国县域发展榜的信源设定：实行全网数据解析：设立自发榜日之前14个月至2个月共一整年的信源区间，每个榜单均设定6个网络数据评榜维度，设立120个关键词标签；
          通过技术建模得自互联网和移动互联网的数据，全程采集的客观资讯信息超过1亿条。</p>
          <p className="detail">中国县域发展榜的技术支持：榜单由中国数据情报公司沃民高科基于独有的开源情报分析大数据平台，提供全面技术支持。</p>
          <p>中国县域发展榜通过<span className="mark">全媒体平台多渠道宣传推广</span>，<span className="mark">并全方位支持多元化战略合作</span>。中国县域发展榜的顺利开展，需要各县域单位的大力支持与配合：</p>
          

          <h4 className="section-title">一是榜单调研合作:</h4>
          <p className="detail">中国县域发展榜课题组将选取具有代表性的县域行政单 位或优秀企业，定向调研县域发展实况现状，评估县域发展综合测评分值，辅助 县域综合治理和科学发展，提出科学严谨和
            切实可行的整体解决方案，采集县域 发展典型案例，上报国家有关部门和面向全国县域进行表彰推广;</p>

          <h4 className="section-title">二是上榜县域合作:</h4>
          <p className="detail">中国县域发展榜课题组将选取具有代表性的县域行政单 位或优秀企业，定向调研县域发展实况现状，评估县域发展综合测评分值，辅助 县域综合治理和科学发展，提出科学严谨和
            切实可行的整体解决方案，采集县域 发展典型案例，上报国家有关部门和面向全国县域进行表彰推广;</p>

          <h4 className="section-title">二是上榜县域合作:</h4>
          <p className="detail">立足中国县域发展榜排榜标准，《小康》指导县域就 52 个榜单所涵盖的多个方向进行咨询指导，辅佐入榜百强百佳或荣获十强十佳。 《小康》还可对上榜县域进行专业的整体品
            牌策划和系统的整合广宣支持。</p>
          <h4 className="section-title">三是榜单联合承办:</h4>
          <p className="detail">基于《小康》以政务大数据运行榜单的专业底蕴，在中 国县域发展榜 52 个榜单之外，《小康》可根据县域需求，联合承办定制专项榜 单，并邀集专家论证研究，协助榜单的开设和
            组织实施。以榜单的评判和发布为 县域发展赋能。</p>

          <h4 className="section-title">四是榜单冠名合作:</h4>
          <p className="detail">中国县域发展榜的每个榜单冠名权，均授予唯一冠名合 作单位，在自该榜单发布日至次年新榜单发布日止，冠名单位独家获得榜单冠名 +全网榜单投票的票单冠名
            +榜单新闻发布活动冠名。《小康》杂志邀请县域推荐 各榜单冠名单位，包括县域品牌、权威机构或就有行业代表性的优秀企业。冠名 单位将享有巨大溢出效应:在冠名领域奠定冠名
            单位品牌地位，将获更多可预见 品牌战略加持，将大力促进县域发展和提升社会影响。</p>
            
          <h4 className="section-title">五是榜单发布合作:</h4>
          <p className="detail">基于贵县域在中国县域发展榜中相关单项榜方面的突出表现，可在贵地由贵方和《小康》杂志联合进行该项榜单的新闻发布会，并双方 共同举办宣传推广活动。</p>

          <h4 className="section-title">六是整体战略合作:</h4>
          <p className="detail">中国县域发展榜为提升贵县的优势品牌、特色形象及产 品推广具有重要意义，如上榜县域需要在发榜时同步开展深入宣传、推广，我社 将以文字、图片、视频等方
            式提供中国小康网、《小康》杂志、郡县网、强国号 等全媒体平台，及新浪、腾讯、今日头条等合作媒体的全方位推广。同时，我社 还可为贵方提供多元化宣传策划，引进战略合作
            者、教育扶贫、农产品推广、央 视纪录片拍摄等全方位的战略合作。</p>

         
          
          <Card className="summary-card" bodyStyle={{ padding: 56 }}>
          <h4 className="article-title">中国县域发展榜榜单发布总表</h4>
            <img style={{ width: '100%' }} src={summary} alt="" /></Card>
            
          </div>
        </Col>
      </Row>
    );
  }
}


export default HundredDetail;
