/**
 * Created by 麦兜 on 2018/6/30.
 */
$(function(){
    $("#username").on('blur',function(){
        valiName();
    });
    $("#password").on('blur',function(){
        valiPassword();
    })
    $('#login-btn').on('click',function(){
        return valiName()&&valiPassword();
    })
})
function valiName(){
    return valiEmpty('username');
}
function valiPassword(){
    return valiEmpty('password');
}
function valiEmpty(eleId){
    //如果该字段为空，提示错误信息
    if($('#'+eleId).val()==''){
        $('#'+eleId).addClass("has-error");
        $('#'+eleId+'-input-check').html("<span class='text-danger'>该字段不能为空！</span>");
        return false;
    }
    else{
        $('#'+eleId).attr("class","has-success");
        $('#'+eleId+'-input-check').html("<span class='.text-success'>✔</span>");
        return true;
    }
}
