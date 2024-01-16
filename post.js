let url= new URL(location.href)
console.log(url)

let id=url.searchParams.get('id')

console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(resp=>resp.json())
    .then(posts => {
        for (const post of posts) {

            console.log(post)
            let div=document.createElement('div')
            div.classList.add('title')
            document.body.appendChild(div)

            div.innerText=` ${post.title}`
            let but=document.createElement('button')
            but.classList.add('comments')
            but.innerText=`comments`
            document.body.appendChild(but)
            div.appendChild(but)
            but.onclick=function (){
                location.href=
                    `post-details.html?data=`+ JSON.stringify(post)

            }

        }
    })
