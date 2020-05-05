import axios from "axios";
import Jsonp from 'jsonp';

const videoTagType = {
  NEWS: "县域联播",
  COLUMN: "县域专栏",
  TRAVELLING: "旅游休闲",
  PRODUCTS: "特色产品",
  ENTERTAINMENT: "文娱热播",
  RANKINGS: "榜单专题",
};

export const getVideos = (param) => (dispatch) => {

  const data = [
    {
      id: 1,
      src: "https://cdn.clgnews.com/video/ax.mp4",
      title: "自然农耕 农人心",
      desc: "新农人 林金塔的茶心",
      time: 1583047607600,
      tagList: ["TRAVELLING"],
    },
    {
      id: 2,
      src: "https://cdn.clgnews.com/video/qz1.mp4",
      title: "南孔圣地 衢州有礼",
      desc: "浙江省衢州市宣传片",
      time: 1583047607600,
      tagList: ["TRAVELLING"],
    },
    {
      id: 3,
      src: "https://cdn.clgnews.com/video/jing.mp4",
      title: "景漂青年的新青花人生",
      desc: "设计师阿阻的故事",
      time: 1583047607600,
      tagList: ["TRAVELLING"],
    },
    {
      id: 4,
      src: "https://cdn.clgnews.com/video/cf.mp4",
      title: "从修摩托车到年售20吨野山菌",
      desc: "曹永利的创业故事",
      time: 1583047607600,
      tagList: ["TRAVELLING"],
    },
  ];

  const { tag, searchText } = param
  let resData = [];

  // 符合标签筛选的数据
  const matchTagData = data.filter(ele => {
    if (tag) {
      return ele.tagList.map(item => videoTagType[item]).includes(tag)
    } else {
      return true
    }
  });

  const matchTextData = data.filter(item => searchText ? item.title.indexOf(searchText) > -1 : true)


  resData = matchTagData
    .filter(item =>
      matchTextData.map(ele => ele.id)
        .includes(item.id)
    )
  // if (!tag && !searchText) { resData = data } else if (searchText) {
  //   resData = data.filter(item => item.title.indexOf(searchText) > -1).filter(ele => {
  //     if (tag) {
  //       console.log(ele.title, ele.tagList.map(e => videoTagType.e))
  //       return ele.tagList.map(e => videoTagType.e).includes[ele.title]
  //     } else {
  //       return true
  //     }
  //   })
  // }

  dispatch({
    type: "GET_VIDEOS",
    payload: [...resData],
  });
  // dispatch(showLoading());
  // axios({
  //   method: "get",
  //   url:
  //     "http://182.92.115.193/jxw/getAllVideo",
  //   data: {
  //     data,
  //   },
  // })
  //   .then((res) => {
  //     dispatch(hideLoading());
  //     console.log(res);
  //     const {
  //       data: { comments = [] },
  //     } = res.data;
  //     console.log(comments);
  //     dispatch({
  //       type: "GET_VIDEOS",
  //       payload: [],
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

// export const getVideos = (data) => (dispatch) => {
//   dispatch(showLoading());
//   Jsonp(
//     'http://182.92.115.193/jxw/getAllVideo',
//     {
//       name: 'getVideos'
//     },
//     function getVideo(err, res) {
//       console.log('gsggsgs')
//       if (err) {

//       } else {
//         console.log(res)
//       }

//     })
// }



export const updateState = (data) => ({
  type: "UPDATE_STATE",
  payload: {
    ...data,
  },
});

export const showLoading = () => ({
  type: "UPDATE_STATE",
  payload: {
    loading: true,
  },
});

export const hideLoading = () => ({
  type: "UPDATE_STATE",
  payload: {
    loading: false,
  },
});
