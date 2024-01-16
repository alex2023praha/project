let url= new URL(location.href)
let json=url.searchParams.get('data')
let post=JSON.parse(json)
console.log(post)


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response=>response.json())
    .then(comments=>{
        for (const comment of comments){

            if (post.id === comment.postId)

                console.log(`${comment.body}`)

            let red=document.createElement('div')
            document.body.append(red)
            red.classList.add('red')
            red.innerText=` ${comment.body}  `





        }})

let come=document.createElement('div')
document.body.append(come)
come.classList.add('come')
come.innerText=`PostId: ${post.id}
UserId: ${post.userId}
Title: ${ post.title} 
Body: ${post.body}`

