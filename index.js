import{a as i,i as c,S as p}from"./assets/vendor-F1LeQrrD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="54643656-39fbeee4a4754ff685e869119",y="https://pixabay.com/api";i.defaults.baseURL=y;function g(r=""){return i.get("/",{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data.hits).catch(a=>c.error({message:"Sorry, we have a problem. Please try again!",position:"topRight"}))}const u=document.querySelector(".loader"),m=document.querySelector(".gallery-list");function h({likes:r,tags:a,views:s,downloads:l,comments:e,webformatURL:t,largeImageURL:o}){return`
        <li class= "gallery-item">
          <a href="${o}"
            ><img src="${t}" alt="${a}" />
            <div class="gallery-info">
              <div class="gallery-info-box">
                <span class="gallery-label">Likes</span>
                <span class="gallery-value">${r}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Views</span>
                <span class="gallery-value">${s}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Comments</span>
                <span class="gallery-value">${e}</span>
              </div>
              <div class="gallery-info-box">
                <span class="gallery-label">Downloads</span>
                <span class="gallery-value">${l}</span>
              </div>
            </div>
          </a
          >
          </li>`}function n(){m.innerHTML=""}function v(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const L=new p(".gallery-list a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form"),S=document.querySelector(".gallery-list");d.addEventListener("submit",x);function x(r){r.preventDefault();const a=r.target.elements["search-text"].value;n(),v(),g(a).then(s=>{if(s.length===0){n(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const l=s.map(e=>h(e)).join("");S.innerHTML=l,L.refresh()}).catch().finally(()=>b()),d.reset()}
//# sourceMappingURL=index.js.map
