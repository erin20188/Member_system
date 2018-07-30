/**
 * Created by 麦兜 on 2018/7/16.
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
                    var $liItem=createLi(val);
                    $('#message-list').prepend($liItem);
                    //listen();
                    //transData();
                });
            },
            error:function(xhr){
                alert('失败!'+xhr.status);
            }
        });
    }



})
