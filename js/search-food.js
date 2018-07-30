/**
 * Created by 麦兜 on 2018/7/6.
 */

$(function(){
    //var oImg=document.querySelector('img');
    getfoodList();
//需要完善后台传入page页
    function getfoodList(){
        $.ajax({
            type:"get",
            url:"a.txt",

            //async:true,
            //dataType:'jsonp',
            //jsonp:'callback',

            success:function(msg){
                //var obj=JSON.parse(res);
                var obj=eval("("+msg+")");
                $.each(obj,function(key,val){
                    var $liItem=createLi(val);
                    $('#shop-list').append($liItem);
                    //oImg.setAttribute("src",obj.image);
                });
            },
            error:function(xhr){
                alert('失败!'+xhr.status);
            }
        });
    }
});

