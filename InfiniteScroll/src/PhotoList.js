export default function PhotoList({ $target, initialState, onScrollEnded }) {
    let isInitialize = false
    const $photoList = document.createElement('ul')
    $target.appendChild($photoList)
    this.state = initialState || [] 

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if(!isInitialize) {
            $photoList.innerHTML = `
            <ul class="PhotoList_photos"></ul>
            <button class="photoList_loadmore" style="width:100%; height: 100px; font-size: 30px">Load More</button>
            `
            isInitialize = true
        }

        const $photos = $photoList.querySelector('.PhotoList_photos')
        
        this.state.forEach(photo => {
            if ($photos.querySelector(`[data-id="${photo.id}"]`) === null) {
                const $li = document.createElement('li')
                $li.setAttribute('data-id', photo.id)
                $li.style = 'list-style: none;'
                $li.innerHTML = `<img width="100%" src="https://picsum.photos/200?random=${photo.id}" alt="${photo.title}" />`

                $photos.appendChild($li)
            }
        })
    }

    this.render()

    $photoList.addEventListener('click', e => {
        if(e.target.className === 'photoList_loadmore') {
            onScrollEnded()
        }
    })
}
