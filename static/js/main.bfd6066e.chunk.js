(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(27)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(15),n(2)),i=n(1),m=r.a.createContext({users:[],activeUser:{},setActiveUser:function(){}}),l=r.a.createContext({thread:{},genId:function(){},addComment:function(){},editComment:function(){},deleteComment:function(){}}),u=(n(16),function(e){var t=e.onConfirm,n=e.onCancel;return r.a.createElement("div",{className:"center-me"},r.a.createElement("div",{className:"delete-modal"},r.a.createElement("h2",null,"Delete comment"),r.a.createElement("p",null,"Are you sure you want to delete this comment? This will remove the comment and can't be undone."),r.a.createElement("div",{className:"modal-btns"},r.a.createElement("button",{className:"btn-modal btn-cancel",onClick:n},"no, cancel"),r.a.createElement("button",{className:"btn-modal btn-confirm",onClick:t},"yes, delete"))))}),d=(n(17),function(e){var t=e.user,n=Object(a.useContext)(m);return r.a.createElement("img",{className:"avatar ".concat(n.activeUser.username===t.username?"active":""),src:t.image,alt:"comment author",onClick:function(){return e=t.username,void n.setActiveUserCtx(e);var e}})}),f=(n(18),function(){var e=Object(a.useContext)(m);return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},r.a.createElement("h2",null,"Frontend Mentor Challenge"),r.a.createElement("a",{href:"https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9",className:"header-subtitle",target:"_blank",rel:"noopener noreferrer"},"- Interactive Comments")),r.a.createElement("div",{className:"users"},r.a.createElement("span",{className:"user-select-label"},"Simulate active user \u2192"),e.users.map(function(e){return r.a.createElement(d,{user:e,key:e.username})})))}),v=(n(19),function(e){var t=Object(a.useState)(e.score),n=Object(i.a)(t,2),o=n[0],c=n[1],s=function(e){c(function(t){return t+e})};return r.a.createElement("div",{className:"vote-widget"},r.a.createElement("button",{type:"button",className:"vote-btn up-vote",onClick:function(){return s(1)}},r.a.createElement("img",{src:"/images/icon-plus.svg",alt:"up-vote"})),r.a.createElement("div",{className:"vote-count"},r.a.createElement("span",{id:"score"},o)),r.a.createElement("button",{type:"button",className:"vote-btn down-vote",onClick:function(){return s(-1)}},r.a.createElement("img",{src:"/images/icon-minus.svg",alt:"down-vote"})))}),p=(n(20),function(e){var t=e.user,n=Object(a.useContext)(m);return r.a.createElement("div",{className:"user-tag"},r.a.createElement(d,{user:t}),r.a.createElement("span",{className:"user-name"},t.username),n.activeUser.username===t.username&&r.a.createElement("div",{className:"you"},"you"))}),g=n(5);function b(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var E=function(e,t){var n,a=e,r=b(t);try{for(r.s();!(n=r.n()).done;){a=a[n.value].replies}}catch(o){r.e(o)}finally{r.f()}return a},h=(n(21),function(e){var t=e.comment,n=e.type,o=e.parents,c=e.idx,s=e.onReply,u=e.editing,d=e.onEdited,f=Object(a.useContext)(m),v=Object(a.useContext)(l),p="reply"===n?"reply":"update"===n?"update":"send",b=t?t.content:"Add a ".concat("reply"===n?"response":"comment","..."),y=Object(a.useState)(b),E=Object(i.a)(y,2),h=E[0],w=E[1];return r.a.createElement("div",{className:"comment-input-block ".concat("update"===n&&"editing")},r.a.createElement("textarea",{autoFocus:u,name:"comment-content",id:"comment-content",className:"comment-input-content",value:h,onFocus:function(e){var t;"update"!==n&&(o&&o.length>0&&(t=function(e,t){var n=e,a=t.length-1;for(var r in t)n=r<a?n[t[r]].replies:n[t[r]];return n}(v.thread,o)),w(t?"@".concat(t.user.username," "):"")),e.target.setSelectionRange(h.length,h.length)},onChange:function(e){w(e.target.value)},cols:"30",rows:"3"},h),r.a.createElement("button",{type:"button",className:"comment-submit-btn",onClick:u?function(){var e=Object(g.a)({},t);e.content=h,d(),v.editComment(e,o,c)}:function(){var e={id:v.genId(),content:h,createdAt:"Just now",score:0,user:f.activeUser,replies:[]};s(),w(b),v.addComment(e,o)}},p))}),w=(n(22),function(e){var t=e.type,n=e.parents,o=e.onReply,c=e.editing,s=Object(a.useContext)(m);return r.a.createElement("div",{className:"new-comment-block comment"},r.a.createElement("span",{className:"avatar"},r.a.createElement(d,{user:s.activeUser})),r.a.createElement(h,{type:t,parents:n,onReply:o,editing:c}))}),C=(n(23),function(e){var t=e.parents,n=e.idx,o=e.onEditClick,c=Object(a.useContext)(l);return r.a.createElement("div",{className:"comment-edits"},r.a.createElement("button",{type:"button",className:"edit-btn delete",onClick:function(){return c.deleteComment(t,n)}},r.a.createElement("img",{src:"/images/icon-delete.svg",alt:"delete comment"}),"delete"),r.a.createElement("button",{type:"button",className:"edit-btn edit",onClick:o},r.a.createElement("img",{src:"/images/icon-edit.svg",alt:"edit comment"}),"edit"))}),j=(n(24),function e(t){var n=t.comment,o=t.parents,c=t.idx,l=Object(a.useContext)(m),u=Object(a.useState)(!1),d=Object(i.a)(u,2),f=d[0],g=d[1],b=Object(a.useState)(!1),y=Object(i.a)(b,2),E=y[0],j=y[1];return r.a.createElement("div",{className:"comment-block ".concat(o.length>0?"is-reply":"")},r.a.createElement("div",{className:"comment"},r.a.createElement(v,{score:n.score}),r.a.createElement("div",{className:"comment-content"},r.a.createElement("div",{className:"comment-content_head"},r.a.createElement("div",{className:"user-meta"},r.a.createElement(p,{user:n.user}),r.a.createElement("span",{className:"posted"},n.createdAt)),n.user.username===l.activeUser.username?r.a.createElement(C,{comment:n,parents:o,idx:c,onEditClick:function(){j(function(e){return!e})}}):r.a.createElement("div",{className:"reply",onClick:function(){g(function(e){return!e})}},r.a.createElement("span",{className:"reply-svg"},r.a.createElement("img",{src:"/images/icon-reply.svg",alt:"reply"})),r.a.createElement("span",null,"reply"))),r.a.createElement("div",{className:"comment-content_body"},E?r.a.createElement(h,{comment:n,editing:E,onEdited:function(){return j(!1)},type:"update",parents:o,idx:c}):r.a.createElement("p",null,n.content)))),f&&r.a.createElement(w,{type:"reply",editing:!1,parents:[].concat(Object(s.a)(o),[c]),onReply:function(){return g(!1)}}),n.replies.length>0&&r.a.createElement("div",{className:"reply-block"},r.a.createElement("div",{className:"reply-line-tab"},r.a.createElement("span",{className:"reply-line"})),r.a.createElement("div",{className:"replies"},n.replies.map(function(t,n){return r.a.createElement(e,{key:t.id,comment:t,parents:[].concat(Object(s.a)(o),[c]),idx:n})}))))});n(25);var N=function(e){var t=e.comments;return r.a.createElement("main",{className:"comments"},t.map(function(e,t){return r.a.createElement(j,{key:e.id,comment:e,parents:[],idx:t})}),r.a.createElement(w,{parents:[],onReply:function(){}}))},k=(n(26),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("section",{className:"attributions"},r.a.createElement("p",null,"Challenge and materials provided by"," ",r.a.createElement("a",{href:"https://www.frontendmentor.io/home",target:"_blank",rel:"noopener noreferrer"},"Frontend Mentor")),r.a.createElement("p",null,"Created using"," ",r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"))))}),O={comments:[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:"/images/avatars/image-amyrobson.png",username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:"/images/avatars/image-maxblagun.png",username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:"/images/avatars/image-ramsesmiron.png",username:"ramsesmiron"},replies:[]},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:"/images/avatars/image-juliusomo.png",username:"juliusomo"},replies:[]}]}]},x=[{image:"/images/avatars/image-juliusomo.png",username:"juliusomo"},{image:"/images/avatars/image-amyrobson.png",username:"amyrobson"},{image:"/images/avatars/image-maxblagun.png",username:"maxblagun"},{image:"/images/avatars/image-ramsesmiron.png",username:"ramsesmiron"}];function A(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var I=function(){var e=Object(a.useState)(x[0]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(O.comments),d=Object(i.a)(c,2),v=d[0],p=d[1],g=Object(a.useState)(5),b=Object(i.a)(g,2),y=b[0],h=b[1],w={vis:!1,parents:null,idx:null},C=Object(a.useState)(w),j=Object(i.a)(C,2),S=j[0],I=j[1],R=function(e,t){p(function(n){var a=Object(s.a)(n);return E(a,e).splice(t,1),a})};return r.a.createElement(l.Provider,{value:{thread:v,genId:function(){return h(function(e){return e+1}),y},addComment:function(e,t){p(function(n){var a=Object(s.a)(n);return E(a,t).push(e),a})},editComment:function(e,t,n){p(function(a){var r=Object(s.a)(a);return E(r,t)[n]=e,r})},deleteComment:function(e,t){I({vis:!0,parents:e,idx:t})}}},r.a.createElement(m.Provider,{value:{users:x,activeUser:n,setActiveUserCtx:function(e){var t,n=A(x);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.username===e&&o(a)}}catch(r){n.e(r)}finally{n.f()}}}},S.vis&&r.a.createElement(u,{onConfirm:function(){R(S.parents,S.idx),I(w)},onCancel:function(){I(w)}}),r.a.createElement(f,null),r.a.createElement(N,{comments:v}),r.a.createElement(k,null)))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(I,null))}],[[6,1,2]]]);
//# sourceMappingURL=main.bfd6066e.chunk.js.map