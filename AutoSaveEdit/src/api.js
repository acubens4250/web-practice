export const API_END_POINT = 'https://misc.edu-api.programmers.co.kr'

export const request = async (url, options = {}) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`, {
            ...options,
            headers: {
                'Content-Type' : 'application/json',
            }

        })

        if(res.ok) {
            return await res.json()
        }

        const errText = await res.text()
        console.error(`API 요청 실패: ${res.status} ${res.statusText}`, errText)
        throw new Error('API 처리 중 오류가 발생했습니다.')

    } catch(e) {
        console.error(e)
        alert(e.message)
    }
}