export default function TodoList({ $target }) {
    const $list = document.createElement("div");
    
    $list.innerHTML = `
    <ul>
        ${initialState.map(tow => `<li>{row}</li>`).join("")}
    </ul>
    `;

    $target.appendChild($list);
}