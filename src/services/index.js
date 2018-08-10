

const fetchAPI = (url='', method='GET',body={}) =>{
    console.log('aaaaaaaa',url);
    
    return fetch(url, {
        method: method,
    })
    .then(function(response) {
        console.log('response', response);
        if(response.ok){
            return response.json();
        }
        throw new Error('Network response was not ok.');
      }).catch(function(e) {
        console.log('Exception Service/index.js', e)
        throw new Error('Network response was not ok.');
      })
}

export default fetchAPI;