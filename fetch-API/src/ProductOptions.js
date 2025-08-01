export default function ProductOptions({ $target, initialState, onSelect }) {
    const $select = document.createElement('select');

    $target.appendChild($select);

    /*
    *   상품옵션 이름 렌더링 시 상품명 + 옵션명 + 재고 : n개 이런 형식으로 보여줘야 함
    *   재고가 0인 상품의 경우 옵션을 선택하지 못하게 함
    */

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.createOptionFullName = ({ optionName, optionPrice, stock}) => {
        return `${optionName} ${optionPrice> 0 ? `(옵션가 ${optionPrice})` : ''} | ${stock > 0 ? `재고 ${stock}` : '재고없음'}`
    }
    
    $select.addEventListener('change', (e) => {
        const optionId =  parseInt(e.target.value);
        const option = this.state.find(option => option.optionId === optionId);

        if(option){
            onSelect(option);
        }
    })

    this.render = () => {
        if(this.state && Array.isArray(this.state)) {
            $select.innerHTML = `
            <option value="">옵션을 선택해주세요</option>
            ${this.state.map(option => `<option ${option.stock === 0 ? 'disabled' : ''}value="${option.optionId}">${this.createOptionFullName(option)}</option>`).join('')}
            `
        }
    }
    this.render();
}