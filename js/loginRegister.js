/**
 * Created by 麦兜 on 2018/7/2.
 */
var reLin=$('#'+'reg-link');
var logLin=$('#'+'log-link');
$(function(){
    reLin.on('click',function(){
        $('#'+'newlogin').css('display','none');
        $('#'+'newReg').css('display','flex');
    })
    logLin.on('click',function(){
        $('#'+'newReg').css('display','none');
        $('#'+'newlogin').css('display','flex');
    })
});
