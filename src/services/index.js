

const fetchAPI = (url='', method='GET',body={}) =>{
    console.log('aaaaaaaa',url);
    
    return fetch(url, {
        method: method,
    })
    .then(function(response) {
        return response.json()
      }).catch(function(e) {
        console.log('Exception', e)
      })
}

export default fetchAPI;