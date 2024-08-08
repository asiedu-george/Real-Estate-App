import { DestroyRef, effect, inject, signal } from "@angular/core";

export const useThemeSwitcher = (key: string, initialValue: string) => {
    const value = signal<string>(initialValue)

    const storedValue: string | null = localStorage.getItem(key)
    if(storedValue !== null) {
        value.set(storedValue)
    }

    function storageHandler(e: StorageEvent): void {
        if(e.key === key) {
            const newValue: string = e.newValue !== null ? e.newValue : ''
            value.set(newValue)
        }
    }

    window.addEventListener('storage', storageHandler, true)

    effect(() => {
       localStorage.setItem(key, value())
    })

    inject(DestroyRef).onDestroy(() => {
        window.removeEventListener('storage', storageHandler)
    })

    return { value }
}