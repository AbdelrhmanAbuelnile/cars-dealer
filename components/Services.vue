<template>
    <div class="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-8">
        <div class="card">
            
            <div class="flex flex-row justify-between items-start pr-4">
                <p class="text-primary-white text-xl font-semibold">Wrapping car <br> with film</p>
                <p class="p-1 group rounded-lg bg-card-red text-lg font-medium text-primary-white">promotion</p>
            </div>

            <div class="flex flex-row justify-between items-center">
                <p class="text-primary-white text-xl font-semibold mt-20 md:mt-5">$355</p>
                <img src="../assets/imgs/image1.png" alt="">
            </div>

        </div>
        <div class="card">
            
            <div class="flex flex-row justify-between items-start pr-4">
                <p class="text-primary-white text-xl font-semibold">Locksmith repair</p>
                <!-- <p class="p-1 group rounded-lg bg-card-red text-lg font-medium text-primary-white">promotion</p> -->
            </div>

            <div class="flex flex-row justify-between items-center">
                <p class="text-primary-white text-xl font-semibold mt-20 md:mt-5">$33</p>
                <img src="../assets/imgs/image2.png" alt="">
            </div>

        </div>
        <div class="card">
            
            <div class="flex flex-row justify-between items-start pr-4">
                <p class="text-primary-white text-xl font-semibold">Painting disks</p>
                <p class="p-1 group rounded-lg bg-card-red text-lg font-medium text-primary-white">promotion</p>
            </div>

            <div class="flex flex-row justify-between items-center">
                <p class="text-primary-white text-xl font-semibold mt-20 md:mt-5">$50</p>
                <img src="../assets/imgs/image3.png" alt="">
            </div>

        </div>
        <div class="card">
            
            <div class="flex flex-row justify-between items-start pr-4">
                <p class="text-primary-white text-xl font-semibold">Exhaust system tuning</p>
                <p class="p-1 group rounded-lg bg-card-red text-lg font-medium text-primary-white">promotion</p>
            </div>

            <div class="flex flex-row justify-between items-center">
                <p class="text-primary-white text-xl font-semibold mt-20 md:mt-5">$355</p>
                <img src="../assets/imgs/image4.png" alt="">
            </div>

        </div>
        <div class="card">
            
            <div class="flex flex-row justify-between items-start pr-4">
                <p class="text-primary-white text-xl font-semibold">Body repair</p>
                <p class="p-1 group rounded-lg bg-card-red text-lg font-medium text-primary-white">promotion</p>
            </div>

            <div class="flex flex-row justify-between items-center">
                <p class="text-primary-white text-xl font-semibold mt-20 md:mt-5">$355</p>
                <img src="../assets/imgs/image5.png" alt="">
            </div>

        </div>
        <div class="card">
            
            <div class="flex flex-row justify-between items-start pr-4">
                <p class="text-primary-white text-xl font-semibold">Car washing</p>
                <!-- <p class="p-1 group rounded-lg bg-card-red text-lg font-medium text-primary-white">promotion</p> -->
            </div>

            <div class="flex flex-row justify-between items-center">
                <p class="text-primary-white text-xl font-semibold mt-20 md:mt-5">$10</p>
                <img src="../assets/imgs/image6.png" alt="">
            </div>

        </div>
    </div>
</template>

<script setup>
import data from '../services.json'

const cardDetails = data.details
</script>

<style scoped>
.card:hover .p-1 {
    background-color: #1E1E1E;
    transition-duration: 0.5s;
}
</style>