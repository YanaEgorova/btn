'use strict';
import {
  throttle
} from "./throttle.js";
window.addEventListener('resize', throttle(onResize, 150))
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// ==================================================================
// const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// document.documentElement.style.width = `${w}`;
// document.documentElement.style.height = `${h}`;
// document.body.style.width = `${w}px`;
// document.body.style.height = `${h}px`;

function onResize() {
  let vh2 = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh2}px`);
  // ==================================================================
  // const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  // const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  // document.documentElement.style.width = `${w}`;
  // document.documentElement.style.height = `${h}`;
  // document.body.style.width = `${w}px`;
  // document.body.style.height = `${h}px`;
}

window.addEventListener('orientationchange', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // ==================================================================
})