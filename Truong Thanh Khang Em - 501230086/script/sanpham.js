function show(link, p1, p2, p3) {
    var url = 'ChiTiet.html?'
        + 'path=' + link
        + '&p1=' + p1
        + '&p2=' + p2
        + '&p3=' + p3;
    window.open(url,'_self')
}