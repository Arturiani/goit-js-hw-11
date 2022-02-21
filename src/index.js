import './sass/main.scss';
import GalleryApiService from './api/api-services';


const galleryApiService = new GalleryApiService()


const formRef = document.querySelector('form')
const loadMoreBtn = document.querySelector('.load-more')
const loadMoreItem = document.querySelector('.footer')


function fetchGallery(e) {
    e.preventDefault()
    galleryApiService.query = document.querySelector('input').value.trim()
    galleryApiService.resetPage()
    galleryApiService.fetchImages()
    clearGallery()
    loadMoreItem.classList.remove('opacity')
}

function onLoadMore() {
    galleryApiService.fetchImages()
}

function clearGallery() {
    const galleryRef = document.querySelector('.gallery')
    galleryRef.innerHTML = ''
}


formRef.addEventListener('submit', fetchGallery)
loadMoreBtn.addEventListener('click', onLoadMore)