// function execute(url) {
//     const doc = Http.get(url).html();

//     return Response.success({
//         name: doc.select("#info h1").text().split('/')[0],
//         cover: doc.select("#fmimg img").first().attr("src"),
//         author: doc.select("#info p").first().text(),
//         description: doc.select("#intro").text(),
//         detail: doc.select("#info p").text(),
//         host: "https://www.9biquge.com"
//     });
// }

load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);


    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("//")) {
            coverImg = "https:" + coverImg;
        }
        let author = doc.select("#info p").first().text().replace(/作\s*者：/g, "");
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: author,
            description: doc.select("#intro").text(),
            detail: doc.select("#info p").text(),
            host: BASE_URL,
        });
    }
    return null;
}