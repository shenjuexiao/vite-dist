(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(n=""){return`
    <header class="site-header">
      <h1>
        ⚡ Vite 工具集
        <small>多页面 · 分离式</small>
      </h1>
      <nav class="header-nav">
        ${[{key:"home",label:"首页",href:"/"},{key:"tools",label:"工具",href:"/pages/tools.html"},{key:"docs",label:"文档",href:"/pages/docs.html"},{key:"about",label:"关于",href:"/pages/about.html"}].map(s=>`<a href="${s.href}" class="${n===s.key?"active":""}">${s.label}</a>`).join("")}
      </nav>
    </header>
  `}function i({year:n=new Date().getFullYear(),extraLinks:r=[]}={}){return`
    <footer class="site-footer">
      <div class="footer-links">
        ${[...[{label:"GitHub",href:"https://github.com"},{label:"Vite 文档",href:"https://vitejs.dev"},{label:"隐私政策",href:"#"}],...r].map(t=>`<a href="${t.href}">${t.label}</a>`).join("")}
      </div>
      <div class="footer-copy">
        © ${n} · 页眉 / 内容 / 页脚 完全分离
      </div>
    </footer>
  `}function c({active:n="",title:r}={}){r&&(document.title=`${r} · Vite 工具集`);const o=document.querySelector(".app");if(!o){console.warn("[layout] 未找到 .app 容器");return}o.insertAdjacentHTML("afterbegin",l(n)),o.insertAdjacentHTML("beforeend",i())}export{c as m};
