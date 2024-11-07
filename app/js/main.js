/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/api.js */ "./src/js/components/api.js");
/* harmony import */ var _components_myburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/myburger.js */ "./src/js/components/myburger.js");
/* harmony import */ var _components_adaptiveactions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/adaptiveactions.js */ "./src/js/components/adaptiveactions.js");



console.log('components');

/***/ }),

/***/ "./src/js/components/adaptiveactions.js":
/*!**********************************************!*\
  !*** ./src/js/components/adaptiveactions.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', function () {
  const adaptiveAction = document.querySelector('.header-content__nav');
  let actions = document.createElement('div');
  let wrap = document.createElement('div');
  let phone = document.createElement('img');
  let button = document.createElement('a');
  actions.className = 'header-content__adaptive';
  wrap.className = 'header-content__adaptive-wrap';
  phone.className = 'header-content__adaptive-phone';
  button.className = 'header-content__adaptive-button';
  phone.src = './img/phone.png';
  button.innerHTML = '<span>Оставить&nbsp;заявку</span>';
  function appendChildren(element, items) {
    items.forEach(function (children) {
      element.appendChild(children);
    });
  }
  appendChildren(wrap, [phone]);
  appendChildren(actions, [wrap, button]);
  adaptiveAction.appendChild(actions);

  // <div class="header-content__actions">
  //   <a class="header-content__phone" href="tel:+78000000000">
  //     <svg width="93" height="60" viewBox="0 0 93 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <g opacity="0.4">
  //         <path d="M0.875027 59.5L19.0667 0.5H92.0202L73.8286 59.5H0.875027Z" stroke="currentColor" />
  //         <path
  //           d="M49.5318 34.2139L51.254 32.491C51.486 32.2618 51.7794 32.1049 52.0988 32.0394C52.4182 31.9739 52.7497 32.0025 53.0531 32.1218L55.152 32.9602C55.4586 33.0847 55.7215 33.2972 55.9076 33.5709C56.0937 33.8447 56.1946 34.1674 56.1976 34.4985V38.3442C56.1958 38.5694 56.1485 38.7919 56.0585 38.9983C55.9685 39.2047 55.8377 39.3908 55.6739 39.5453C55.5101 39.6998 55.3168 39.8195 55.1056 39.8973C54.8943 39.9751 54.6695 40.0093 54.4447 39.9979C39.7368 39.0826 36.7691 26.6224 36.2079 21.8537C36.1818 21.6195 36.2056 21.3825 36.2777 21.1581C36.3498 20.9338 36.4686 20.7273 36.6262 20.5522C36.7838 20.3771 36.9766 20.2374 37.1921 20.1422C37.4076 20.047 37.6407 19.9986 37.8762 20H41.5897C41.9211 20.001 42.2446 20.1011 42.5186 20.2876C42.7927 20.474 43.0047 20.7381 43.1274 21.0461L43.9654 23.1458C44.0886 23.4482 44.1201 23.7801 44.0558 24.1002C43.9915 24.4203 43.8344 24.7144 43.6041 24.9456L41.8819 26.6685C41.8819 26.6685 42.8737 33.3832 49.5318 34.2139Z"
  //           fill="currentColor" />
  //       </g>
  //     </svg>
  //   </a>
  //   <a class="header-content__button">
  //     <span>Оставить&nbsp;заявку</span>
  //   </a>
  // </div>
});

/***/ }),

/***/ "./src/js/components/api.js":
/*!**********************************!*\
  !*** ./src/js/components/api.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postsdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postsdata.js */ "./src/js/components/postsdata.js");
console.log('api');
"use strict";

// import { document } from 'postcss';

let globalData = {};
let api = false,
  morePosts = 1,
  postsApiArr = [],
  clickFlag = 0;
let now = new Date(),
  month = now.toLocaleString('en-us', {
    month: 'short'
  }),
  day = now.getDate(),
  year = now.getFullYear();
