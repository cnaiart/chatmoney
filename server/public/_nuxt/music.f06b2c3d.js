function t(){return $request.get({url:"/music/config"})}function u(e){return $request.get({url:"/music/lists",params:e})}function s(e){return $request.post({url:"/music/imagine",params:e})}function r(e){return $request.post({url:"/music/generate",params:e})}function i(){return $request.get({url:"/musicSquare/recommendLits"})}function n(e){return $request.post({url:"/music/del",params:e})}export{r as a,u as b,i as c,n as d,t as g,s as p};