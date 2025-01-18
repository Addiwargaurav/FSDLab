function createprofil(obj,arr)
{
    let{name,age}=obj;
    let [int1,int2,...res]=arr;
    return new oj=bject({name:name,age:age,primary:int1,seconday:int2});
}
let obj={name:"gaurav",age:20,id:"342"};
let arr = ["des","li/ox","blockchain"];
console.log(createprofile(obj,arr));
