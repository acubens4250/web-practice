const storage = window.localStorage

export const setItem = (key, value) => {
    try {
        storage.setItem(key, JSON.stringify(value))
        console.log(`로컬스토리지에 ${key} 저장 성공`, value)
    } catch(e) {
        console.error('로컬스토리지에 저장하는데 실패했습니다.', e)
    }
    
}

export const getItem = (key, defaultValue) => {
    try{
        const storedValue = storage.getItem(key)

        if(!storedValue) {
            return defaultValue
        }
        const parsedValue = JSON.parse(storedValue)
        return parsedValue
    } catch(e) {
        console.error('로컬스토리지에서 가져오는 데 실패했습니다.', e)
        return defaultValue
    }
}

export const removeItem = (key) => {
    storage.removeItem(key)
}