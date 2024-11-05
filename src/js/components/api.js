console.log('api');
"use strict";

// import { document } from 'postcss';
import { dataLocal } from './postsdata.js';

let globalData = {};
let api = false,
  morePosts = 1,
  postsApiArr = [],
  clickFlag = 0;

let now = new Date(),
  month = now.toLocaleString('en-us', { month: 'short' }),
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
    itemCard.className = 'posts-content__card'
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
      })
    })
  }

  clickButton(morePosts);

})();
