function test(callback){
    fetch('https://api.github.com/zen')
    .then(response => response.text())
    .then(text => callback(text))
    .catch(error => console.error('error ha catch work kar ra ha', error))
    callback("data nahi aaya");
}
function hi(){
test(function(data){
    document.getElementById('p').innerHTML = data;
    console.log("api data")
    
})}
hi();