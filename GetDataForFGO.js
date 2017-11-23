/**
 * Created by Dias on 2017/11/11.
 */
var result = [];
a= $("tr").filter( function(){ return $(this).css("display") != 'none' });

a.each(function(index,element){
    var id =  $($(element).find("td")[1]).text();
    var rare = $(element).find("td.star").text().length;
    var imgsrc = $(element).find("img").attr("src") ;;
    var name = $(element).find("a img").attr("title") ;
    var servant_class = $(element).find("img.itemS").attr("title") ;

    var tmp={
        "id":id,
        "rare":rare,
        "servant-class":servant_class,
        "img":"http://kazemai.github.io/fgo-vz/"+imgsrc,
        "name":name
    };
    result.push(tmp);
});
//網站 第一個tr是thead
delete result[0];