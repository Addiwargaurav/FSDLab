function createprofile(obj)
{
    let newoobj={};
    const{name,email}=obj;
    newoobj.name=name;
    newoobj.email=email;
    return newoobj;
}
let p={name:"AGR",age:20,email:"@email"};
console.log(createprofile(p));