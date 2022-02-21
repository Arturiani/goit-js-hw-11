import { Notify } from 'notiflix/build/notiflix-notify-aio';


function errorText() {
    return Notify.failure("Sorry, there are no images matching your search query. Please try again.")
}

function noMorePictures() {
    return Notify.failure("We're sorry, but you've reached the end of search results.")
}

export { errorText, noMorePictures }