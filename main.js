const tweeter = TweeterModule()
const renderer = RendererModule()
let posts = tweeter.getPosts()
$(".post").remove();

renderer.renderPosts(posts)

const post = function(x) {
    let relevantInputValue = $("div").closest("#container").find("#input").val()
    $("div").closest("#container").find("#input").val("")
    if (relevantInputValue) {
        tweeter.addPost(relevantInputValue)


    }
    $(".post").remove();

    posts = tweeter.getPosts()

    renderer.renderPosts(posts)
}

// deleteComment()

const deleteComment = function(x) {
    let remIDcmt = x.attr('id')

    let remIDpst = $(x).closest(".post").attr('id')
    posts = tweeter.removeComment(remIDpst, remIDcmt)

    $(".post").remove();

    renderer.renderPosts(posts)

}

const delete1 = function(x) {
    let remID = $(x).closest(".post").attr('id')

    posts = tweeter.removePost(remID)

    $(".post").remove();

    renderer.renderPosts(posts)

}
const addCMT = function(x) {

    let addIDpst = $(x).closest(".post").attr('id')
    let addTXT = $(x).closest(".post").find("#inCmt").val()
    if (addTXT) {
        posts = tweeter.addComment(addTXT, addIDpst)

        console.log(posts)
        $(".post").remove();

        renderer.renderPosts(posts)
    }

}

const createBTNdel = function(x) {
    renderer.renderComment(x, posts)
}