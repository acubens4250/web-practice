export const API_END_POINT = 'https://mwu2.todo.edu-api.programmers.co.kr';

export const request = async (url, options = {}) => {
    try {
        const res = await fetch(`${API_END_POINT}${url.startsWith('/') ? url : '/' + url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(res.ok) {
            const json = await res.json()
            return json
        }
        throw new Error('Api 요청에 실패했습니다.')
    } catch(e) {
        alert(e.message)
    }
}