export default function Editor({ $target, initialState = {
    title: '',
    content: ''
}, onEditing }) {
    const $editor = document.createElement('div')

    $editor.innerHTML = `
        <input type="text" name="title" style="width:600px"/>
        <div name="content" contentEditable="true" style="width:600px;height:400px;white-space:pre-wrap;"></div>
    `

    this.state = initialState
    let isSettingContent = false // content 설정 중 여부

    $target.appendChild($editor)

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        // title은 항상 갱신
        $editor.querySelector('[name=title]').value = this.state.title || ''

        // content는 입력 중이 아닐 때만 덮어씀
        if (!isSettingContent) {
            $editor.querySelector('[name=content]').innerText = this.state.content || ''
        }
    }

    this.render()

    // 제목 입력 이벤트
    $editor.querySelector('[name=title]').addEventListener('input', e => {
        const nextState = { 
            ...this.state,
            title: e.target.value
        }
        this.setState(nextState)
        onEditing(nextState)
    })

    // 내용 입력 이벤트
    const $content = $editor.querySelector('[name=content]')
    $content.addEventListener('input', e => {
        isSettingContent = true
        const nextState = {
            ...this.state,
            content: e.target.innerText.trim()
        }
        this.setState(nextState)
        onEditing(nextState)
        isSettingContent = false
    })
}
