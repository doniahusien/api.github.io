let sec= document.querySelector(" .sec1");
let nxtBtn = document.getElementsByClassName("nxt");
let preBtn =document.getElementsByClassName("pre");
let columns="";

//change id
var btnid=0;
let x=()=>{
    btnid +=1;
    console.log(btnid);
    if(btnid>10){
        btnid=0;
    }
const getInfo =(url)=>{
    return new Promise((res)=>{
        fetch(url)
        .then((response)=>{
            res(response.json())
        })
    })
}
const data1= getInfo("https://jsonplaceholder.typicode.com/users")
const data2= getInfo("https://jsonplaceholder.typicode.com/posts")
Promise.all([data1,data2])
.then(data =>{console.log(data)
    let dt1 = data[0];
    let id = dt1[btnid].id;
    let name = dt1[btnid].name;
    let username= dt1[btnid].username;
    let email = dt1[btnid].email;
    let address = dt1[btnid].address.street;
    let phone = dt1[btnid].phone
    var body =""
    var title =""
    let dt2= data[1];
    for(var i=0;i<dt2.length;i++){
        if(dt2[i].userId==id){
            title = title+"\t ..." +dt2[i].title;
            body= body+" \n ..... "+dt2[i].body;
        }
    }
    columns=`
        <div class="user">
              <h2>user</h2>
              <p><span>name : </span>${name}</p>
              <p><span>email : </span>${email}</p>
              <p><span>address : </span>${address}</p>
              <p><span>phone : </span>${phone}</p>
            </div>
            <div class="posts">
                <h2>posts</h2>
                <p><span>title : </span>${title}</p>
                <p><span>body : </span>${body}</p>
            </div>`
            sec.innerHTML=columns;
        }        
        
)
.catch(err => console.log(err))
}
let y=()=>{
    btnid -=1;
    console.log(btnid);
    if(btnid==10){
        btnid=0;
    }
const getInfo =(url)=>{
    return new Promise((res)=>{
        fetch(url)
        .then((response)=>{
            res(response.json())
        })
    })
}
const data1= getInfo("https://jsonplaceholder.typicode.com/users")
const data2= getInfo("https://jsonplaceholder.typicode.com/posts")
Promise.all([data1,data2])
.then(data =>{console.log(data)
    let dt1 = data[0];
    let id = dt1[btnid].id;
    let name = dt1[btnid].name;
    let username= dt1[btnid].username;
    let email = dt1[btnid].email;
    let address = dt1[btnid].address.street;
    let phone = dt1[btnid].phone
    var body =""
    var title =""
    let dt2= data[1];
    for(var i=0;i<dt2.length;i++){
        if(dt2[i].userId==id){
            title = title+"\t ..." +dt2[i].title;
            body= body+" \n ..... "+dt2[i].body;
        }
    }
    columns=`
        <div class="user">
              <h2>user</h2>
              <p><span>name : </span>${name}</p>
              <p><span>email : </span>${email}</p>
              <p><span>address : </span>${address}</p>
              <p><span>phone : </span>${phone}</p>
            </div>
            <div class="posts">
                <h2>posts</h2>
                <p><span>title : </span>${title}</p>
                <p><span>body : </span>${body}</p>
            </div>`
            sec.innerHTML=columns;
        }        
        
)
.catch(err => console.log(err))
}

