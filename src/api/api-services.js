import galleryCard from '../handlebars/galleryCard.hbs'
import { errorText, noMorePictures } from '../js/messages';

const axios = require('axios').default;


export default class GalleryApiService {
    constructor() {
        this.searchQuery = ''
        this.page = 1
    }

    fetchImages() {
        const API_KEY = '25794785-608ceb6767526617113ab6e38'

        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
        axios.get(url).then(
                async function(data) {
                    if (data.data.hits.length === 0) {
                        return errorText()
                    }
                    makesGallery(data)
                })
            .then(data => {
                this.incrementPage()
                if (this.page === 13) {
                    const loadMoreItem = document.querySelector('.footer')
                    loadMoreItem.classList.add('opacity')
                    return noMorePictures()
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    resetPage() {
        this.page = 1
    }
    incrementPage() {
        this.page += 1
    }

}

function makesGallery(data) {
    const galleryRef = document.querySelector('.gallery')
    galleryRef.insertAdjacentHTML('beforeend', galleryCard(data))
}