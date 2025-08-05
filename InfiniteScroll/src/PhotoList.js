export default function PhotoList({ $target, initialState, onScrollEnded }) {
    const $photoList = document.createElement('ul')
    $target.appendChild($photoList)
    this.state = initialState || [] 

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $photoList.innerHTML = `
        <ul>
            ${this.state.map(photo => 
                `
                    <li>
                        <img width="100%" src="https://picsum.photos/200?random=${photo.id}" alt="${photo.title}"/>
                    </li>
                `
            ).join('')}
        </ul>
        <button class="photoList_loadmore">Load More</button>
        `
    }

    this.render()

    $photoList.addEventListener('click', e => {
        if(e.target.className === 'photoList_loadmore') {
            alert('버튼을 눌렀습니다.')
        }
    })
}
