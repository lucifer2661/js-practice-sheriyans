//koi bhi code js mein line by line chalts hai aur ye natural pattern hota hai ki code line by line chale but kabhi
//kabi asie cases aate hai life mai jaha par aapka code wait krta hai and utni der mein agla code 
//chal jaata hai

console.log("Hello World");
setTimeout(() => {
    console.log("This is setTimeout");
}, 2000);
console.log("This is the end of the code");
//sync aisa code jo line by line chale 
//async aisa code jo line by line na chale aur wait kare kisi event ke hone ka ya kisi condition ke fulfill hone ka
//call back pattern and  call back hell


function kuchhderbaddchalungfa(fnc){
  setTimeout(fnc,Math.floor(Math.random()*1000));
}
kuchhderbaddchalungfa((function(){
  console.log("1");
})); 

//ek function ko agar app ek  aur function de rahe ho parameter mein to
//vo parameter vala function hota hai call back;

function profilelekaraao(username,cb) {
  setTimeout(() => {
    console.log(`profile fetched of ${username}`);
    cb({_id: "123", username, age: 26, email: "onlypain@chutiya.com"});
  }, 
  1000);
}
function saarepostlekaraao(userid,cb) {
  console.log(`fetching posts of ${userid}`);
  setTimeout(() => {
    console.log(`posts fetched of ${userid}`);
    cb({_id: userid, posts: ["hey", "hello", "hi"]});
  }, 1000);
}


profilelekaraao("john",function(data){
  console.log(data);
  saarepostlekaraao(data._id,function(posts){
    console.log(posts);
  })

});
let pr = new Promise(function(res,rej){
  setTimeout(() => {
    let rn = Math.random()*10;
    if(rn>5){
      res("success"+rn);
    } else {
      rej("failure"+rn);
    }
  }, 1000);
});

pr.then(function(val){
  console.log(val);
}).catch(function(val){
  console.log(val);
});