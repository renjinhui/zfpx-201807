export const add = (state,obj)=>{
  state.count += obj;
};

//修改 banner数据
export const  changeBannerData = (state,obj)=>{
  console.log(obj);
  state.bannerData = obj;
};
