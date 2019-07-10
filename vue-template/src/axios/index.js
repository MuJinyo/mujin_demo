import axios from 'axios'
// import {base64, md5,Toast} from 'vux'
import qs from 'qs'

axios.defaults.timeout = 5000
// axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.headers.common['X-Channel'] = 'APP-WANDA-2-1.0-E093E0D9-EE6F-40F0-85B0-7C49DCD94FC2'
// axios.defaults.headers.common['X-User'] = 'NO'
axios.defaults.baseURL = '/DatumManage/'

axios.interceptors.response.use(res => {
  if (res.status !== 200) {
    return Promise.reject(res)
  } else {
    if (res.data.errorCode === '0') {
      return res.data
    } else {
      // return Promise.reject(res.data.message)
      alert(res.data.message)
    }
  }
}, error => Promise.reject(error))

function objToUrl(obj) {
  let str = '?'
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (let key in obj) {
      if (key && obj.hasOwnProperty(key)) {
        str += `${key}=${obj[key]}&`
        objToUrl(obj[key])
      }
    }
  }
  return str
}

// export function fetchPost (url, params){
//   let str = objToUrl(params)
//   // let str = qs.stringify(params)
//   return new Promise((resolve, reject) => {
//     axios.post(url+str)
//       .then(response => {
//         resolve(response.data)
//       })
//       .catch(error => {
//         reject(error)
//       })
//   })
// }
  // 特殊处理
// export function fetchPost2 (url, params){
//   return new Promise((resolve, reject) => {
//     let urlPath = '/' + url
//     let xhr = new window.XMLHttpRequest()
//     xhr.open('POST', '/api/mnyx/'+url, true)
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//     if(window.sessionStorage.getItem('setUserInfo')){
//       let userInfo = JSON.parse(window.sessionStorage.getItem('setUserInfo'))
//       xhr.setRequestHeader('Authentication', base64.encode(userInfo.token+'&'+new Date().getTime()+'&'+md5(userInfo.token+urlPath+new Date().getTime())))
//       xhr.setRequestHeader('X-User', userInfo.id)
//     }
//     xhr.setRequestHeader('X-Channel', 'APP-WANDA-2-1.0-E093E0D9-EE6F-40F0-85B0-7C49DCD94FC2')
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
//             resolve(JSON.parse(xhr.responseText))
//         }else{
//             // reject(error)
//         }
//     }
//     xhr.send(params)
//   })
// }

export function fetchPost (url, params) {
  params = qs.stringify(params)
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params})
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
    })
  })
}

export function fetchPut (url, params) {
  let str = objToUrl(params)
  return new Promise((resolve, reject) => {
    axios.put(url + str)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// export function setAuth (urlPath){
//   let userInfo = {}
//   console.log(urlPath)
//   if(window.sessionStorage.getItem('setUserInfo')){
//     let timestamp = new Date().getTime()
//     userInfo = JSON.parse(window.sessionStorage.getItem('setUserInfo'))
//     axios.defaults.headers.common['Authentication'] = base64.encode(userInfo.token+'&'+timestamp+'&'+md5(userInfo.token+urlPath+timestamp))
//     axios.defaults.headers.common['X-User'] = userInfo.id
//   }
//   return this
// }
