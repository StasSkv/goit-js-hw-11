import{a as f,i as u,S as d}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();f.defaults.baseURL="https://pixabay.com/api/";function h(o){return f.get("",{params:{key:"48766292-dc6ec1cfa953245898524780f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits.length===0?(showMessage("Sorry, there are no images matching your search query. Please try again!"),[]):t.data.hits).catch(t=>(showMessage("Sorry, an error occurred while loading"),[]))}function m(o){const t=o.map(s=>`<li class="gallery-item">
       <a href="${s.largeImageURL}" class="gallery-link"> <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-img" width="360" height="152"/></a>
        <ul class="info-list">
          <li class="info-item">
            <h4 class="info-title">Likes</h4>
            <p class="info-text">${s.likes}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Views</h4>
            <p class="info-text">${s.views}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Comments</h4>
            <p class="info-text">${s.comments}</p>
          </li>
          <li class="info-item">
            <h4 class="info-title">Downloads</h4>
            <p class="info-text">${s.downloads}</p>
          </li>
        </ul>
      </li>`).join(""),i=document.querySelector(".gallery-list");i.innerHTML=t}const a=document.querySelector(".js-form"),n=document.querySelector("#input"),p=document.querySelector(".gallery-list");a.addEventListener("submit",y);n.addEventListener("focus",()=>n.style.borderColor="#4e75ff");n.addEventListener("blur",()=>n.style.borderColor="");function y(o){o.preventDefault();const t=n.value.trim();t?(a.reset(),p.innerHTML="",h(t).then(i=>m(i)).catch(()=>c("Sorry, there are no images matching your search query. Please try again!"))):(c("Please enter the text"),a.reset())}function c(o){u.show({message:o,position:"topRight",iconUrl:"./src/img/x.svg",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#b51b1b",theme:"dark",displayMode:2,transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft",maxWidth:"400px"})}new d(".gallery-list a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});
//# sourceMappingURL=index.js.map
