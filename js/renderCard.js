import { getVideo } from "./services.js";

const ListCard = document.querySelector('.other-films__list');

const renderCard = async (data) => {
    // console.log('data: ', data);
    ListCard.textContent = '';

    // const cards =

    Promise.all(data.map(async (item) => {

        if (!item.poster_path) return "";

        const video = await getVideo(item.id, item.media_type);
        const key = video.results[0]?.key;
        //console.log('key: ', key);

        const card = document.createElement('li');
        card.className = 'other-films__item';

        const link = document.createElement('a');
        if (key) link.href = `https://youtu.be/${key}`

        link.className = 'other-films__link';
        link.dataset.rating = item.vote_average || "-";
        //console.log(link);

        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `Постер ${item.name || item.title}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

        link.append(img);
        card.append(link);

        return card;

    })).then(cards => ListCard.append(...cards));
    //console.log('cards: ', cards);

    // ListCard.append(...cards);//... - разбирает массив на элементы

    //console.log('card: ', card);


}


export default renderCard;