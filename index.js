const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Gerard Nicolas",
        username: "gerardnicolas",
        location: "Marikina, Philippines",
        avatar: "images/avatar-gerard.jpg",
        post: "images/post-gerard.jpg",
        comment: "had an amazing time performing our piece at BR ASIA 2023",
        likes: 777
    }
]

// name
// username
// location
// avatar
// post
// comment
// likes

// Render Posts
const mainEl = document.getElementById("main")
let html = ""
for (let i = 0; i < posts.length; i++) {
    html += `
        <section class="posts">
            <div class="post-title">
                <div class="user-post-avatar">
                    <img src="${posts[i].avatar}" class="avatar">
                </div>
                <div class="user-details">
                    <p class="name" id="name">${posts[i].name}</p>
                    <p class="location" id="location">${posts[i].location}</p>
                </div>
            </div>

            <div class="post-image">
                <img src="${posts[i].post}" alt="Vangogh's Post" class="user-post-image" id="post">
            </div>
        
            <div class="post-icons">
                <img src="images/icon-heart.png" class="icons" id="like">
                <img src="images/icon-comment.png" class="icons" id="comment">
                <img src="images/icon-dm.png" class="icons" id="direct-message">
            </div>

            <p class="post-likes" id="likes">${posts[i].likes} likes</p>

            <div class="post-info">
                <p class="username" id="username">${posts[i].username}</p>
                <p class="caption" id="caption">${posts[i].comment}</p>
            </div>

        </section>
`
}

mainEl.innerHTML = html;