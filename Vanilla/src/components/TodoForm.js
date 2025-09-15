export default function TodoForm({ $target }) {
    const $form = document.createElement("form");

    $form.innerHTML = `
        <input />
        <button type="submit">입력</button>
    `;

    $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $inpust = $form.querySelector("input");

        const text = $inpust.value;

    });

    $target.appendChild($form);
}