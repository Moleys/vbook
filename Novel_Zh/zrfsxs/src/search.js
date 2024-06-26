    function execute(key) {
        const doc = fetch('https://www.zrfsxs.com/tag/?key='+key).html();
        const el = doc.select(".container .item")
        const data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h3").first().text(),
                link: "https://www.zrfsxs.com" + e.select("h3 a").first().attr("href"),
                cover:e.select(".item img").first().attr("src"),
                description: e.select("div > p:nth-child(3)").first().text(),
                host: "https://www.zrfsxs.com"
            })
        }
        return Response.success(data)
    }