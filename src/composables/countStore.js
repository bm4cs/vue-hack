import { ref } from 'vue'

export const globalCount = ref(100);

const incrementGlobalCount = () => {
    globalCount.value += 50
}

export function useCount() {
    const localCount = ref(50)

    const incrementLocalCount = (amount) => {
        localCount.value += amount
    }

    return {
        incrementGlobalCount,
        incrementLocalCount,
        globalCount,
        localCount
    }
}