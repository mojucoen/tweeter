let postID
let cmtID
const RendererModule = function() {
    const renderPosts = function(posts) {
        $(".post").remove();


        for (let post of posts) {

            $("#posts").append(`<div  id ="${post.id}" class="post"> ${post.text} </div>`)


            for (let comnt of post.comments) {
                $(`#${post.id}`).append(`<div id=${comnt.id} class="comments" onclick="createBTNdel($(this))"> ${comnt.text} </div>`)
                    // $(`#${post.id}`).append(`<button id=${comnt.id}  class="delete-comment" onclick="deleteComment($(this))"> delete comment </div>`)

                // console.log(post)


            }
            $(`#${post.id}`).append(`<input  id="inCmt"  class="input" type="text"  placeholder="add comment here">  </div>`)
            $(`#${post.id}`).append(`<button id="addCMT"  class="add-comment" onclick="addCMT($(this))" > add new comment </div>`)

            $(`#${post.id}`).append(`<button  id="delPST" class="delete"  onclick="delete1($(this))"> delete post </div>`)


        }


    }

    const renderComment = function(x, posts) {
        $(".delete-comment").remove();

        for (let post of posts) {

            for (let comnt of post.comments) {
                let i = x.attr('id')

                if (comnt.id === i) {

                    $(`#${i}`).append(`<button id=${comnt.id}  class="delete-comment" onclick="deleteComment($(this))"> delete comment </div>`)

                }

            }
        }
    }
    return { renderPosts, renderComment }
}