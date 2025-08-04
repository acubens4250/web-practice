export default function Editor({ $target, initialState = {
    title: '',
    content: ''
}, onEditing }) {
    const $editor = document.createElement('div')

    let isinitialized = false
    this.state = initialState

    $editor.style.width = '600px'
    $editor.style.height = '450px'

    $target.appendChild($editor)

    this.setState = (nextState) => {
        this.state = nextState
        const $title = $editor.querySelector(`[name=title]`)
        const $content = $editor.querySelector(`[name=content]`)

        if ($title) $title.value = this.state.title
        if ($content) $content.value = this.state.content

        this.render()
    }
    this.render = () => {
        if(!isinitialized){
            $editor.innerHTML = `
            <input type="text" name="title" style="width:600px" value="${this.state.title}"/>
            <textarea name="content" style="width:600px;height:400px">${this.state.content}</textarea>
        `
        isinitialized = true
        }        
    }

    this.render()

    $editor.addEventListener('keyup', e => {
        const{ target } = e

        const name = target.getAttribute('name')
        
        if(this.state[name] !== undefined) {
            const nextState = { 
                ...this.state,
            [name]: target.value
            }
            this.setState(nextState)
            onEditing(this.state)
        }
    })
}