import{a as f,i as u}from"./assets/vendor-4yCzdkXl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();f.defaults.baseURL="https://pixabay.com/api/";function d(s){return f.get("",{params:{key:"48766292-dc6ec1cfa953245898524780f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits.length===0?(showMessage("Sorry, there are no images matching your search query. Please try again!"),[]):t.data.hits).catch(t=>(showMessage("Sorry, an error occurred while loading"),[]))}function h(s){const t=s.map(o=>`<li class="gallery-item">
        <img src="${o.webformatURL}" alt="${o.tags}" class="gallery-img" data-source="${o.largeImageURL}" width="360" height="152"/>
        <ul class="info-list">
          <li class="info-item">
            <h4 class="info-title">Likes</h4>
            <p class="info-text">${o.likes}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Views</h4>
            <p class="info-text">${o.views}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Comments</h4>
            <p class="info-text">${o.comments}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Downloads</h4>
            <p class="info-text">${o.downloads}</p>
          </li>
        </ul>
      </li>`).join("");document.querySelector(".gallery-list").insertAdjacentHTML("beforeend",t)}const l=document.querySelector(".js-form"),i=document.querySelector("#input");document.querySelector(".gallery-list");l.addEventListener("submit",m);i.addEventListener("focus",()=>i.style.borderColor="#4e75ff");i.addEventListener("blur",()=>i.style.borderColor="");function m(s){s.preventDefault(),i.value.trim()?(l.reset(),d(i.value).then(t=>h(t)).catch(()=>c("Sorry, an error occurred while loading"))):(c("Please enter the text"),l.reset())}function c(s){u.show({message:s,position:"topRight",iconUrl:"./src/img/x.svg",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#b51b1b",theme:"dark",displayMode:2,transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft"})}
//# sourceMappingURL=index.js.map
