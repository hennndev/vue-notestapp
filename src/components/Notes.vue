<script>
import Note from './Note.vue';

    export default {
        components: {
            Note
        }
    }
</script>

<template>
    <section class="mt-16">
        <section class="flex-between">
            <h1 class="text-6xl font-medium text-primary tracking-tighter">Notes</h1>
            <div class="group bg-primary rounded-full py-3 px-6 flexx space-x-3 cursor-pointer border-2 border-transparent hover:bg-white hover:border-primary transition duration-200 ease-in">
                <i class="pi pi-plus text-white group-hover:text-primary transition duration-200 ease-in"></i>
                <p class="text-lg text-white group-hover:text-primary transition duration-200 ease-in">New note</p>
            </div>
        </section>

        <section class="mt-10 grid grid-cols-notes gap-x-[20px] gap-y-[40px]">
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </section>
    </section>
</template>