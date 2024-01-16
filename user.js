let url=new URL(location.href)
let json=url.searchParams.get('data')
let user=JSON.parse(json)
console.log(user)
let div=document.createElement('div')
div.classList.add('target')
document.body.appendChild(div)
div.innerText=`${`id: ` + user.id}
 ${`Name: ` + user.name + `.`}    ${`  Username: ` + user.username +`.`}
 ${`Email: `+ user.email +`.`}  ${` Phone: ` + user.phone +`.`} ${`  Website: ` + user.website}
 ${`Company: `+ user.company.name+`.`} ${` Catch phrase: ` + user.company.catchPhrase+`.`} ${` Bs: ` + user.company.bs+`.`}
 ${`Suite: ` + user.address.suite+`.`} ${` Street: ` + user.address.street+`.`} ${` City: ` + user.address.city+`.`} ${` Zipcode: ` + user.address.zipcode+`.`}
 ${`lat: ` + user.address.geo.lat} ${`lng: ` + user.address.geo.lng}
`



let div1=document.createElement('div')
div1.classList.add('target1')
document.body.appendChild(div1)



let but = document.createElement('button')
document.body.appendChild(but)
div1.appendChild(but)
but.classList.add('pos')
but.innerText=' posts of current user'





but.onclick=function (){

    location.href=`post.html?id=${user.id}`

}

