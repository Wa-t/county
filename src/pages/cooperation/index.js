import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, Card, Table } from 'antd';
import Banner from '../../component/Banner';
import './index.less';
import banner_02 from '../../assets/images/banner_02.png';
import summary from '../../assets/images/summary.png'
import { getUrlParams } from '../../utils';

const BreadcrumbItem = Breadcrumb.Item;


class Cooperation extends Component {
  columns = [
    {
      title: <span style={{ fontWeight: 'bold' }}>《小康》杂志社 · 中国县域发展榜联系信息</span>,
      dataIndex: 'title',
      key: 'title',
      colSpan: 2,
      width: '50%'
    },
    {
      title: '',
      dataIndex: 'address',
      key: 'address',
      colSpan: 0,
      width: '50%'
    },
  ]

  dataSource = [
    {
      title: '《小康》杂志社社址',
      address: '北京市朝阳区百子湾路 32 号苹果 社区北区 1 号楼四层'
    },
    {
      title: '中国小康网(中国县域新闻第一网)',
      address: 'www.chinaxiaokang.com'
    },
    {
      title: '郡县网(中国县域发展榜发布平台)',
      address: 'www.clgnews.com'
    },
    {
      title: '中国县域发展榜课题组邮箱',
      address: 'xiaokangccdl@163.com'
    },
    {
      title: '联系人及联系方式',
      address: <div>孙 路:18610150311<br />
                    王韵雅:18911646939
                </div>
    },
  ]
  componentDidMount() {
    const urlParams = getUrlParams()
    const { id } = urlParams
    const summaryReport = document.querySelector(`#${id}`)
    if (summaryReport) summaryReport.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <Row className="hundred-county-container">
        <Col span={24}>
          {/* <Banner backgroundImage={banner_02} title="榜单合作" desc="中国县域发展榜" /> */}
          <Banner backgroundImage={banner_02} title="榜单合作" desc="" />
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
          <div className="cooperation-container">
            <h2 className="article-title">关注民生 服务县域</h2>
            <h2 className="article-title">中国县域发展榜项目合作邀请函</h2>

            <div style={{ marginTop: 20 }}>
              <div className="topic-title">展现中国全面小康辉煌成就</div>
              <div className="topic-title">创建县域发展综合测评体系</div>
            </div>

            <p className="detail">2020 年是中国全面建成小康社会的决胜之年，县域小康是决胜全面建成小 康社会的重要组成部分。《小康》杂志联合多个国家权威部门和专业机构，面向 中国县域基层行政单位，
隆重推出“中国县域发展榜”。</p>
            <p className="detail">《小康》将每年发布 52 个专项主题榜单。每个榜单均涵盖全国所有县域行 政单位,实现全域覆盖排榜，并通过《小康》杂志重点发布公示前 100 位上榜县 域。</p>


            <div style={{ marginTop: 20 }}>
              <div className="topic-title">全媒体平台多渠道宣传推广</div>
              <div className="topic-title">全方位支持多元化战略合作</div>
            </div>

            <p className="detail">《小康》将每年发布 52 个专项主题榜单。每个榜单均涵盖全国所有县域行 政单位,实现全域覆盖排榜，并通过《小康》杂志重点发布公示前 100 位上榜县 域。</p>
            <p className="detail">中国县域发展榜的顺利开展，需要各县域单位的大力支持与配合，现诚恳邀 请贵单位与《小康》杂志就中国县域发展榜开展合作:</p>

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

            <p className="detail">中国县域发展榜课题组已对 52 个榜单进行了模拟测试排位，贵单位如需了 解贵方在某专项榜单中的预估排位情况，或对榜单各项合作有意向，可通过以下 联系信息与《小康》杂志
            社中国县域发展榜课题组联系。感谢您一直以来对《小 康》的关注和厚爱。我们虔诚地邀请您对《小康》的工作进行积极的协助和反馈， 对中国县域发展榜进行公道的建议和评价，
          我们希望在您的支持和参与下获得更 大的发展。</p>
            <div className="with-greetings">此致</div>
            <div>敬礼!</div>
            <div className="signature">《小康》杂志社</div>





            <Table
              columns={this.columns}
              dataSource={this.dataSource}
              bordered
              pagination={false}
            />

            <h4 className="section-title">链接信息一:“中国县域发展榜”</h4>
            <p className="detail">“中国县域发展榜”聚焦县域发展，针对全国每个县域的多项政务领域，深 度观察社会民生发展的“毛细血管”，展现中国全面小康的辉煌成就，创建中国 2856 个县域发展
            的综合测评体系，旨在为县域主政者和各有关职能单位提供执 政参考，促进县域治理及经济发展，助推全国县域全面实现小康目标“最后一公 里”，弘扬县域治理先进，塑造
          特色县域品牌和提升县域发展的社会综合形象。</p>

            <p className="detail">《小康》将每年发布 52 个专项主题榜单。每个榜单均涵盖全国县域行政单 位,实现全域覆盖排榜，并通过《小康》杂志重点发布公示前 100 位上榜县域。 中国县域发展榜榜
          单是中国首个以县域发展为主题的系列榜单，榜单排榜全程公 众互动，发布激活 3000 万优质读者和影响 1.4 亿传媒受众。有深远影响力和国 际公信力。</p>

            <p className="detail">中国县域发展榜组建中国县域发展榜课题组，组织国家智库权威专家担纲评 审，为每个专项榜单设定 6 个评榜维度，设立 120 个关键词标签，每个榜单采集 超过 1 亿条有效
            网络信源支持全网大数据解析，榜单采用网络认可分、客观指标 分及特质属性分进行三级梯次评判，设置四项加权指标:全网数据分析、县域专 题调研、社会公众态度、专家评
          审意见。榜单由中国数据情报公司沃民高科基于 独有的开源情报分析大数据平台，提供全面技术支持。</p>


            <h4 className="section-title">链接信息二:《小康》杂志社</h4>
            <p className="detail">《小康》杂志隶属于中共中央机关刊《求是》杂志社，是中央级政经类媒体 刊物。《小康》旗下拥有中国小康网、圆点直播等全媒体平台和新媒体矩阵，被 誉为“中国县域新
          闻第一网”。 《小康》连续 15 年独家发布“中国小康指数”， 缔造中国全面小康论坛、中国(国际)休闲发展论坛等知名论坛品牌。</p>


            <h4 className="section-title">链接信息三:2020 中国县域发展榜榜单发布总表</h4>
            <Card id="summary-report" className="summary-card" bodyStyle={{ padding: 56 }}>
              <img style={{ width: '100%' }} src={summary} alt="" /></Card>

          </div>
        </Col>
      </Row>
    );
  }
}


export default Cooperation;
