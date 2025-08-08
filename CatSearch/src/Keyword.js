export default function Keyword ({ $target, initialState, onKeywordInput }) {
    const $keyword = document.createElement('input')
    $keyword.className = 'Keyword'

    $target.appendChild($keyword)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        $keyword.value = this.state.value
    }

    $keyword.addEventListener('keyup', e=> {
        if(e.keyt === 'Enter') {
            e.preventDefault()
            ondragenter()
        } else{
                    onKeywordInput(e.target.value)
        }
    })
}