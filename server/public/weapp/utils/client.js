"use strict";const e=require("../enums/appEnums.js"),n=()=>I({MP_WEIXIN:()=>e.ClientEnum.MP_WEIXIN,OA_WEIXIN:()=>e.ClientEnum.OA_WEIXIN,H5:()=>e.ClientEnum.H5,IOS:()=>e.ClientEnum.IOS,ANDROID:()=>e.ClientEnum.ANDROID,OTHER:()=>null}),I=({MP_WEIXIN:e,OA_WEIXIN:n,H5:I,IOS:t,ANDROID:E,OTHER:i})=>e(),t=n();exports.client=t,exports.getClient=n,exports.getClientString=()=>I({MP_WEIXIN:()=>"",OA_WEIXIN:()=>"wechat",H5:()=>"jump",IOS:()=>"",ANDROID:()=>"",OTHER:()=>null}),exports.handleClientEvent=I,exports.isWeixinClient=()=>{};