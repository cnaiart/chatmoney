import{aJ as t}from"./index-9f08b835.js";function a(a){return t.get({url:"/kb.robot/lists",data:a})}function r(a){return t.get({url:"/kb.robot/detail",data:a})}function e(a){return t.post({url:"/kb.robot/add",data:a})}function n(a){return t.post({url:"/kb.robot/edit",data:a})}function u(a){return t.post({url:"/kb.robot/del",data:a})}function o(a){return t.post({url:"/kb.robot/cancelShare",data:a})}function s(a){return t.get({url:"/kb.chat/dataRecord",data:a})}function c(a){return t.get({url:"/kb.chat/dataCount",data:a})}function d(a){return t.post({url:"/kb.chat/dataDelete",data:a})}function i(a){return t.get({url:"/kb.share/lists",data:a})}function l(a){return t.post({url:"/kb.share/add",data:a})}function f(a){return t.get({url:"/kb.share/detail",data:a})}function b(a){return t.post({url:"/kb.share/del",data:a})}function h(a){return t.post({url:"/kb.share/edit",data:a})}function k(a){return t.post({url:"/kb.share/update",data:a})}function p(a){return t.get({url:"/kb.chat/cateLists",data:a})}function g(a){return t.post({url:"/kb.chat/cateAdd",data:a})}function m(a){return t.post({url:"/kb.chat/cateEdit",data:a})}function q(a){return t.post({url:"/kb.chat/cateDel",data:a})}function v(a){return t.post({url:"/kb.chat/cateClear",data:a})}function C(a){return t.post({url:"/kb.chat/feedback",data:a})}function x(a,r,e){return t.eventStream({url:"/v1/chat/completions",method:"POST",data:a,header:e},r)}function D(a,r){return t.post({url:"/kb.chat/chatClean",data:a,header:r})}function S(a,r){return t.get({url:"/kb.chat/chatRecord",data:a,header:r})}function j(a){return t.post({url:"/kb.chat/chatCorrect",data:a})}function y(a){return t.get({url:"/kb.square/category",data:a})}function A(a){return t.get({url:"/kb.square/lists",data:a})}function B(a){return t.get({url:"/kb.square/record",data:a})}function E(a){return t.post({url:"/kb.square/add",data:a})}function F(a,r){return t.post({url:"/voice/generate",data:a,header:r})}function P(a){return t.uploadFile({url:"/voice/transfer",filePath:a,name:"file"})}function R(a){return t.post({url:"/kb.share/setBg",data:a})}export{R as A,p as B,g as C,q as D,v as E,m as F,y as a,A as b,o as c,u as d,E as e,S as f,a as g,r as h,D as i,P as j,f as k,B as l,C as m,n,c as o,e as p,j as q,x as r,s,d as t,i as u,F as v,b as w,h as x,l as y,k as z};