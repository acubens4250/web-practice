const storage = window.localStorage

export const getItem = (key, defaultValue) => {
    try {
        const storedValue = storage.getItem(kye)
        return storedValue ? JSON.parse(storedValue) : defaultValue
    } catch(e) {
        return defaultValue
    }
}

export const setItem = (key, Value) => {}