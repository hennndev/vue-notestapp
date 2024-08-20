<script>
import queryString from 'query-string';

    export default {
        data() {
            return {
                searchTemp: '',
                isFocused: false
            }
        },
        props: ['handleQuery'],
        created() {
            const queries = queryString.parse(window.location.search)
            if(queries.q) {
                this.searchTemp = queries.q
            }
        },
        watch: {
            searchTemp() {
                const url = new URL(window.location.href)
                url.searchParams.set('q', this.searchTemp)
                this.handleQuery(this.searchTemp)
                if(this.searchTemp === '') {
                    url.searchParams.delete('q')
                }
                history.replaceState(null, '', url.toString())
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
    <section class="flexx w-full border rounded-xl pl-6 pr-2" :class="isFocused ? 'border-transparent bg-primary' : 'border-gray-200'">
        <i class="pi pi-search text-lg text-gray-400 mr-4"></i>
        <input 
            type="text" 
            placeholder="Find notes title" 
            v-model="this.searchTemp"
            @focus="handleFocus"
            @blur="handleBlur"
            class="flex-1 py-2 text-lg outline-none text-primary mr-4 bg-transparent"
            :class="isFocused ? 'text-white' : ''">
        <i v-show="this.searchTemp" class="pi pi-times text-md text-gray-400 mr-4 cursor-pointer" @click="handleClear"></i>
    </section>
</template>