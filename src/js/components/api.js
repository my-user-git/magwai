console.log('api');
"use strict";

// import { document } from 'postcss';
import { dataLocal } from './postsdata.js';

let globalData = {};
let api = false;
let morePosts = 1;
let postsApiArr = [];

let now = new Date();
let month = now.toLocaleString('en-us', { month: 'short' });
let day = now.getDate();
let year = now.getFullYear();


(function () {
  const postsList = document.querySelector('.posts-content__list');
  console.log(dataLocal.length);

  // function initPost(data) {
  //   data.forEach(function (el) {
  //     if (!el.img || !el.date || !el.subtitle || !el.author) {
  //       Object.assign(el, {
  //         img: 'img/default.png',
  //         subtitle: 'API',
  //         author: 'No Eugenia',
  //         date: {
  //           month: month,
  //           day: day,
  //           year: year,
  //         },
  //       });
  //     }
  //     return addItem(el);
  //   });
  // }

  // function initPost(data, count, api) {
  //   let i = 0;
  //   do {
  //     console.log(data[i]);
  //     if (!data[i].img && !data[i].date && !data[i].subtitle && !data[i].author) {
  //       Object.assign(data[i], {
  //         img: 'img/default.png',
  //         subtitle: 'API',
  //         author: 'No Eugenia',
  //         date: {
  //           month: month,
  //           day: day,
  //           year: year,
  //         },
  //       });
  //       addItem(data[i]);
  //     } else {
  //       addItem(data[i]);
  //     }
  //     i++;
  //   } while (i <= count);
  // }


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
            year: year,
          },
        });
      }
      globalData = data[i];
      addItem(globalData);
      i++;
    } while (i < count);
  }

  initPost(dataLocal, dataLocal.length, api = false);


  function getPostsApi(morePosts) {
    console.log(morePosts);
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(function (data) {
        for (let i = morePosts; i <= morePosts + 4; i++) {
          const result = data.find((item) => item.id === i)
          postsApiArr.push(result);
        }
        initPost(postsApiArr, postsApiArr.length, api = true);
        postsApiArr = [];
      })
  }


  function addItem(element) {
    let itemLi = document.createElement('li');
    let itemImg = document.createElement('img');
    let itemWrap = document.createElement('div');
    let itemH3 = document.createElement('h3');
    let itemH4 = document.createElement('h4');
    let itemBody = document.createElement('p');
    let itemMetaData = document.createElement('p');
    let itemAuthor = document.createElement('span');
    let itemDate = document.createElement('span');
    let itemMore = document.createElement('a');

    itemLi.className = 'posts-content__item';
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
    itemMore.textContent = 'Continue reading';


    appendChildren(itemMetaData, [itemAuthor, itemDate]);
    appendChildren(itemWrap, [itemH3, itemH4, itemBody, itemMetaData, itemMore]);
    appendChildren(itemLi, [itemImg, itemWrap]);

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
        getPostsApi(morePosts);
        morePosts = morePosts + 5;
      })
    })
  }

  clickButton(morePosts);

})();
