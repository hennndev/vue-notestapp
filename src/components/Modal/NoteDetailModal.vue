<script>
    import moment from 'moment'
    export default {
        props: ['noteData', 'showModalDetailNote', 'handleDetailNote', 'handleConfirmModal', "handleShowModalFormNote", "handleNoteEdit"],
        methods: {
            handleClose() {
                this.handleDetailNote(null, false)
            },
            handleOpenModalEdit() {
                this.handleShowModalFormNote(true)
                this.handleNoteEdit(this.noteData, true)
                this.handleDetailNote(null, false)
            },
            handleOpenModalRemove() {
                this.handleConfirmModal(this.noteData?.id)
                this.handleClose()
            }
        },
        computed: {
            date() {
                return moment(this.noteData?.date).format('D MMMM YYYY')
            },
        }
    }
</script>

<template>
    <section v-show="this.showModalDetailNote" class="fixed top-0 left-0 right-0 bottom-0 flex-center bg-[rgba(0,0,0,0.4)]">
        <section class="relative w-[600px] min-h-[200px] rounded-[25px] p-8 bg-white">
            <section class="mb-5">
                <i class="pi pi-times absolute top-5 right-5 text-primary cursor-pointer" @click="handleClose"></i>
                <h1 class="text-primary text-3xl font-semibold tracking-tighter">{{ this.noteData?.title }} Note</h1>
                <p class="text-primary mt-5 text-lg tracking-tight">{{ date }}</p>
            </section>

            <section class="mt-5">
                <ul class="flex flex-col space-y-2 list-disc px-5">
                    <li class="text-primary text-xl tracking-tight font-semibold">Learn about reactive Vue.js</li>
                    <li class="text-primary text-xl tracking-tight font-semibold">Learn about directive Vue.js</li>
                </ul>
                <div class="flex-end space-x-3">
                    <div 
                        class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer border border-transparent hover:bg-white hover:border-primary transition duration-200 ease-in">
                        <i class="pi pi-plus text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                    </div>
                    <div 
                        @click="handleOpenModalRemove"
                        class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer border border-transparent hover:bg-white hover:border-primary transition duration-200 ease-in">
                        <i class="pi pi-trash text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                    </div>
                    <div 
                        @click="handleOpenModalEdit"
                        class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer border border-transparent hover:bg-white hover:border-primary transition duration-200 ease-in">
                        <i class="pi pi-pencil text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                    </div>
                </div>
            </section>
        </section>
    </section>
</template>