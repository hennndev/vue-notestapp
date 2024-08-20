<script>
    export default {
        props: ['deleteNote', 'showConfirmModal', 'handleConfirmModal'],
        methods: {
            handleClose() {
                this.handleConfirmModal(null)
            },
            handleRemove() {
                this.deleteNote(this.showConfirmModal)
                this.handleConfirmModal(null)
            }
        }
    }
</script>

<template>
    <section v-show="this.showConfirmModal" class="fixed top-0 left-0 right-0 bottom-0 flex-center bg-[rgba(0,0,0,0.4)]">
        <section class="relative w-[600px] min-h-[200px] bg-white rounded-[25px] p-8">
            <section class="mb-5">
                <i class="pi pi-times absolute top-5 right-5 text-primary cursor-pointer" @click="handleClose"></i>
            </section>


            <section class="mt-5">
                <h2 class="text-2xl text-primary font-semibold tracking-tight">Are you sure want to remove this note?</h2>
                <div class="flexx mt-5 space-x-3">
                    <button 
                        type="button"
                        @click="handleRemove" 
                        class="outline-none cursor-pointer text-lg rounded-2xl py-2 px-6 text-white border border-transparent transition duration-200 ease-in bg-primary hover:bg-transparent hover:border-primary hover:text-primary">
                        Remove
                    </button>
                    <button 
                        type="button"
                        @click="handleClose" 
                        class="outline-none cursor-pointer text-lg rounded-2xl py-2 px-6 text-white border border-transparent transition duration-200 ease-in bg-gray-500 hover:bg-gray-600">
                        Cancel
                    </button>
                </div>
            </section>
        </section>
    </section>
</template>