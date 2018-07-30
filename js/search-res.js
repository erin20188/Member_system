/**
 * Created by 麦兜 on 2018/7/7.
 */
$(function(){
    getfoodList();
//需要完善后台传入page页
//    搜索框所得页
    function getfoodList(){
        $.ajax({
            type:"get",
            url:"b.txt",
            success:function(msg){
                var obj=eval("("+msg+")");
                console.log(obj);
                if(obj.length==0){
                    console.log('err');
                    var $notF=notFound();
                    $('#shop-list').append($notF);
                    return;
                }
                $.each(obj,function(key,val){
                    var $liItem=createLi(val);
                    $('#shop-list').append($liItem);
                });
            },
            error:function(xhr){
                alert('失败!'+xhr.status);
            }
        });
    }
});

function notFound(){
    var $notF=$("<li class=\"shop-item row clearfix\">\n"+
    "    <div class=\"col-sm-4\">\n"+
    "        <a href=\"#\"><img src=\"img/notfind.jpg\" alt=\"商家图片\"/></a>\n"+
    "     </div>\n"+
    "    <div class=\"col-sm-8\">\n"+
    "        <div class=\"wranning\">\n"+
    "        小主，很抱歉，没能找到您搜索的内容"+
"           </div>\n"+
"           <div class=\"ex\">\n "+
    "                建议小主：<br/> 1. 检查关键词填写是否有误 <br/> 2. 请尽量使用简洁的关键字 <br/>"+
"            </div>\n"+
    "        </div>\n"+
    "</li>");
    return $notF;
}

