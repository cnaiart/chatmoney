function r(t){return $request.get({url:"/kb.robot/lists",params:t})}function o(t){return $request.get({url:"/kb.robot/detail",params:t})}function u(t){return $request.post({url:"/kb.robot/add",params:t})}function s(t){return $request.post({url:"/kb.robot/edit",params:t})}function a(t){return $request.post({url:"/kb.robot/del",params:t})}function n(t){return $request.get({url:"/kb.chat/dataRecord",params:t})}function c(t){return $request.get({url:"/kb.chat/dataCount",params:t})}function l(t){return $request.post({url:"/kb.chat/dataDelete",params:t})}function b(t){return $request.get({url:"/kb.share/lists",params:t})}function i(t){return $request.post({url:"/kb.share/add",params:t})}function d(t){return $request.get({url:"/kb.share/detail",params:t})}function h(t){return $request.post({url:"/kb.share/del",params:t})}function R(t){return $request.post({url:"/kb.share/edit",params:t})}function f(t){return $request.get({url:"/kb.chat/cateLists",params:t})}function q(t){return $request.post({url:"/kb.chat/cateAdd",params:t})}function k(t){return $request.post({url:"/kb.chat/cateEdit",params:t})}function p(t){return $request.post({url:"/kb.chat/cateDel",params:t})}function $(t){return $request.post({url:"/kb.chat/cateClear",params:t})}function g(t,e){return $request.sse({url:"/v1/chat/completions",method:"POST",params:t,headers:e})}function C(t,e){return $request.post({url:"/kb.chat/chatClean",params:t,headers:e})}function D(t,e){return $request.get({url:"/kb.chat/chatRecord",params:t,headers:e})}function L(t){return $request.post({url:"/kb.chat/chatCorrect",params:t})}export{D as a,r as b,C as c,a as d,f as e,q as f,o as g,k as h,$ as i,p as j,c as k,l,L as m,n,s as o,u as p,h as q,g as r,i as s,R as t,b as u,d as v};