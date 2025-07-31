import { setItem, getItem, removeItem } from './storage.js'

const ToDO_TEMP_SAVE_KEY = 'TODO_TEMP_SAVE_KEY'
export default function TodoForm({
    $target,
    onSubmit
}) {
    const $form = document.createElement('form')

    $target.appendChild($form)

    this.render = () => {
        $form.innerHTML = `
            <input type="text" placeholder="할 일을 입력해주세요">
            <button>추가하기</button>
        `
    }

    $form.addEventListener('submit', (e) => {
        e.preventDefault()

        const $input = $form.querySelector('input')
        const content = $input.value.trim()

        onSubmit(content)
        $input.value = ''
        removeItem(ToDO_TEMP_SAVE_KEY)
    })

    this.render()

    const $input = $form.querySelector('input')
    $input.value = getItem(ToDO_TEMP_SAVE_KEY, '')

    $input.addEventListener('keyup', (e) => {
        setItem(ToDO_TEMP_SAVE_KEY, e.target.value)
    })
}