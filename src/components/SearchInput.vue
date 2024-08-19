<script>
    export default {
        data() {
            return {
                searchTemp: '',
                isFocused: false
            }
        },
        methods: {
            handleFocus() {
                this.isFocused = true
            },
            handleBlur() {
                this.isFocused = false
            },
            handleClear() {
                this.searchTemp = ''
            }
        }
    }
</script>

<template>
    <section class="flexx w-full border border-gray-200 rounded-lg pl-6 pr-2" :class="isFocused ? 'border-2 border-primary' : ''">
        <i class="pi pi-search text-md text-gray-400 mr-4"></i>
        <input 
            type="text" 
            placeholder="Find notes title" 
            v-model="this.searchTemp"
            @focus="handleFocus"
            @blur="handleBlur"
            class="flex-1 py-2 text-base outline-none text-primary mr-4">
        <i v-show="this.searchTemp" class="pi pi-times text-md text-gray-400 mr-4 cursor-pointer" @click="handleClear"></i>
    </section>
</template>