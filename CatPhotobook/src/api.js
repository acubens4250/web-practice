const API_END_POINT = 'https://cat-photos.edu-api.programmers.co.kr'

export const request = async (url, options = {}, retryCount = 3) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`, options)
        if (!res.ok) throw new Error(`API Call Fail: ${res.status}`)
        return await res.json()
    } catch (e) {
        if (retryCount > 0) {
            console.warn(`재시도 남음: ${retryCount}회`, e.message)
            await new Promise(res => setTimeout(res, 500)) // 0.5초 대기
            return request(url, options, retryCount - 1)
        }
        alert('서버 응답 실패: ' + e.message)
        return []
    }
}
