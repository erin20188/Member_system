/**
 * Created by 麦兜 on 2018/7/7.
 */
$(function(){
    getfoodList();
//需要完善后台传入page页
//
    function getfoodList(){
        $.ajax({
            type:"get",
            url:"a.txt",
            success:function(msg){
                var obj=eval("("+msg+")");
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
