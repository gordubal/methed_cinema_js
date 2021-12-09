const ListCard = document.querySelector('.other-films__list');

const renderCard = async (data) => {
    // console.log('data: ', data);
    ListCard.textContent = '';

    const cards = data.map((item) => {

        // console.log('item: ', item);

        const card = document.createElement('li');
        card.className = 'other-films__item';

        const link = document.createElement('a');
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

    });

    //console.log('cards: ', cards);

    ListCard.append(...cards);//... - разбирает массив на элементы

    //console.log('card: ', card);


}


export default renderCard;