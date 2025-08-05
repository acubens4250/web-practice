import PhotoList from './PhotoList.js'
import { request } from './api.js'

export default function App({ $target }) {
    const $h1 = document.createElement('h1')
    $h1.innerHTML = 'Cat Photos!'
    $h1.style.textAlign = 'center'
    $target.appendChild($h1)

    this.state = {
        limit: 5,
        start: 0,
        photos: [],
    }
    const photoListComponent = new PhotoList({
        $target,
        initialState: this.state.photos
    })

    this.setState = (nextState) => {
        this.state = nextState
        photoListComponent.setState(nextState.photos)
    }

    const fetchPhotos = async () => {
    const { limit, start } = this.state
    const photos = await request(`/photos?_limit=${limit}&_start=${start}`)
    this.setState({
        ...this.state,
        photos
    })
    }

    fetchPhotos()
}

