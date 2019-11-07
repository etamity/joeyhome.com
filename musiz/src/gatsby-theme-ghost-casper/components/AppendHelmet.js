import React from 'react';
export default [
  <script key="redirect-portal" id="redirect-portal">
    {`(function (root) {
        "use strict";
        var h = root ? root.location.hostname : "",
        p = root ? root.location.protocol : "";
        if ("http:" === p && !(/^(localhost|127.0.0.1)/).test(h)) {
          root.location.protocol = "https:";
        }
      }("undefined" !== typeof window ? window : this));`}
  </script>,
  <script key="mcjs" id="mcjs">
    {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ec8a4c79b5067303895f955a3/1b416ff0883bdee60e019deff.js");`}
  </script>,
];