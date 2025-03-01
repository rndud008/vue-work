
import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem, fetchList } from "@/api";

export default {
  // PROMISE..
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       context.commit('SET_NEWS',response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // ASYNC
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS',response.data)

    return response;
    
  },
  async FETCH_ASK({commit}){
    const {data} = await fetchAskList();
    commit('SET_ASK', data)
    return data

    // return fetchAskList()
    // .then(({data}) =>{
    //   commit('SET_ASK', data)
    // })
    // .catch((error) =>{
    //   console.log(error)
    // })

  },
  async FETCH_JOBS(context){

    const {data} = await fetchJobsList()
    context.commit('SET_JOBS', data)
    return data

    // return fetchJobsList()
    // .then((response) =>{
    //   context.commit('SET_JOBS',response.data)
    // })
    // .catch((error) =>{
    //   console.log(error)
    // })
  },
  async FETCH_USER({commit}, username){
    const {data} = await fetchUserInfo(username)
    commit('SET_USER',data)
    return data;

    // return fetchUserInfo(username)
    // .then(({data})=>{
    //   commit('SET_USER',data)
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
  },
  async FETCH_Item({commit},itemId){
    const {data} = await fetchCommentItem(itemId);
    commit('SET_ITEM',data)

    return data
    // return fetchCommentItem(itemId)
    // .then(({data})=>{
    //   commit('SET_ITEM',data)
    // })
    // .catch((error) =>{
    //   console.log(error)
    // })
  },
  START_SPINNER({commit}, data){
    return commit('SET_LOADING',data)
  },
  END_SPINNER({commit},data){
    return commit('SET_LOADING',data)
  },
  async FETCH_LIST({commit}, pageName){

    const {data} = await fetchList(pageName)
    commit('SET_LIST', data)

    return data
    
    // return fetchList(pageName)
    // .then(({data}) =>{
    //   commit('SET_LIST', data)
    // })
    // .catch((error)=> console.log(error))
  }
}