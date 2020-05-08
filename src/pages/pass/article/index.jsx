import React, { Component } from 'react';
// import Article from '../../component/Article';
import './index.less';

const articles = [{
  time: '2024-01-24',
  "id": 1,
  "title": "政会通：智能会议的首席执行官",
  "type": "会议管理  新闻编发 现场直播",
  "extendInfo": "https://cdn.clgnews.com/pc_1_1.png,https://cdn.clgnews.com/pc_1_2.png,https://cdn.clgnews.com/pc_1_3.png,https://cdn.clgnews.com/pc_1_4.png,https://cdn.clgnews.com/pc_1_5.png",
  "status": null,
  "isDeleted": 0,
  "content": `<p><b>政务通</b>是为县域政务工作量身定做的智能会议中心应用软件系统。
  政务通致力于创建针对县域智能化会议的大数据应用平台，该系统包括政务会议自主管理、实时新闻编发系统和现场多媒实况直播。
  <b>政会通</b>系统立足微信生态环境，根据会议主题定制管理后台，并配套开发服务号和微网站，为政务会议的管理、传播和资讯分享提供全方位、立体化的解决方案。</p>
<p><b>政会通的会议管理：</b>采用独特的自定义首页模块，首页支持多种方式的内容呈现、有多媒体图文混排、纯图片 、
互动图片以及超链接等方式，另外政会通的链接还支持自定义图标和图片的方式，让用户有更多选择余地 。</p>
  <p><b>政会通的图片直播：</b>采用实时直播方式，自动读取照片的拍摄时间，并按照拍摄时间排序展示图片，在图片浏览的过程中为用户提供了不同尺寸的图片，客户可以随意下载。同时，针对有版权要求的用户，增设自定义水印图合成图的功能。</p>
  <p><b>政会通的新闻报道：</b>提供便捷的新闻发稿功能，在会议系统上能够提交新闻稿件到融媒中心发稿，并及时的看到知名媒体的实时报道情况。</p>
  <p><b>政会通的自定义报名：</b>系统提供自定义报名表单，来宾可根据会议的具体要求，定义报名表格，并提供短信验证和报名通知等消息提醒功能，从而实现会议的自主式报名和数字化签到。</p>
  <p><b>政会通的会场安排：</b>用户可以在后台导出报名结果，实时查询会场会务和食宿交通安排，同时也可以在线为VIP嘉宾导示行程、接待和指定会场座位。</p>

（附：以2019年12月中国全面小康论坛为例，政会通系统显示附图）`
},
{
  "id": 2,
  "title": "政讯报：政务管理者的前沿情报站",
  "type": "新闻资讯快报 政务管理参考",
  "extendInfo": "https://cdn.clgnews.com/pc_1_1.png",
  "status": null,
  "isDeleted": 0,
  "content": `
  <p><b>政讯报</b>是一份根据县域政务管理者的需求定置的<span class="red">政务参考快报</span>。
          <b>政讯报</b>充分利用自身<b>全网资讯数据采集核心技术</b>和<b>政情新闻大数据挖掘专业服务</b>，
          <b>政讯报</b>以<span class="red">电子报</span>的形式，<span class="red">编制特定内容，实现一人一报，按需定时播报，专供政务参考<sapn>。
          为特定的各级党政部门用户掌握实时资讯信息提供<b>个性化解决方案</b>。</p>

<p><b>政讯报</b>是一份支持模块化内容和可自选编辑的新闻电子报，依托中国小康网的<b>专业新闻类电子报资质</b>，
凭借《小康》<b>县域新闻联播大数据库</b>，根据地方政务管理者的部门与职能定位，选取不同的板块主题，
开发了<span class="red">重大关注、特别专题、新闻摘要、舆情快递、民生热点、领导信息、政务记事</span>等板块内容。
帮助用户从海量的新闻资讯数据中精准、全面、快速地获取有价值的内容，并通过相关算法和模型，形成个性化信源，
为政务管理者科学决策、高效管理提供智慧资讯服务。</p>

<div class="fun">作为县域政务管理者的新闻资讯助手，<b>政讯报</b>使命和功能是：</br>
关注重大新闻，推送最新资讯，捕捉热点动态，引导监管舆论。</br>
关注政策信息，把握工作导向，追踪地方民情，提高政务效率。</br>
关注主题活动，检索历史资讯，查找精准数据，助力实务工作。</div>`
},
{
  "id": 3,
  "title": "微讯社：县域资讯的赋能空间站",
  "type": "门户型资讯微生态 多维体城市信息港",
  "extendInfo": "https://cdn.clgnews.com/pc_3_1.png,https://cdn.clgnews.com/pc_3_2.png,https://cdn.clgnews.com/pc_3_3.png",
  "status": null,
  "isDeleted": 0,
  "content": `
  <p><b>微讯社城市空间站</b>是基于微生态环境和布局郡县区的<span class="red">城市资讯门户网站</span>。
  <b>微讯社</b>应用自主研发的微生态资讯采集技术，以原创的复合微网站模式，布局郡县地区，
  为每个城市打造一个门户型、多维体、赋能化的<span class="red">城市资讯发布平台</span>。</p>

<p><b>微讯社城市空间站</b>支持地方政府官网、部委局办官网、民生机构官宣、社团协会官宣、企业发布阵地、
产品营销阵地等<b>六大资讯发布窗口</b>；开辟城市公共平台、服务商家专区、文旅特产专栏、文化原创专栏、自媒体集结区、
商务合作专区等<b>六大赋能专区</b>。</p>

<p><b>微讯社</b>为城市空间站提供数字内容服务和运营支持，在每个县域发展城市空间站运营商。
<b>微讯社</b>布点开通 <b>1000 + 城市空间站</b>，链接 <b>250000 + 自媒体阵地</b>，网聚 <b>1.4 亿 + 优质微信端阅读人群</b>，
以城市空间站为支点，创建领航微时代的“<span class="red">微讯社·城市资讯门户联盟</span>”。</p>

<p><b>微讯社</b>为城市空间站的运营商提供<b>多项赋能项目</b>，包括且不限于<b>微讯社轻站工作室</b>开发的各类微生态
商务工作站<span class="red">建站及运营服务</span>、<b>微讯社微服工作室</b>开启的<span class="red">代运营业务、广告主业务</span>
与推送、引流、增粉、流量变现等<span class="red">微生态计效付费业务</span>。<b>中国县域发展榜</b>
的<span class="red">榜单冠名</span>合作与<span class="red">投票代理</span>业务、<b>中国小康网</b>的
<span class="red">新闻资讯发布</span>与<span class="red">精准推广</span>服务、以及<b>小康优选商城</b>的
<span class="red">农品入驻保荐</span>及<span class="red">平台带货营销</span>服务。</p>`
},
{
  "id": 4,
  "title": "政网哨：县域舆情的敏锐吹哨人",
  "type": "得数据 得未来 得人心 得天下",
  "extendInfo": "",
  "status": null,
  "isDeleted": 0,
  "content": `
  <p><b>政网哨</b>是为县域政务工作量身定做的<span class="red">一站式情报管理系统</span>。<b>政网哨</b>致力于
  <b>创建社会风险实时感知与智能预警大数据平台，用网络大数据和人心识别 AI 技术回应政务管理者的关切</b>。
  是县域政务<span class="red">资讯应用的全频导航台</span>，是县域政务<span class="red">信息研判的精准风向标</span>，
  是县域政务<span class="red">舆情管控的敏锐吹哨人</span>。</p>

<p><b>政网哨</b>系统利用互联网数据为<b>县域管理者提供政务工作的互联网信息相关链接</b>，
汇总所有与县域工作相关信息，不再需要在多个网站之间跳转，按照工作需要自定义信息类型，
系统自动捕捉更新最新动态，不再需要人工跟踪，以及更方便的信息存储和查询。是<span class="red">县域政务资讯应用的全频导航台</span>。</p>

<p><b>政网哨</b>系统专注于<b>县域政务的多元关注目标</b>，资讯来源类型包括官方网站、各项专网、微信公众号、
微博账号等全网信息，地域层级包括从国家级、省市区级到地县级行政单位，关注对象包括政府部委、办事机构、官方媒体、
重要人物、重要企业、民生社情，情报触须包括政策、公告、讲话、新闻、事件、活动、年报、获奖、通报等综合领域。
是<span class="red">县域政务信息研判的精准风向标</span>。</p>

<p><b>政网哨</b>系统基于中国数据情报公司沃民高科独有的<span class="red">开源情报分析大数据平台</span>，
利用<span class="red">互联网大数据和人心识别 AI 技术</span>，开发了一套<span class="red">网情风险指数</span>，
针对社会风险防控工作面临的巨大挑战，抓住管辖地域局限性和网络无限性矛盾突出的地方痛点，
满足网络管理者在网络中<b>对一些特定突发事件进行风险定性、定量、监管、追踪</b>的需要，<b>对网络情绪走向或舆情事件危机进行提示和预警</b>，
成为县域政务<span class="red">舆情管控的敏锐吹哨人</span>。</p>`
},
{
  "id": 5,
  "title": "小康优选：百佳地标的微电商平台",
  "type": "国家区域品牌特供 百县地标品质优选 十品百县千家万户",
  "extendInfo": "",
  "status": null,
  "isDeleted": 0,
  "content": `
 <p> <b>小康优选</b>是一个集合百佳县域地标农品的<span class="red">综合型微电商城平台</span>。
 <b>小康优选</b>以 “<b>国家区域品牌特供 百县地标品质优选</b>”为定位和愿景，
 通过<b>多渠道服务</b>触达并满足<b>中高端消费群体</b>对<b>高品质农产品</b>的所需，
 致力于为国民打造“<b>健康、营养、精品、便捷</b>”的美食生活方式。</p>

<p><b>小康优选</b>入驻农品均优选来自全国各县域的<span class="red">国家区域公用品牌</span>，
包括中国县域地标发展榜<span class="red">入榜百佳农产品</span>、《小康》联合阿里巴巴推行“百县精品工程”所遴选的百家<span class="red">阿里精品上榜品牌</span>。</p>

<p><b>小康优选</b>融合腾讯直播、视频带货、微信小程序和微商城等<span class="red">多极电商销售端口</span>为一体，开通<span class="red">微商城、优直播、竞拍会</span><b>三大微商销售功能专区</b>、
同频<b>中国县域地标发展榜榜单专区</b>，联动<span class="red">郡县号小视频平台</span>、<span class="red">优选快讯微电台</span>等
两个新媒体流量带货阵地，锁定百佳产品，坚持品质为本。内容带动流量、流量转化销量。</p>

<p><b>小康优选</b>推出”<span class="red">十品百县千家万户</span>”<b>百县地标优选工程</b>。
商城涵盖果品、蔬菜、畜牧、水产、农副、粮油米面、苗木花草、非遗手作、美食小吃、地方特产等 <b>10 个种类</b>。
面向中国地标百佳县市上榜县域，开辟 <b>100 个县域商城</b>，引进 <b>1000 家国家区域品牌</b>地标产品、发展 <b>10000 户经营商户</b>入驻设店。</p>

<p><b>小康优选</b>推出”<span class="red">以购代捐以买代帮</span>”<b>百县消费扶贫工程</b>。
结合国家消费扶贫计划，打通供应链条，铺好销售途径，<b>联合百县消费扶贫专班</b>，动员<b>百万消费扶贫买家</b>，
积极引导消费扶贫基金<b>定向采购和结对特供</b>，有效激励各级机关、国有企事业单位、金融机构、大专院校、城市医疗及养老服务机构等，
在同等条件下优先通过小康优选商城<b>采购贫困地区产品，推动贫困地区农业产品融入全国大市场</b>，
为助力打赢脱贫攻坚战、推进实施乡村振兴战略作出积极贡献。联合，把<b>小康优选</b>打造成为具有一流公信力和相当美誉度的的<span class="red">国家消费扶贫定点执行平台</span>。</p>`
},
{
  "id": 6,
  "title": "圆点直播：政经民生的视频新闻台",
  "type": "以人民为中心 让人民看得见",
  "extendInfo": "",
  "status": null,
  "isDeleted": 0,
  "content": `
  <p><b>圆点直播</b>是记录中国全面小康及中华民族伟大复兴进程、直击中国政经和民生风貌的<span class="red">视频直播平台</span>。</p>

<p><b>圆点直播</b>主要分为政务、科技、财经、文化、体育、读书、旅游、美食、艺术、健康、校园电脑公司共计<b>十多个频道</b>。</p>

<p><b>圆点直播</b>在每年两会期间，特别开设<span class="red">直通两会演播室</span>。
就相关议题对参加全国两会的人大代表、政协委员进行深入专访。<b>圆点直播</b>的<span class="red">原创专访《天下治》</span>是全国首个专门面向县委书记的专访节目，
通过与县委书记对话，探索总结新时代县域全面发展路径。</p>

<p><b>圆点直播</b>年均信息发布条数<b> 30 万 +</b>、年均点击流量<b> 17.5 亿次</b>、评论 <b> 80 万 + </b>和获得转发<b> 50 万 +</b>。
作为新锐媒体，<b>圆点直播</b>在中国新媒体领域拥有<b>巨大的社会影响力</b>和<b>良好的社会美誉度</b>。</p>`
},
{
  "id": 7,
  "title": "卡乐图片：图片视频的作品数据库",
  "type": "寻找天下美好，尽显人间芳华",
  "extendInfo": "",
  "status": null,
  "isDeleted": 0,
  "content": `
  <p><b>卡乐图片网</b>为《小康》旗下<span class="red">原创图片数据库</span>。集成图片和小视频素材，拥有时政人物、
  财经领袖、文化名人、城市县域、论坛活动、专访专题、时尚街拍、创意设计、插画绘画等<b>海量独家资源</b>，同时面向社会征集<b>签约合作摄影师</b>，
  征集图片内容涵盖新闻、创意、旅游、建筑等，严格筛选相片，展现惊艳美图。<b>卡乐图片网</b>运用<b>最新的移动互联网技术</b>，为摄影师提供电脑、手机灵活转换的图片即时上传功能，为用户提供<b>更快捷、更流畅、更精准的搜索体验</b>。</p>

<p><b>卡乐图片网</b>为摄影师、广告等视觉从业者、媒体、企业提供全方位的<span class="red">图片销售、内容策划、编辑整合</span>及<span class="red">视觉技术管理</span>等服务，
多种授权协议，满足复杂场景需求。正版图片授权，权威实名认证，专业作品审查，透明交易流程，<b>全站100 % 版权保证，低于80 % 同类图片库的高性价比售价，原创精品，商用无忧</b>。</p>

<p><b>卡乐图片网</b>正在发展：现已拥有<b> 1亿 + 张</b> 编辑创意图片，<b>300 + 家</b> 全球供应商，<b>2万 + 名</b>签约摄影师，<b>上千家</b>中外客户。
<b>以图片记录和见证小康社会建设进程。寻找不经意间的美好，尽显人间芳华</b>。</p>`
},
{
  "id": 8,
  "title": "郡县云桥：县域新闻的高能驱动器",
  "type": "自助式新闻采集 模块式资讯管控",
  "extendInfo": "",
  "status": null,
  "isDeleted": 0,
  "content": `<p><b>郡县云桥</b>是为县域提供自主式新闻资讯采编服务的数据挖掘系统。包括<b>融媒技术应用、资讯内容采集、新闻发布推广和舆情监管分析</b>等<span class="red">数字技术功能</span>。
  <b>在全网数字内容资讯和县域新闻采编播发需求之间搭建畅通的</b><span class="red">双向供需桥梁</span>。</p>
 
  <p><b>郡县云桥</b>作为中国小康网自主开发的全网新闻资讯采集支持系统，采用<span class="red">全栈式新闻采集解决方案</span>，为中国小康网创建<b>新闻资讯大数据库</b>，面向全国2800多个县域行政单位，开辟<b>县域新闻联播专区</b>，
 实现日均上线县域资讯逾30000条，日均阅读流量逾千万。激活3000万优质读者和影响1.4亿传媒受众，是中国小康网成为“中国县域新闻第一网”的重要技术保障之一。</p>

 <p><b>郡县云桥</b>充分发挥<b>数字挖掘技术</b>和<b>新闻资讯服务</b>优势，协助和辅导<b>县域融媒体中心</b>的创建、运营和获得收益保障，
 提供多类型的<span class="red">新闻大数据应用技术解决方案</span>，协助县域网信融媒机构进行有效<span class="red">舆情分析管控工作</span>，
 郡县云桥系统具有<span class="red">定制式、自助式和模块式的管理后台</span>。可与县域新闻资讯相关数据管理软件<b>全面兼容，没有任何排他性技术壁垒</b>。</p>

<p>作为新闻数据的驱动导航，<b>郡县云桥</b>开发<span class="red">七项应用功能</span>：融媒中心应用激活、全媒生产流程改造、大数据云检索引擎、县域新闻推广助力、即时舆情监播分析、传播力影响力评估、渠道内容综合变现。</p>
<p>作为融媒时代的动力引擎，<b>郡县云桥</b>具备<span class="red">四大核心优势</span>：模块兼容，立足应用，支持定制，实现融媒的全面数字技术；共享数据，集成内容，个性架构，特供资讯的全网资讯集成；全媒发布，实效推送，定向监播，自控舆情的全域精准服务；技术下沉，内容输出，渠道延伸，平台得益的多核收益保障。`
}
];

const Article = ({ title }) => {

  const nowArticle = articles.find(item => item.title.split('：')[1] === title)
  return (
    <div className="pass-article-cotainer">
      <h3 className="title">
        {nowArticle.title}
      </h3>
      <h5 className="subTitle">{nowArticle.type}</h5>
      <div className="content" dangerouslySetInnerHTML={{ __html: nowArticle.content }} />

      {nowArticle.extendInfo ?
        <div className="images">
          {nowArticle.extendInfo.split(',').map((img, key) => (
            <div className="img" key={key}>
              <div className="fujian">附件 {key + 1}</div>
              <img className="img" alt="" src={img} />
            </div>
          ))}
        </div> : null}
    </div>
  );

}

export default Article;