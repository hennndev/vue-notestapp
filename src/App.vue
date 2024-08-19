<script>
    import { v4 as uuidv4 } from 'uuid'
    import Notes from './components/Notes.vue'
    import SearchInput from './components/SearchInput.vue'
    import FormModal from './components/Modal/FormModal.vue'

    export default {
        data() {
            return {
                showModalAddNote: false,
                notes: []
            }
        },
        components: {
            SearchInput,
            FormModal,
            Notes
        },
        created() {
            const notes = JSON.parse(localStorage.getItem('notes'))
            if(notes && notes.length > 0) {
                this.notes = notes
            }
        },
        methods: {
            addNote(note) {
                const newNote = {
                    ...note,
                    id: uuidv4()
                }
                this.notes.push(newNote)
                localStorage.setItem('notes', JSON.stringify(this.notes))
            },
            handleShowModalAddNote(value) {
                this.showModalAddNote = value
            }
        }    
    }
</script>

<template>
    <main class="container py-4 pb-6">
        <SearchInput/>
        <Notes :notes="this.notes" :handleShowModalAddNote="handleShowModalAddNote"/>
        <FormModal 
            :showModalAddNote="this.showModalAddNote" 
            :handleShowModalAddNote="handleShowModalAddNote"
            :addNote="addNote"/>
    </main>
</template>