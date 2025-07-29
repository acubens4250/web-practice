const API_END_POINT = 'https://misc.edu-api.programmers.co.kr/product-options?product.id';

export const request = (url) => {
    return fetch(`${API_END_POINT}${url}`)
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        throw new Error(`${res.status} Error`)
    })
    .catch(e => alert(e.message))
}