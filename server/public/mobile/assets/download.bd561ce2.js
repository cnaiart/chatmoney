import{a2 as t,bQ as e,a4 as a,R as i}from"./index-9f08b835.js";const n=(t,e)=>{const a=document.createElement("a");document.body.appendChild(a),a.href=t,a.download=e,a.click(),a.remove()},o=async(o,r,s="image")=>{if(!o)return uni.$u.toast("文件地址错误");t({title:"下载中"});try{o=(await e({url:o,timeout:1e4})).tempFilePath,n(o,r),a()}catch(l){if(a(),"downloadFile:fail fail:timeout"==l.errMsg)return void uni.$u.toast("文件下载超时，请重新下载");if(l.errMsg.indexof("fail auth deny")){if((await i({title:"提示",content:"您关闭了权限，请前往设置打开权限"})).confirm){(await uni.openSetting()).authSetting["scope.writePhotosAlbum"]?i({title:"提示",content:"获取权限成功,再次保存文件即可成功",showCancel:!1}):i({title:"提示",content:"获取权限失败，无法保存到相册",showCancel:!1})}return}uni.$u.toast("文件下载失败，请重试")}};export{o as a,n as d};