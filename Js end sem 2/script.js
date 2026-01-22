function test(callback){
    fetch('api')
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.error('error ha catch work kar ra ha', error))
}
test(function(data){
    console.log("api data")
})