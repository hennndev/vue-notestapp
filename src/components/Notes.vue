<script>
import Note from './Note.vue'

    export default {
        props: ['notes', 'handleShowModalAddNote'],
        components: {
            Note
        }
    }
</script>

<template>
    <section class="mt-16">
        <section class="flex-between">
            <h1 class="text-6xl font-medium text-primary tracking-tighter">Notes</h1>

            <div class="flexx space-x-3">
                <div class="group bg-primary rounded-full py-3 px-6 flexx space-x-3 cursor-pointer border-2 border-transparent hover:bg-white hover:border-primary transition duration-200 ease-in" @click="this.handleShowModalAddNote(true)">
                    <i class="pi pi-plus text-white group-hover:text-primary transition duration-200 ease-in"></i>
                    <p class="text-lg text-white group-hover:text-primary transition duration-200 ease-in tracking-tight">New note</p>
                </div>

                <div class="group bg-primary rounded-full py-3 px-6 flexx space-x-3 cursor-pointer border-2 border-transparent hover:bg-white hover:border-primary transition duration-200 ease-in" @click="this.handleShowModalAddNote(true)">
                    <i class="pi pi-filter text-white group-hover:text-primary transition duration-200 ease-in"></i>
                    <p class="text-lg text-white group-hover:text-primary transition duration-200 ease-in tracking-tight">Filter notes</p>
                </div>
            </div>
        </section>

        <section class="mt-10 grid grid-cols-notes gap-x-[20px] gap-y-[40px]">
            <template v-for="note in this.notes" :key="note.id">
                <Note :data="note"/>
            </template>
        </section>
    </section>
</template>