const moreDisable = document.querySelector('.posts-content__button');
(function () {
  const postsList = document.querySelector('.posts-content__list');
  function initPost(data, count, api) {
    let i = 0;
    do {
      if (api) {
        Object.assign(data[i], {
          img: 'img/default.png',
          subtitle: 'API ID ' + data[i].id,
          author: 'No Eugenia',
          date: {
            month: month,
            day: day,
            year: year
          }
        });
      }
      globalData = data[i];
      addItem(globalData);
      i++;
    } while (i < count);
  }
  initPost(_postsdata_js__WEBPACK_IMPORTED_MODULE_0__.dataLocal, _postsdata_js__WEBPACK_IMPORTED_MODULE_0__.dataLocal.length, api = false);
  function getPostsApi(morePosts) {
    console.log(morePosts);
    fetch('https://jsonplaceholder.typicode.com/posts/').then(response => response.json()).then(function (data) {
      for (let i = morePosts; i <= morePosts + 4; i++) {
        const result = data.find(item => item.id === i);
        postsApiArr.push(result);
      }
      initPost(postsApiArr, postsApiArr.length, api = true);
      postsApiArr = [];
    });
  }
  function addItem(element) {
    let itemLi = document.createElement('li');
    let itemImg = document.createElement('img');
    let itemCard = document.createElement('div');
    let itemWrap = document.createElement('div');
    let itemH3 = document.createElement('h3');
    let itemH4 = document.createElement('h4');
    let itemBody = document.createElement('p');
    let itemMetaData = document.createElement('p');
    let itemAuthor = document.createElement('span');
    let itemDate = document.createElement('span');
    let itemMore = document.createElement('a');
    itemLi.className = 'posts-content__item';
    itemCard.className = 'posts-content__card';
    itemImg.className = 'posts-content__img';
    itemWrap.className = 'posts-content__wrap';
    itemH3.className = 'posts-content__h3';
    itemH4.className = 'posts-content__h4';
    itemBody.className = 'posts-content__body';
    itemMetaData.className = 'posts-content__meta';
    itemImg.src = `${element.img}`;
    itemH3.innerHTML = element.title;
    itemH4.innerHTML = element.subtitle;
    itemBody.innerHTML = element.body;
    itemAuthor.innerHTML = `Posted by <strong>${element.author}</strong> `;
    itemDate.innerHTML = `on ${element.date.month} ${element.date.day}, ${element.date.year} `;
    itemMore.className = 'posts-content__more';
    itemMore.setAttribute('href', element.uri);
    itemMore.target = '_blank';
    itemMore.innerHTML = element.uri;
    itemMore.textContent = 'Continue\xA0reading';
    appendChildren(itemMetaData, [itemAuthor, itemDate]);
    appendChildren(itemWrap, [itemH3, itemH4, itemBody, itemMetaData, itemMore]);
    appendChildren(itemCard, [itemImg, itemWrap]);
    appendChildren(itemLi, [itemCard]);
    postsList.appendChild(itemLi);
  }
  function appendChildren(element, items) {
    items.forEach(function (children) {
      element.appendChild(children);
    });
  }
  function clickButton() {
    document.addEventListener('DOMContentLoaded', function () {
      const buttonMore = document.querySelector('.posts-content__button');
      buttonMore.addEventListener('click', () => {
        clickFlag++;
        getPostsApi(morePosts);
        morePosts = morePosts + 5;
        if (clickFlag === 6) {
          moreDisable.disabled = true;
        }
      });
    });
  }
  clickButton(morePosts);
})();

/***/ }),

/***/ "./src/js/components/myburger.js":
/*!***************************************!*\
  !*** ./src/js/components/myburger.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
console.log('burger');
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-content__burger').addEventListener('click', function () {
    document.querySelector('.header-content__nav').classList.add('header-content__active');
    let htop = document.querySelector('.header-content').clientHeight;
    let hheight = document.querySelector('.hero-content').clientHeight + 28;
    document.querySelector('.header-content__active').style.top = htop - 20 + 'px';
    document.querySelector('.header-content__active').style.height = hheight + 'px';
  });
  document.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.header-content__burger')) {
      document.querySelector('.header-content__nav').classList.remove('header-content__active');
      document.querySelector('.header-content__center-nav').style.height = '';
    }
    ;
  });
});

/***/ }),

/***/ "./src/js/components/postsdata.js":
/*!****************************************!*\
  !*** ./src/js/components/postsdata.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataLocal: () => (/* binding */ dataLocal)
/* harmony export */ });
const dataLocal = [{
  id: 1,
  img: 'img/img_1.jpg',
  title: 'Bridge',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 2,
  img: 'img/img_2.jpg',
  title: 'Water',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 3,
  img: 'img/img_3.jpg',
  title: 'Bridge',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 4,
  img: 'img/img_4.jpg',
  title: 'Bridge',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 5,
  img: 'img/img_5.jpg',
  title: 'Forest',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 6,
  img: 'img/img_6.jpg',
  title: 'Nature',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 7,
  img: 'img/img_7.png',
  title: 'Nature',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 8,
  img: 'img/img_8.jpg',
  title: 'Nature',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 9,
  img: 'img/img_9.jpg',
  title: 'Nature',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}, {
  id: 10,
  img: 'img/img_10.jpg',
  title: 'Nature',
  subtitle: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  author: 'Eugenia',
  date: {
    month: 'July',
    day: '24',
    year: '2019'
  },
  uri: '#'
}];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map