function execute(url) {
    url = url.replace('m.youyoukanshu.com', 'www.youyoukanshu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let author =  doc.select('meta[property="og:novel:author"]').attr("content");
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select(".bookintro").html();
        let title = doc.select('meta[property="og:novel:book_name"]').attr("content");
        let status = doc.select('meta[property="og:novel:status"]').attr("content");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
        let category = doc.select('meta[property="og:novel:category"]').attr("content");
        let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "");

        return Response.success({
            name: title,
            cover: coverImg,
            author: author,
            description: "Thể loại: " + category + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime + '<br>' + descriptionMeta,
            detail: "Tác giả: " + author,
            host: "https://www.youyoukanshu.com"
        });
    }
    return null;
}