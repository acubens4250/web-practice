// src/api.js
const API_END_POINT = 'https://jsonplaceholder.typicode.com'

export const request = async (url) => {
    try {
    const res = await fetch(`${API_END_POINT}${url}`)
    if (!res.ok) {
        throw new Error('요청 실패')
    }
    return await res.json()
    } catch (e) {
    alert(e.message)
    }
}
