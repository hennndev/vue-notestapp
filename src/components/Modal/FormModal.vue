<script>
    import moment from 'moment'
    
    export default {
        data() {
            return {
                values: {
                    title: '',
                    date: moment(new Date()).format('YYYY-MM-DD')
                }
            }
        },
        props: ['showModal', 'handleShowModal'],
        methods: {
            handleSubmit() {

            }
        }
    }
</script>

<template>
    <section v-show="this.showModal"class="fixed top-0 left-0 right-0 bottom-0 flex-center bg-[rgba(0,0,0,0.4)]">
        <section class="relative w-[600px] min-h-[300px] bg-white rounded-[25px] p-8">
            <section class="mb-5">
                <i class="pi pi-times absolute top-5 right-5 text-primary cursor-pointer" @click="this.handleShowModal(false)"></i>
                <h1 class="text-primary text-3xl font-semibold tracking-tighter">New Note</h1>
            </section>
            <form class="w-full flex flex-col" @submit.prevent="handleSubmit">
                <div class="mb-5">
                    <label for="title" class="text-primary font-normal text-xl mb-4">Note title</label>
                    <input 
                        type="text" 
                        placeholder="Enter note title" 
                        v-model="this.values.title"
                        class="w-full border-b border-gray-400 text-lg text-primary py-2 px-1 outline-none">
                </div>
                <div class="mb-10">
                    <label for="date" class="text-primary font-normal text-xl mb-4">Note date</label>
                    <input 
                        type="date" 
                        placeholder="Enter note title" 
                        v-model="this.values.date"
                        class="w-full border-b border-gray-400 text-lg text-primary py-2 px-1 outline-none">
                </div>
                <button type="submit" class="bg-primary outline-none cursor-pointer text-lg rounded-2xl py-4 px-6 text-white border border-transparent transition duration-200 ease-in hover:bg-transparent hover:border-primary hover:text-primary">Submit</button>
            </form>
        </section>

    </section>
</template>