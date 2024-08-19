<script>
    import Notes from './components/Notes.vue';
    import SearchInput from './components/SearchInput.vue';

    export default {
        components: {
            SearchInput,
            Notes
        }    
    }
</script>

<template>
    <main class="container py-4 pb-6">
        <SearchInput/>
        <Notes/>
    </main>
</template>