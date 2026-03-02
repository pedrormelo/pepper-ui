import { onMounted, ref, watch } from 'vue';

const THEME_KEY = 'pepper-ui-theme';
const isDark = ref(false);

function applyTheme(enabled) {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.classList.toggle('dark', enabled);
}

export function useTheme() {
    onMounted(() => {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === 'dark' || saved === 'light') {
            isDark.value = saved === 'dark';
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        applyTheme(isDark.value);
    });

    watch(isDark, (value) => {
        applyTheme(value);
        localStorage.setItem(THEME_KEY, value ? 'dark' : 'light');
    });

    const toggleTheme = () => {
        isDark.value = !isDark.value;
    };

    return {
        isDark,
        toggleTheme,
    };
}