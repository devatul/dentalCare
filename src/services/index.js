

const fetchAPI = (url='',queryParams={}, method='GET',body={}) =>{
    let query = ''
    for(var key in queryParams){
        query+= key+'='+queryParams[key];
    }
    if(query !== ''){
        url = url + '?'+query;

    }
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