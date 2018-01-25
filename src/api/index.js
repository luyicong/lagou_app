import axios from 'axios'

// const baseUrl = 'http://blog.yoho167.com/api'

export default {
  getIndexPositionList(pageNo=1,pageSize=20) {
    return axios.get(`/api/listmore.json?pageNo=${pageNo}&pageSize=${pageSize}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  }
}
