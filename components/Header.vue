<template>
    <div class="hello text-primary-white flex flex-col flex-1 py-5 h-screen">
        <header class="flex flex-row justify-between items-center border-b border-header-border w-11/12 mx-auto">
            <div class="flex flex-row gap-4 justify-between items-center pb-5">
                <img src="../assets/imgs/logotype.svg" alt="logo">
                <a href="#" class="bg-card-red text-base font-semibold py-[15px] px-4 rounded-lg flex flex-row justify-between items-center gap-2">
                    <Icon name="uil:github" />
                    <p>Services</p>
                </a>
            </div>
            <nav>
                <ul class="flex flex-row justify-center items-center gap-16 text-base font-medium">
                    <li><a href="#" class="hover:text-slate-300 duration-150">Works</a></li>
                    <li><a href="#" class="hover:text-slate-300 duration-150">About</a></li>
                    <li><a href="#" class="hover:text-slate-300 duration-150">Stoks</a></li>
                    <li><a href="#" class="hover:text-slate-300 duration-150">Contacts</a></li>
                </ul>
            </nav>
            <a href="#" class="hover:text-slate-300 duration-150">+0123456789</a>
        </header>
        <div class="flex flex-col items-start justify-start gap-10 px-20 mt-64">
            <p class="text-[64px] font-medium">Premium service <br> for your car</p>
            <div class="flex flex-row gap-4 justify-center items-center text-lg font-semibold">
                <button class="rounded-2xl py-5 px-10 bg-card-red flex flex-row gap-4 justify-center items-center">
                    <p>Registration</p>
                </button>
                <button class="rounded-2xl py-5 px-10 border border-primary-white flex flex-row gap-4 justify-center items-center">
                    <Icon name="uil:github" />
                    <p>Consultation</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hello{
    background: linear-gradient(270deg, #111 0%, rgba(7, 16, 22, 0.00) 100%), url('../assets/imgs/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
}
</style>