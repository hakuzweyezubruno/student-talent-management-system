// Promise.resolve('hi there !!').then(function(reslo){
//     console.log(reslo);
    
// });
// Promise.reject('New error, what are you trying to do').catch(function(res){
//     console.log(res)
// })
// fetching an api

// fetch('https://jsonplaceholder.typicode.com/postsss').then(function(response){
//     if (response.ok === true ) return response.json();
//     else if(response.ok === false) throw new Error ('Unable to get data !');
// }).then(function(data){
//     console.log(data);
    
// }).catch(function(err){
//     console.error(err);
// });

// async function promise
// and using await keyword that help to return a promise of a fullfiled 

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/postsss');
//  to throw the error message
    if (res.ok === true ) return res.json();
 else if(res.ok === false) throw new Error ('Unable to get data !')

    const data = await res.json();
    console.log(data);   
}
fetchData();
