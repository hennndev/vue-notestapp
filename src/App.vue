<script>
    import { v4 as uuidv4 } from 'uuid'
    import Notes from './components/Notes.vue'
    import SearchInput from './components/SearchInput.vue'
    import FormModal from './components/Modal/FormModal.vue'
    import NoteDetailModal from './components/Modal/NoteDetailModal.vue'
    import ConfirmationModal from './components/Modal/ConfirmationModal.vue'
    import Footer from './components/Footer.vue'

    export default {
        data() {
            return {
                query: '',
                notes: [],
                noteEdit: null,
                noteDetail: null,
                isEditNote: false,
                showModalFormNote: false,
                showModalDetailNote: false,
                showConfirmModal: null,
            }
        },
        components: {
            Notes,
            FormModal,
            SearchInput,
            ConfirmationModal,
            NoteDetailModal,
            Footer
        },
        created() {
            const notes = JSON.parse(localStorage.getItem('notes'))
            if(notes && notes.length > 0) {
                this.notes = notes
            }
        },
        watch: {
            query(newQuery) {
                const notes = JSON.parse(localStorage.getItem('notes')) || []
                const updatedNotes = notes.filter(n => n.title.toLowerCase().includes(newQuery.toLowerCase()))
                this.notes = updatedNotes
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
            editNote(id, note) {
                const updatedNotes = this.notes.map(n => {
                    if(n.id === id) {
                        return {
                            ...n,
                            ...note
                        }
                    } else {
                        return n
                    }
                })
                this.notes = updatedNotes
                localStorage.setItem('notes', JSON.stringify(updatedNotes))
            },
            deleteNote(id) {
                const updatedNotes = this.notes.filter(n => n.id !== id)
                this.notes = updatedNotes
                localStorage.setItem('notes', JSON.stringify(updatedNotes))
            },
            handleShowModalFormNote(value) {
                this.showModalFormNote = value
            },
            handleNoteEdit(data, value) {
                this.noteEdit = data
                this.isEditNote = value
            },
            handleConfirmModal(value) {
                this.showConfirmModal = value
            },
            handleQuery(value) {
                this.query = value
            },
            handleDetailNote(data, value) {
                this.noteDetail = data
                this.showModalDetailNote = value
            }
        }    
    }
</script>

<template>
    <main class="min-h-screen flex flex-col">
        <section class="container flex-1 py-4 pb-6">
            <SearchInput :handleQuery="this.handleQuery"/>
            <Notes 
                :notes="this.notes" 
                :handleShowModalFormNote="handleShowModalFormNote"
                :handleNoteEdit="handleNoteEdit"
                :handleConfirmModal="handleConfirmModal"
                :handleDetailNote="handleDetailNote"/>
            <FormModal 
                :addNote="addNote"    
                :editNote="editNote"
                :showModalFormNote="this.showModalFormNote" 
                :handleShowModalFormNote="handleShowModalFormNote"
                :isEditNote="isEditNote"
                :noteEdit="noteEdit"
                :handleNoteEdit="handleNoteEdit"/>
            <ConfirmationModal 
                :deleteNote="deleteNote"
                :showConfirmModal="showConfirmModal" 
                :handleConfirmModal="handleConfirmModal"/>
            <NoteDetailModal
                :showModalDetailNote="this.showModalDetailNote"
                :noteData="this.noteDetail"
                :handleDetailNote="handleDetailNote"
                
                :handleConfirmModal="handleConfirmModal"
                
                :handleShowModalFormNote="handleShowModalFormNote"
                :handleNoteEdit="handleNoteEdit"/>
        </section>
        <Footer/>
    </main>
</template>