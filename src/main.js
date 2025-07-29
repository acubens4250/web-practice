import ProductOptions from "./ProductOptions.js"
const dummyData = [
    {
        optionId:1,
        optionName: "더미 데이터다!",
        optionPrice: 100,
        stock:10
    },
    {
        optionId:2,
        optionName: "더미 데이터다!",
        optionPrice: 100,
        stock:10
    },
    {
        optionId:3,
        optionName: "더미 데이터다!",
        optionPrice: 100,
        stock:10
    }
]

const $target = document.querySelector('#app');

new ProductOptions({
    $target,
    initialState: dummyData,
    onSelect: (option) => {
        alert(option.optionName)
    }
})