/**
 * Created by 麦兜 on 2018/7/17.
 */
$(function(){
    getNewsList();

    function getNewsList(){
        $.ajax({
            type:"get",
            url:"message.txt",
            success:function(msg){
                var obj=eval("("+msg+")");
                $.each(obj,function(key,val){
                    var $liItem=createLi(val);
                    $('#news-list').prepend($liItem);
                });
            },
            error:function(xhr){
                alert('失败!'+xhr.status);
            }
        });
    }

    function createLi(obj){
        var $liItem=$("<div class=\"block\">\n"+
            "<div class=\"header-img\">\n"+
            "<img src=\"img/admin2-face.jpg\" alt=\"管理员头像\">\n"+
            "</div>\n"+
            "<div class=\"name-box\">\n"+
            "<span class=\"name\">管理员-"+obj.username+"</span>\n"+
            "<span class=\"time\">"+obj.replytime+"</span>\n"+
            "</div>\n"+
            "<div class=\"content\">"+obj.replymember+"</div>\n"+
            "</div>");
        return $liItem;
    }

})
