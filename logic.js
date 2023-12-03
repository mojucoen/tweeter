let POSTiD = 3
let COMENTiD = 7

const TweeterModule = function() {


    let posts = [{
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    const addPost = function(post) {

        posts.push({ "text": post, "id": "p" + POSTiD, "comments": [] })
        POSTiD++
        return posts
    }
    const getPosts = function() {


        return posts


    }
    const removePost = function(IDPOST) {
        // console.log(IDPOST)
        let len = posts.length
            // console.log(len)

        let index = posts.findIndex(obj => obj.id === IDPOST);
        if (index !== -1) {
            posts.splice(index, 1);

        }

        return getPosts()
    }
    const addComment = function(COMNT, IDPOST) {
        for (let len of posts) {
            let NEWCMT = len.comments
            if (len.id === IDPOST) {
                NEWCMT.push({ "id": "c" + COMENTiD, "text": COMNT })
                COMENTiD++

            }

        }
        return getPosts()
    }
    const removeComment = function(IDPOST, IDCMT) {
        for (let LENpST in posts) {
            let NEWCMT = posts[LENpST].comments
            if (posts[LENpST].id === IDPOST) {
                for (let LENcMT in NEWCMT) {
                    if (NEWCMT[LENcMT].id === IDCMT) {
                        posts[LENpST].comments.splice(LENcMT, 1)

                    }


                }
            }
        }

        return getPosts()
    }


    return {
        addPost,
        getPosts,
        removePost,
        addComment,
        removeComment,

    }
}