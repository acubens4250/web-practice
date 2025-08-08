const storage = window.sessionStorage

export const getItem = (ket, defaultValue) => {
    try {
        const storedValue = storage.getItem(key)
        if(storedValue) {
            return JSON.parse(storedValue)
        }

        return defaultValue
    } catch {
        return defaultValue
    }
}

export const setItem = (key, value) => {
    storage.setItem(key, JSON.stringify(value))
}

export default {
    getItem,
    setItem
}