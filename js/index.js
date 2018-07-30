/**
 * Created by 麦兜 on 2018/7/12.
 */
window.onload=function ()
{
    var oDiv=document.getElementById('slider');
    var aBtn=oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var oUl=oDiv.getElementsByTagName('ul')[0];

    var now=0;

    for(var i=0;i<aBtn.length;i++)
    {
        aBtn[i].index=i;
        aBtn[i].onclick=function ()
        {
            now=this.index;

            tab();
        };
    }

    function tab()
    {
        for(var i=0;i<aBtn.length;i++)
        {
            aBtn[i].className='';
        }
        aBtn[now].className='active';
        startMove(oUl, {top: -309*now});
    }

    function next()
    {
        now++;
        if(now==aBtn.length)
        {
            now=0;
        }
        tab();
    }

    var timer=setInterval(next, 4500);

    oDiv.onmouseover=function ()
    {
        clearInterval(timer);
    };

    oDiv.onmouseout=function ()
    {
        timer=setInterval(next, 4500);
    };
};
//跳转至商家详情页
function ulrHtml(name) {
    var toUrl = "merchantdetail?compName="+name;
    //var toUrl = "info-member.html?compName =" +name;
    window.open(toUrl);
}

