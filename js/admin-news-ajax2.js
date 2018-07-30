/**
 * Created by 麦兜 on 2018/7/17.
 */
$(function(){
    getMessageList();

    function getMessageList(){
        $.ajax({
            type:"get",
            url:"message.txt",
            success:function(msg){
                var obj=eval("("+msg+")");
                $.each(obj,function(key,val){
                    var $liItem=createShopLi(val);
                    $('#message-list').prepend($liItem);
                    //listen();
                });
            },
            error:function(xhr){
                alert('失败!'+xhr.status);
            }
        });
    }

})
