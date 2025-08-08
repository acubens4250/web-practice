export default function SuggestKeywords({ $target, initialState, onKeywordSelect }) {
    const $suggest = document.createElement('div')
    $suggest.className = 'Keywords'
    $target.appendChild($suggest)

    this.state = initialState || []

    this.setState = nextState => {
        this.state = {...this.state, ...nextState}
        this.render()
    }

    this.render = () => {
        $suggest.innerHTML = `
        <ul>
            ${this.state.keywords.map(keyword => `
                <li>${keyword}</li>
            `).join('')}
        </ul>
        `

        $suggest.style.display = this.state.keywords.length > 0 ? 'block' : 'none'
    }
    this.render()

    $suggest.addEventListener('click', e => {
        const $li = e.target.closest('li')

        if($li) {
            onKeywordSelect($li.textContent)
        }
    })

    window.addEventListener('keydown', (e) => {
        if($suggest.style.display !== 'none') {
            // arrow down을 입력했을 때
            if(e.key === 'Arrow Up'){
                
            }
            // arrwo up을 입력했을 때
            // enter를 입력했을 때
        }
    })
}