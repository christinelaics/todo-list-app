import { useState, useEffect} from "react";


export function useLocalStorage<T>(key: string, initial: T) {

    const [state, setState] = useState<T>(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw ? (JSON.parse(raw) as T) : initial;
        } catch {
            return initial
        }
    });

    // watches state and writes it to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch {

        }
    }, [key, state]);

    //listen for "storage" events from other tabs / windows
    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
            if (e.key === key) {
                setState(JSON.parse(e.newValue ?? "null"));
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage); //clean up
    }, [key]);

    return [state, setState] as const;

}