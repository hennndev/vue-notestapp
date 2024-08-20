<script>
    import moment from 'moment'
    
    export default {
        data() {
            return {
                values: {
                    title: '',
                    date: moment(new Date()).format('YYYY-MM-DD'),
                    background: ''
                }
            }
        },
        props: ['addNote', 'editNote', 'showModalFormNote', 'handleShowModalFormNote', 'isEditNote', 'noteEdit', 'handleNoteEdit'],
        watch: {
            isEditNote() {
                if(this.isEditNote) {
                    this.values = {
                        title: this.noteEdit.title,
                        date: moment(new Date(this.noteEdit.date)).format('YYYY-MM-DD'),
                        background: this.noteEdit.background
                    }
                }
            },
        },
        methods: {
            handleSubmit() {
                if(this.isEditNote) {
                    this.editNote(this.noteEdit.id, this.values)
                    this.handleNoteEdit(null, false)
                } else {
                    this.addNote(this.values)
                }
                this.values = {
                    title: '',
                    date: moment(new Date()).format('YYYY-MM-DD'),
                    background: ''
                }
                this.handleShowModalFormNote(false)
            },
            handleClose() {
                this.handleShowModalFormNote(false)
                this.handleNoteEdit(null, false)
            }
        },
        computed: {
            fieldFilled() {
                return Object.values(this.values).every(v => v !== '')
            }
        }
    }
</script>

<template>
    <section v-show="this.showModalFormNote"class="fixed top-0 left-0 right-0 bottom-0 flex-center bg-[rgba(0,0,0,0.4)]">
        <section class="relative w-[600px] min-h-[300px] bg-white rounded-[25px] p-8">
            <section class="mb-5">
                <i class="pi pi-times absolute top-5 right-5 text-primary cursor-pointer" @click="handleClose"></i>
                <h1 class="text-primary text-3xl font-semibold tracking-tighter">{{ this.isEditNote ? 'Edit' : 'New' }} Note</h1>
            </section>

            
            <form class="w-full flex flex-col" @submit.prevent="handleSubmit">
                <div class="mb-5">
                    <label for="title" class="text-primary font-normal text-xl mb-4">Note title</label>
                    <input 
                        type="text" 
                        placeholder="Enter note title" 
                        v-model="this.values.title"
                        class="w-full border-b border-gray-400 text-lg text-primary py-2 px-1 outline-none mt-2">
                </div>
                <div class="mb-5">
                    <label for="date" class="text-primary font-normal text-xl mb-4">Note date</label>
                    <input 
                        type="date" 
                        placeholder="Enter note title" 
                        v-model="this.values.date"
                        class="w-full border-b border-gray-400 text-lg text-primary py-2 px-1 outline-none mt-2">
                </div>
                <div class="mb-7">
                    <label for="date" class="text-primary font-normal text-xl mb-4">Choose Background</label>
                    <div class="flexx space-x-5 mt-4">
                        <div>
                            <label 
                                for="orange" 
                                class="w-6 h-6 rounded-full bg-orange-400 inline-block cursor-pointer transition duration-200 ease-in"
                                :class="this.values.background === 'orange' ? 'scale-150' : ''"/>
                            <input 
                                type="radio" 
                                class="hidden" 
                                value="orange"
                                id="orange"
                                v-model="this.values.background">
                        </div>
                        <div>
                            <label 
                                for="green" 
                                class="w-6 h-6 rounded-full bg-green-400 inline-block cursor-pointer transition duration-200 ease-in"
                                :class="this.values.background === 'green' ? 'scale-150' : ''"/>
                            <input 
                                type="radio" 
                                class="hidden" 
                                value="green"
                                id="green"
                                v-model="this.values.background">
                        </div>
                        <div>
                            <label 
                                for="blue" 
                                class="w-6 h-6 rounded-full bg-blue-400 inline-block cursor-pointer transition duration-200 ease-in"
                                :class="this.values.background === 'blue' ? 'scale-150' : ''"/>
                            <input 
                                type="radio" 
                                class="hidden" 
                                value="blue"
                                id="blue"
                                v-model="this.values.background">
                        </div>
                        <div>
                            <label 
                                for="pink" 
                                class="w-6 h-6 rounded-full bg-pink-400 inline-block cursor-pointer transition duration-200 ease-in"
                                :class="this.values.background === 'pink' ? 'scale-150' : ''"/>
                            <input 
                                type="radio" 
                                class="hidden" 
                                value="pink"
                                id="pink"
                                v-model="this.values.background">
                        </div>
                        <div>
                            <label 
                                for="stone" 
                                class="w-6 h-6 rounded-full bg-stone-400 inline-block cursor-pointer transition duration-200 ease-in"
                                :class="this.values.background === 'stone' ? 'scale-150' : ''"/>
                            <input 
                                type="radio" 
                                class="hidden" 
                                value="stone"
                                id="stone"
                                v-model="this.values.background">
                        </div>
                    </div>
                </div>
                <button 
                    type="submit" 
                    class="outline-none cursor-pointer text-lg rounded-2xl py-4 px-6 text-white border border-transparent transition duration-200 ease-in"
                    :disabled="!fieldFilled"
                    :class="!fieldFilled ? 'bg-gray-500 hover:bg-gray-500 cursor-not-allowed' : 'bg-primary hover:bg-transparent hover:border-primary hover:text-primary'">
                    Submit
                </button>
            </form>
        </section>

    </section>
</template>