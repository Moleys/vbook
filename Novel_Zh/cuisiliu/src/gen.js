load('config.js');
function execute(url, page) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(BASE_URL + url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select("tbody tr").forEach(e => {
            if (e.select("a").first().text() !== null && e.select("a").first().text() !== '') {
                data.push({
                    name: e.select("td a").first().text(),
                    link: BASE_URL + e.select("td a").first().attr("href"),
                    description: e.select("td a").get(1).text(),
                    host: BASE_URL
                })
            }
        });
        return Response.success(data)
    }
    return null;
}