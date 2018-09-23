import axios from 'axios'
// export const addFn = (context,obj)=>{
//   context.commit('add',obj)
// };
export const addFn = ({commit},obj)=>{
  commit('add',obj)
};

// 这个方法是 获取banner数据的
export const getBannerData = ({commit},obj) =>{
  axios.get('/bannerlist').then((data)=>{
    this.arr = data.data;
    console.log(data.data);
    commit('changeBannerData',data.data)
    // commit 是触发 mutations中的方法 ；通过mutations中的方法修改state中的数据
  })
};
