

const fetchAPI = (url='', method='GET',body={}) =>{
    return fetch(url, {
        method: method,
        body: JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
      }).catch(function(e) {
        console.log('Exception', e)
      })
}

export default fetchAPI;