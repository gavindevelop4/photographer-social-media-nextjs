import request from './request';

const httpUtils = {
  get(url:string, params?: any, config?: any) {
    url += this._queryString(params)
    return request.get(url, config)
  },

  post(url:string, params: any, data: any, config: any) {
    url += this._queryString(params)
    return request.post(url, data, config)
  },

  _queryString(obj: Object) {
    let queryString = ''
    if (obj) {
      Object.entries(obj).forEach(([key, value]: [string, any]) => {
        if (queryString.length > 0) {
          queryString = '&' + queryString
        }

        queryString += `${key}=${value}`
      })
    }

    if (queryString.length > 0) {
      queryString = '?' + queryString
    }
    return queryString
  },
}

export default httpUtils;