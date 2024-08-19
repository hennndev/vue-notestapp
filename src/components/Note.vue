<script>
    export default {
        
    }
</script>

<template>
    <article class="flex-between flex-col bg-orange-500 rounded-lg p-6 min-h-[250px]">
        <p class="text-white font-medium tracking-tight text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptate consectetur adipisci minima corporis totam.</p>

        <section class="flex-between w-full">
            <p class="text-white text-lg">{{ new Date().toLocaleDateString() }}</p>
            <div class="group bg-primary rounded-full p-3 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in">
                <i class="pi pi-pencil text-sm text-white group-hover:text-primary transition duration-200 ease-in"></i>
            </div>
        </section>
    </article>
</template>