import { getPopular, getTop, getTrends } from "./services.js";
import renderCard from "./renderCard.js";

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
console.log('getNav: ', getNav);

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', event => {

            // console.log('event: ', event.target);

            const target = event.target.closest('.get-nav__link');

            if (target) {
                event.preventDefault();

                filmWeek.style.display = "none";
                title.textContent = target.textContent;

                if (target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular('movie').then(data => renderCard(data.results))
                }

                if (target.classList.contains('get-nav__link_popular-tv')) {
                    getPopular('tv').then(data => renderCard(data.results))
                }

                //get-nav__link_top-tv
                if (target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv').then(data => renderCard(data.results))
                }


                if (target.classList.contains('get-nav__link_top-movies')) {
                    getTop('movie').then(data => renderCard(data.results))
                }


                if (target.classList.contains('get-nav__link_triends')) {
                    getTrends('movie').then(data => renderCard(data.results))
                }

                if (target.classList.contains('get-nav__link_triends_tv')) {
                    getTrends('tv').then(data => renderCard(data.results))
                }






            }


        })
    })

}

export default menuLink;