function attachEvents() {

    const baseUrl = "https://baas.kinvey.com/appdata/kid_rJvDLLlwW/";
    const kinveyUsername = "pesho";
    const kinveyPassword = "p";
    const baseAuth = btoa(kinveyUsername + ":" + kinveyPassword);
    const header = { "Authorization":"Basic " + baseAuth};

    $('#btnLoadPosts').click(loadPosts);


    $('#btnViewPost').click(viewDetailsPosts);

    function loadPosts() {
        let request = {
            url:baseUrl + "posts",
            headers : header
        };
        $.ajax(request).then(displayPosts).catch(displayError);

        function displayPosts(posts) {
            $('#posts').empty();
            for (let post of posts) {
                $('#posts').append($('<option>').text(post.title).val(post._id))
            }
        }
    }
    function viewDetailsPosts() {
        let selectedPostId = $('#posts').val();
        if(!selectedPostId) return;

        let requestPost = $.ajax({
            url: baseUrl + "posts/" + selectedPostId,
            headers : header
        });
        let requestComments = $.ajax({
            url: baseUrl + `comments/?query={"postId":"${selectedPostId}"}` ,
            headers : header
        });


        Promise.all([requestPost, requestComments]).then(displayPostWithComments).catch(displayError);

        function displayPostWithComments([post,comments]) {
            $('#post-title').text(post.title);
            $('#post-body').text(post.body);
            $('#post-comments').empty();

            for (let comment of comments) {
                $('#post-comments').append($('<li>').text(comment.text));
            }
        }
    }

    function displayError(err) {
        let newDiv = $('<div>').text("Error: " + err.status + ' (' + err.statusText + ')').css("font-size", "250%").css("color","red");
        $(document.body).append(newDiv)
    }
}