<script setup>
import FramedMainSection from '@/layouts/FramedMainSection.vue';
import awards from '@/data/awards.json';
import Parallax from '@/components/Parallax.vue';
</script>

<template>
     <FramedMainSection id="Certificates" class="h-dvh">
        <Parallax>
        <div class="h-full w-full relative overflow-hidden rounded-4xl text-white flex justify-center items-center p-4">
            <div class="absolute h-full w-full bg-[url('/awards/sky.jpg')] bg-cover top-0 left-0 -z-10 overflow-visible">
                <div data-parallax-value=".02" class="parallax absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video w-[130dvw] bg-center bg-cover bg-[url('/awards/clouds.png')]"></div>
                <img src="/awards/trophy.png" alt="" data-parallax-value=".15" class="parallax w-full absolute scale-200 -bottom-1/12 sm:scale-125 md:scale-150 lg:scale-125 lg:-bottom-1/3">
            </div>
            <div class="flex flex-row flex-nowrap gap-3 overflow-x-auto w-full">
                <div v-for="award in awards" class="h-fit min-w-[200px] max-w-[250px] p-3 flex flex-col items-start cursor-default text-left flex-shrink-0">
                    <span class="font-rubik text-xs">{{award.date}}</span>
                    <h1 class="font-rubik text-sm italic font-bold">{{award.title}}</h1>
                    <p class="text-xs leading-relaxed">{{award.description}}</p>
                </div>
            </div>
        </div>
    </Parallax>
    </FramedMainSection>
</template>
