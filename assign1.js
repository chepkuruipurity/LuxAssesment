let profile = {
    name:"Purity Chepkurui",
    county:"Kericho",
    city:"Kericho",
    phoneNumber:"0700000000",
    age: (bornDate)=>{Math.floor((new Date()- new Date(bornDate).getTime())/(365.25*24*60*60*1000))}
};

let frameworks = ['Vue','React','Angular'];

var names = ["Alex"," Micky",2,true]                                                                                 
console.log(names instanceof String)//false                                                                                                                       
console.log(names instanceof Number) //false                                                                                  
console.log(names instanceof Object) //true                                                                                    
console.log(names instanceof Array)  //true      

function Add(){
    console.log(answer);
    var answer=2;
    
};
Add(); //returns undefined

const addAndPrint=(a,b)=>{
    let sum= a+b;
    console.log(`The sum is ${sum}`);
}
const ans= addAndPrint(4,5)

//window.location.replace("http://www.luxtechAcademy.com");

let map = new WeakMap();
let object= {};
map.set(object,"Well")

let uru= {age:20};
map.set(uru,'...')
uru= null; //completely overwrites uru and deletes it

function Stack(){
    let items=[];
    this.push=  (element)=>{
        items.push(element);
    }
    this.pop= ()=>{
        return items.pop();
    }
};

const simpifyPath=(path)=>{
    let arr=[];
    let pathArr= path.split('/');
    for(let i of pathArr){
        if(i===''|| i==='.')
         {continue}
        else if(i==='..'){
            arr.pop();
        } else {
          arr.push(i);
        }
    }
    return '/'+ arr.join('/');
}

for(let year=2014; year<=2050; year++){
    let day= new Date(year,0,1);
    if(day.getDay()===0){
        console.log(year);
    }
}


let div= document.getElementById('inner');
console.log(div.innerHTML);
console.log(div.innerText);

//create cookie
document.cookie= "userId=purples; expires= Fri, 23 Oct 2020 12:00:00 UTC; path=/user;domain:mypath.com"
//delete cookie
document.cookie= "userId=;expires= Fri, 23 Oct 2010 12:00:00 UTC; "