/**
 * Created by 麦兜 on 2018/7/16.
 */

    //会员消息
    function createLi(obj){
        var $liItem=$("<div class=\"block\">\n"+
        "<form action=\"abcServelet\" method=\"post\">\n"+
        "<div class=\"header-img\">\n"+
        "<img src=\"img/boy.jpeg\" alt=\"头像\"/>\n"+
        "</div>\n"+
        "<div class=\"name-box\">\n"+
        "<input type=\"text\" class=\"name-data\"/>\n"+
        "<span class=\"name\" name=\"nickname\">"+obj.nickname+"</span>\n"+
        "<span class=\"time\">"+obj.time+"</span>\n"+
        "</div>\n"+
        "<div class=\"content\">\n"+
        ""+obj.advice+""+
        "</div>\n"+
        "<div class=\"reply clearfix\">\n"+
        "<a href=\"#\" class=\"reply-link\" onclick=\"listen('" + obj.nickname + "');\">\n"+
        "<span>回复 </span><i class=\"icon-comment-alt\"></i>\n"+
        "</a>\n"+
        "</div>\n"+
        "<div class=\"reply-input\">\n"+
        "<textarea id=\"reply-content\" name=\"reply-content\"></textarea>\n"+
        "<button class=\"comment-btn btn btn-primary\" type=\"submit\">评论</button>\n"+
         "</div></form>\n"+
        "</div>");
        return $liItem;
    }
//商家消息
function createShopLi(obj){
    var $liItem=$("<div class=\"block\">\n"+
    "<form action=\"abcServelet\" method=\"post\">\n"+
    "<div class=\"header-img\">\n"+
    "<img src=\"img/info-shop.jpg\" alt=\"头像\"/>\n"+
    "</div>\n"+
    "<div class=\"name-box\">\n"+
    "<input type=\"text\" class=\"name-data\"/>\n"+
    "<span class=\"name\" name=\"nickname\">"+obj.compname+"</span>\n"+
    "<span class=\"time\">"+obj.date+"</span>\n"+
    "</div>\n"+
    "<div class=\"content\">\n"+
    ""+obj.review+""+
    "</div>\n"+
    "<div class=\"reply clearfix\">\n"+
    "<a href=\"#\" class=\"reply-link\" onclick=\"listen('" + obj.compname + "');\">\n"+
    "<span>回复 </span><i class=\"icon-comment-alt\"></i>\n"+
    "</a>\n"+
    "</div>\n"+
    "<div class=\"reply-input\">\n"+
    "<textarea id=\"reply-content\" name=\"reply-content\"></textarea>\n"+
    "<button class=\"comment-btn btn btn-primary\" type=\"submit\">评论</button>\n"+
    "</div></form>\n"+
    "</div>");
    return $liItem;
}

function listen(val) {
        var oReply=document.getElementsByClassName('reply-link');
        var oInput=document.getElementsByClassName('reply-input');
        var oBtn=document.getElementsByClassName('comment-btn');

        var oInputData=document.getElementsByClassName('name-data');

        var now = 0;

        for (var i = 0; i < oReply.length; i++) {
            console.log('oReply的数量：'+ oReply.length);
            oReply[i].index = i;
            oReply[i].onclick = function () {
                now = this.index;
                console.log('第'+now+'个回复键被点击');
                //oInput[now].toggle();
                tab();



                oBtn[now].onclick=function(){
                    console.log('第'+now+'个评论键被点击');
                    var a=setTimeout(back,1000);
                    console.log('成功');
                }
            };
        }
        function tab(){
            oInputData[now].setAttribute('value',val);
            oInput[now].style.display='block';
        }
        function back(){
            oInput[now].style.display='none';
        }
    }

//function transData(val){
//    //回复评论传输名字
//    console.log('进入transData()');
//    var oInputData=document.getElementsByClassName('name-data');
//    var now=0;
//    console.log('oInputData的长度'+oInputData.length);
//    for (var i = 0; i < oInputData.length; i++) {
//        console.log('进入transData的循环');
//        oInputData[i].index = i;
//        //oInputData[i].onclick = function () {
//        //    now = this.index;
//        //    console.log('第'+now+'个回复键被点击');
//        //    //oInput[now].toggle();
//        //    tab();
//        //};
//        oInputData[i].setAttribute('value',val);
//        console.log('赋值');
//    }
//}
