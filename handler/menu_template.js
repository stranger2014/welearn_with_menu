//var urls=require("../address_configure");


var tmp=require("../setting");
exports.WEIXIN_TOKEN = tmp.token;//'abc';

exports.WEIXIN_APPID = tmp.appid;

exports.WEIXIN_SECRET = tmp.appsecret;
var WEIXIN_EVENT_KEYS = {
    'course_info':'COURSE_INFO',
    'private_conversation':'PRIVATE_CONVERSATION',
    'course_schedule':"COURSE_SCHEDULE",
};

exports.WEIXIN_EVENT_KEYS = WEIXIN_EVENT_KEYS;

var WEIXIN_COSTUM_MENU_TEMPLATE = {
    "button": [
        {
            "name": "课程信息",

            /*[
                {
                    "type": "click",
                    "name": "新闻",
                    "key": WEIXIN_EVENT_KEYS['info_news'],
                    "sub_button": []
                },
                {
                    "type": "click",
                    "name": "就业",
                    "key": WEIXIN_EVENT_KEYS['info_job'],
                    "sub_button": []
                },
                {
                    "type": "click",
                    "name": "社团",
                    "key": WEIXIN_EVENT_KEYS['info_organization'],
                    "sub_button": []
                },
                {
                    "type": "click",
                    "name": "投票",
                    "key": WEIXIN_EVENT_KEYS['info_vote'],
                    "sub_button": []
                }
            ],*/
            "type":"click",
            "key":WEIXIN_EVENT_KEYS['course_info'] ,
            "sub_button": [],
        },
        {
            "name": "私信",
            "type": "click",
            "key": WEIXIN_EVENT_KEYS['private_conversation'],
            "sub_button": []
        },
        {
            "name": "课程表",
            "type": "click",
            "key": WEIXIN_EVENT_KEYS['course_schedule'],
            "sub_button": []
        },
       /* {
            "name": "个人中心",
            "sub_button": [

                {
                    "type": "click",
                    "name": "绑定",
                    "key": WEIXIN_EVENT_KEYS['account_bind'],
                    "sub_button": []
                },
                {
                    "type": "click",
                    "name": "解绑",
                    "key": WEIXIN_EVENT_KEYS['account_unbind'],
                    "sub_button": []
                },

            ]
        }*/
    ]
};
exports.WEIXIN_COSTUM_MENU_TEMPLATE = WEIXIN_COSTUM_MENU_TEMPLATE;