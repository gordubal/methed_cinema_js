import { getTrends, getVideo } from "./services.js";
import renderCard from "./renderCard.js";

const filmWeek = document.querySelector('.film-week');
// console.log('filmWeek: ', filmWeek);




const firstRender = (data, keyVideo) => {
    // console.log(data);
    const {
        vote_average: voteAverage, // деструктурируем объект и даем имена
        backdrop_path,
        name,
        title,
        original_name,
        original_title
    } = data
    filmWeek.innerHTML = `
         <div class="container film-week__container" data-rating="${voteAverage}">
                <div class="film-week__poster-wrapper">
                    <img class="film-week__poster"
                        src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}"
                        alt="${name || title}">
                    <p class="film-week__title_origin">${original_name || original_title}</p>
                </div>
                <h2 class="film-week__title">${name || title}</h2>
                ${keyVideo ?
            `<a class="film-week__watch-trailer tube" href="https://youtu.be/${keyVideo}"
                             aria-label="смотреть трейлер"></a>`:
            ``}
                
         </div>

    `;
};

const renderVideo = async () => {
    const data = await getTrends();
    // console.log('data: ', data);

    const [firstCard, ...otherCard] = data.results;
    otherCard.length = 12;
    // console.log('otherCard: ', otherCard);

    const video = await getVideo(firstCard.id, firstCard.media_type);
    // console.log('video: ', video);

    firstRender(firstCard, video.results[0].key);
    renderCard(otherCard);

}

export default renderVideo;