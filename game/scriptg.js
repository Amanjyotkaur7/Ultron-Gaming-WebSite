console.log("hi")
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');

const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});