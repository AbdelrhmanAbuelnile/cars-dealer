<template>
    <div class="hello text-primary-white flex flex-col md:py-5 py-3 overflow-x-hidden">
        <header class="flex flex-row justify-between items-center lg:gap-64 border-b border-header-border md:py-16 lg:w-11/12 px-3 mx-auto">
            <div class="flex flex-row md:gap-4 gap-2 justify-between items-center pb-5">
                <img src="../assets/imgs/logotype.svg" alt="logo">
                <button @click="show = !show" class="ml-14 bg-card-red text-base font-semibold py-[15px] px-4 rounded-lg flex flex-row justify-between items-center gap-2">
                    <Icon name="ic:sharp-menu" class="text-xl"/>
                    <p>Services</p>
                </button>
                <div v-if="show" class="absolute top-24 lg:top-0 right-0 lg:left-0 py-10 lg:py-16 lg:w-1/6 w-full h-screen bg-body">
                    <ul class="flex flex-col justify-center items-start px-4 gap-8">
                        <li><a href="#" @click="show = !show" class="text-4xl border-b border-slate-300 hover:text-slate-300 duration-150">Works</a></li>
                        <li><a href="#" @click="show = !show" class="text-4xl border-b border-slate-300 hover:text-slate-300 duration-150">About</a></li>
                        <li><a href="#" @click="show = !show" class="text-4xl border-b border-slate-300 hover:text-slate-300 duration-150">Stoks</a></li>
                        <li><a href="#" @click="show = !show" class="text-4xl border-b border-slate-300 hover:text-slate-300 duration-150">Contacts</a></li>
                    </ul>
                </div>
            </div>
            <nav @click="show = !show" class="ml-80 hidden md:block">
                <ul class="flex flex-row justify-center items-center gap-14 text-base font-medium">
                    <li><a href="#" class="hover:text-slate-300 duration-150">Works</a></li>
                    <li><a href="#" class="hover:text-slate-300 duration-150">About</a></li>
                    <li><a href="#" class="hover:text-slate-300 duration-150">Stoks</a></li>
                    <li><a href="#" class="hover:text-slate-300 duration-150">Contacts</a></li>
                </ul>
            </nav>
            <a href="#" class="hover:text-slate-300 duration-150 hidden md:block">+0123456789</a>
        </header>
        <div @click="show = !show" class="flex flex-col items-start justify-start gap-10 lg:px-20 px-3 pt-56">
            <p class="lg:text-[64px] text-4xl font-medium">Premium service <br> for your car</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center items-center text-base md:text-lg font-semibold">
                <button class="w-full rounded-2xl py-6 pr-10 pl-12 bg-card-red flex flex-row gap-1 justify-center items-center">
                    <p>Registration</p>
                </button>
                <button class="rounded-2xl py-6 pr-10 pl-12 border border-primary-white flex flex-row gap-1 justify-center items-center">
                    <Icon name="ph:chat-circle-text-thin" class="text-3xl"/>
                    <p>Consultation</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let show = ref(false)
</script>

<style scoped>
.hello{
    background: linear-gradient(270deg, #111 0%, rgba(7, 16, 22, 0.00) 100%), url('../assets/imgs/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
}
</style>