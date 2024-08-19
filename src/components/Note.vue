<script>
    import moment from 'moment'
    export default {
        props: ['data'],
        computed: {
            date() {
                return moment(this.data.date).format('D MMMM YYYY')
            },
            bgNote() {
                return `bg-${this.data.background}-400`
            }
        }
    }
</script>

<template>
    <article class="flex-between flex-col rounded-[20px] p-6 min-h-[250px]" :class="bgNote">
        <p class="text-primary font-medium tracking-tight text-2xl self-start">
            {{ this.data.title }}
        </p>
        <section class="flex-between w-full">
            <p class="text-primary text-lg self-end">{{ date }}</p>
            <div class="flexx flex-col space-y-3">
                <div class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                    <i class="pi pi-plus text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                </div>
                <div class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                    <i class="pi pi-trash text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                </div>
                <div class="group bg-primary rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                    <i class="pi pi-pencil text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
                </div>
            </div>
        </section>
    </article>
</template>