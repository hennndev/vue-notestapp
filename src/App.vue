<script>
    import Notes from './components/Notes.vue'
    import SearchInput from './components/SearchInput.vue'
    import FormModal from './components/Modal/FormModal.vue'

    export default {
        data() {
            return {
                showModal: false
            }
        },
        components: {
            SearchInput,
            FormModal,
            Notes
        },
        methods: {
            handleShowModal(value) {
                this.showModal = value
            }
        }    
    }
</script>

<template>
    <main class="container py-4 pb-6">
        <SearchInput/>
        <Notes :handleShowModal="handleShowModal"/>
        <FormModal :showModal="this.showModal" :handleShowModal="handleShowModal"/>
    </main>
</template>