<script>
    import moment from 'moment'
    export default {
        props: ['data', 'handleShowModalFormNote', 'handleNoteEdit', 'handleConfirmModal'],
        methods: {
            handleOpenModalEdit() {
                this.handleShowModalFormNote(true)
                this.handleNoteEdit(this.data, true)
            }
        },
        computed: {
            date() {
                return moment(this.data.date).format('D MMMM YYYY')
            },
            bgNote() {
                return `bg-${this.data.background}-400`
            },
            findSingleLongWord() {
                return this.data.title.split(' ').some(w => w.length >= 15)
            }
        }
    }
</script>

<template>
    <article class="flex-between flex-col rounded-[20px] p-6 min-h-[250px]" :class="bgNote">
        <p class="text-primary font-medium tracking-tight text-2xl self-start" :class="findSingleLongWord ? 'break-all' : ''">
            {{ this.data.title }}
        </p>
        <section class="flex-between w-full">
            <p class="text-primary text-lg self-end">{{ date }}</p>
            <div class="flexx flex-col space-y-3">
                <div 
                    @click="this.handleShowModalFormNote(true)"
                    class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                    <i class="pi pi-plus text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                </div>
                <div 
                    @click="this.handleConfirmModal(this.data.id)"
                    class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                    <i class="pi pi-trash text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                </div>
                <div 
                    @click="handleOpenModalEdit"
                    class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                    <i class="pi pi-pencil text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                </div>
            </div>
        </section>
    </article>
</template>