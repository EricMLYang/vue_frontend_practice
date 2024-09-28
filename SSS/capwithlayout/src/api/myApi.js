import axios from 'axios'

// 當有實際的 FastAPI 時, 可以直接呼叫
const AppApi = axios.create({ baseURL: import.meta.env.VITE_APP_API })  

// 當沒有API時, 可以自己搞個假的來呼叫
// 當頁面流程需要先確定的時候  這個物件就是 Web Api 的接口參考
const fakeDb = [
    { 
        delaysec: 3, 
        url: '/demo/dept', 
        httpMethod: 'get',
        input: null,
        output: [ { id: 1, name: 'ADTED1'}, { id: 2, name: 'ADTED2' } ] 
    },
    { 
        delaysec: 5, 
        url: '/demo/dept/users', 
        httpMethod: 'post',
        input: { id: 2, name: 'ADTED2' },
        output: [
            { org: 'ADTED1', users: [ {id: '1107308', name: 'rex'}, {id: 'ddd234', name: 'eric'} ] },
            { org: 'ADTED2', users: [ {id: '3333333', name: 'vic'}, {id: 'charli', name: 'charli'} ] }
        ]
    }
]
const getFackValue = function (httpMethod, url) {
    return fakeDb.find(item => item.url === url && item.httpMethod == httpMethod)
}
const fakeAction = function (method, url, args) {
    const myData = getFackValue(method, url)
    console.log(`[FakeApi] = [${method}]${url}`)
    console.log(`in:`, args)

    if (typeof myData === 'undefined') {
        console.error('API 接口錯誤, 請確認 API in')
    }
    // 簡化 axios output 格式    
    const axiosOutputFormat = {
        data: myData.output
    }
    console.log('out:', axiosOutputFormat)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(axiosOutputFormat)
        }, myData.delaysec * 1000);
    })
}
const FakeApi = {
    get(url, args) { return fakeAction('get', url, args) },
    post(url, args) { return fakeAction('post', url, args) }
} 

export default FakeApi

// 當有實際API可以呼叫時 把 export default FakeApi 註解掉 切換到 AppApi 
// export default AppApi
