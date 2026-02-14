import{a as i,i as c,S as p}from"./assets/vendor-F1LeQrrD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const f="54643656-39fbeee4a4754ff685e869119",y="https://pixabay.com/api";i.defaults.baseURL=y;function g(t=""){return i.get("/",{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>c.error({message:"Sorry, we have a problem. Please try again!",position:"topRight"}))}const u=document.querySelector(".loader"),m=document.querySelector(".gallery");function h({likes:t,tags:r,views:s,downloads:l,comments:e,webformatURL:a,largeImageURL:o}){return`
        <li class= "gallery-item">
          <a href="${o}"
            ><img src="${a}" alt="${r}" />
            <div class="gallery-info">
              <div class="gallery-info-box">
                <span class="gallery-label">Likes</span>
                <span class="gallery-value">${t}</span>
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
          </li>`}function n(){m.innerHTML=""}function v(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form"),S=document.querySelector(".gallery");d.addEventListener("submit",x);function x(t){t.preventDefault();const r=t.target.elements["search-text"].value;n(),v(),g(r).then(s=>{if(s.length===0){n(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const l=s.map(e=>h(e)).join("");S.innerHTML=l,L.refresh()}).catch().finally(()=>b()),d.reset()}
//# sourceMappingURL=index.js.map
