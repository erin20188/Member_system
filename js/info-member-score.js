$(function(){
    //$(".btn-gift").on("click", function() {
        // 调用 mask，遮盖全
        //$('#alertT').css('display','block');
        //$('#alertF').css('display','block');
        if($("#alertT").length>0){
            console.log('T存在');
            showPop('alertT');
        }else{
            console.log('T不存在');
            showPop('alertF');
        }
    //});
});

//屏蔽输入，显示蒙板
function showMask(id) {
    var obj = document.getElementById(id);
    obj.style.width = document.body.clientWidth;
    obj.style.height = document.body.scrollHeight;
    obj.style.display = "block";
}
//隐藏蒙板
function hideMask(id) {
    document.getElementById(id).style.display = "none";
}
//显示弹出框
function showPop(id) {
    showMask('mask');
    var width = 300;  //弹出框的宽度
    var height = 200;  //弹出框的高度
    var obj = document.getElementById(id);
    obj.style.display = "block";
    obj.style.position = "absolute";
    obj.style.zindex = "10";
    obj.style.overflow = "hidden";
    obj.style.width = width + "px";
    obj.style.height = height + "px";
}
//隐含
function jump() {
    //hideMask('mask');
    //document.getElementById(id).style.display = "none";
    window.location.href='info-member-score.jsp';
}
