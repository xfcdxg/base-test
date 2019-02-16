if (!window.entryUrl) {
  window.entryUrl = window.location.href.split('#')[0]
}
var isIOS = function () {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}



﻿var _wx = {
    init: function (shareInfo) {
        var t = this;
        t.defCharArray = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        //t.oid = oid;
        //Customer
        t.link  = shareInfo.url;
        t.title = shareInfo.title;
        t.desc  = shareInfo.content;
        t.icon  = shareInfo.icon;
        //酷屏
        t.appId = 'wx307d043f09838876';
        //众屏   wx42bd6a70aecfecb4
        //菠萝觅 wx9e9ffc8d064dd58c
        t.initWeixin();
    },
    getTimeStamp: function () {
        return Math.floor(Date.now() / 1000);
    },

    getCurPageUrl: function () {
        return isIOS() ? window.entryUrl : location.href.split('#')[0]
    },
    randomString:function(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))]
        }
        return result;
    },
    initWeixin: function () {

        var t      = this,
            link   = t.link,
            icon   = t.icon,
            title  = t.title,
            desc   = t.desc,
            appId  = t.appId,
            ts     = t.getTimeStamp(),
            nstr   = t.randomString(16, t.defCharArray);

        var postdata = { url: t.getCurPageUrl() }
        //alert([link,title, desc, icon])

        $.ajax({
            url : "https://openapi.adleading.com/fa/api/getMpApiConfig.xhtml",
            data: postdata,
            dataType:"json",
            success:  function (data) {

                // alert(JSON.stringify(data));
                // alert(JSON.stringify(postdata))
                if (data.code === '9999') {
                    wx.config({
                        debug: false,   // 开启调试模式,调用的所有api的返回值会在客户端alert出来
                        appId: data.data.appid,   // 必填，公众号的唯一标识
                        timestamp: data.data.timstamp,  // 必填，生成签名的时间戳
                        nonceStr : data.data.noncestr, // 必填，生成签名的随机串
                        signature: data.data.sign,// 必填，签名，见附录1
                        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems']
                    });
                    wx.ready(function () {
                        wx.hideMenuItems({
                            menuList: [
                                "menuItem:share:qq",
                                "menuItem:share:weiboApp",
                                "menuItem:share:facebook",
                                "menuItem:share:email",
                                "menuItem:share:QZone",
                                //"menuItem:jsDebug",
                                "menuItem:editTag",
                                "menuItem:delete",
                                "menuItem:originPage",
                                "menuItem:openWithSafari",
                                "menuItem:openWithQQBrowser",
                                "menuItem:copyUrl",
                                "menuItem:readMode",
                                "menuItem:setFont",
                                "menuItem:exposeArticle"
                            ]
                        });

                        wx.onMenuShareTimeline({
                            title  : title, //分享标题
                            link   : link, //分享链接
                            imgUrl : icon, //分享图标
                            success: function () {
                                //用户确认分享后执行的回调函数
                                //t.shareTo();
                            },
                            cancel : function () {
                                //用户取消分享后执行的回调函数
                            }
                        });

                        wx.onMenuShareAppMessage({
                            title : title, // 分享标题
                            desc  : desc, // 分享描述
                            link  : link, // 分享链接
                            imgUrl: icon, // 分享图标A
                            success: function () {
                                // 用户确认分享后执行的回调函数
                                // t.shareTo();
                            },
                            cancel : function () {
                                // 用户取消分享后执行的回调函数
                            }
                        });
                    });
                }
            }
        });

        return this;
    }

}
