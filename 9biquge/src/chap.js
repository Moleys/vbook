load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);



    // url = url.replace(BASE_URL);
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("#content").html();
        htm = htm.replace(/\&nbsp;/g, "");
        return Response.success(htm);
    }
    return null;
}
    // //clear rác
    // function clean(htm) {
    //     htm = htm.replace(/(<br>\s*){2,}/g, '<br>');
    //     htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '');
    //     htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    //     htm = htm.replace(/<!--(<br \/>)?[^>]*-->/gm, '');
    //     return htm;
    // }