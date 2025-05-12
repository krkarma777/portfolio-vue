import { ref, watchEffect } from 'vue'

const isDark = ref(false)

watchEffect(() => {
    const root = document.documentElement
    if (isDark.value) {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }
})

export function useTheme() {
    return {
        isDark,
        toggle: () => (isDark.value = !isDark.value),
    }
}
