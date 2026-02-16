import{a as i,S as p,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="54643656-39fbeee4a4754ff685e869119",y="https://pixabay.com/api";i.defaults.baseURL=y;function g(t=""){return i.get("/",{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data.hits)}const m=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader"),u=document.querySelector(".gallery");function h({likes:t,tags:a,views:s,downloads:o,comments:e,webformatURL:r,largeImageURL:l}){return`
        <li class= "gallery-item">
          <a href="${l}"
            ><img src="${r}" alt="${a}" />
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
                <span class="gallery-value">${o}</span>
              </div>
            </div>
          </a
          >
          </li>`}function v(t){const a=t.map(s=>h(s)).join("");u.innerHTML=a,m.refresh()}function b(){u.innerHTML=""}function L(){c.classList.remove("hidden")}function x(){c.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",S);function S(t){t.preventDefault();const a=t.target.elements["search-text"].value.trim();if(a.length===0){n.error({message:"Please enter a search query!",position:"topRight"});return}b(),L(),g(a).then(s=>{if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(s)}).catch(()=>{n.error({message:"Sorry, we have a problem. Please try again!",position:"topRight"})}).finally(()=>x()),d.reset()}
//# sourceMappingURL=index.js.map
