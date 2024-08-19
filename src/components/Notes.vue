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
        <h1 class="text-6xl font-medium text-primary tracking-tighter">Notes</h1>

        <section class="mt-10 grid grid-cols-notes gap-x-[20px] gap-y-[40px]">
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </section>
    </section>
</template>