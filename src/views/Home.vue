<script setup>
import { ref, onMounted } from 'vue';
import TextAnim from '@/components/TextAnim.vue'
import FramedMainSection from '@/layouts/FramedMainSection.vue';
import mountainsImage from '/backgrounds/mountains.jpg';

const certifications = ['AZ-500', 'AZ-700', 'CompTIA Security+', 'CompTIA Network+', 'Palo Alto Certified'];

const frameRef = ref(null);
const containerRef = ref(null);

onMounted(() => {
    containerRef.value = frameRef.value.sectionRef;
});
</script>

<template>
    <FramedMainSection ref="frameRef" id="Jimil" class="h-dvh">
        <div
            class="h-full w-full bg-fit bg-cover bg-position-[center_40%] rounded-4xl flex flex-col justify-center items-center text-center gap-[3dvh] px-6"
            :style="{ backgroundImage: `url(${mountainsImage})` }">

            <p class="text-white font-ledger uppercase tracking-[0.3em] text-sm md:text-base">
                Cloud Security Engineer
            </p>

            <h1 class="text-white font-rubik uppercase leading-none text-[9dvw] xl:text-[10dvh]">
                Jimil Prabtani
            </h1>

            <div
                class="text-white font-rubik uppercase text-[3.4dvw] md:text-[4dvw] xl:text-[5dvh] leading-none flex justify-center items-center">
                <p class="flex h-[2.9dvw] md:h-[3.4dvw] xl:h-[4.2dvh] overflow-hidden">
                    <span class="standard-text">I&nbsp;</span>
                    <TextAnim
                        v-if="containerRef"
                        :texts="['Architect', 'Secure', 'Defend', 'Harden', 'Monitor', 'Automate']"
                        :container="containerRef"
                        :duration="2.5"
                        :class="'text-red-custom'"
                    />
                    <span class="standard-text">&nbsp;the cloud.</span>
                </p>
            </div>

            <ul class="flex flex-wrap justify-center gap-2 md:gap-3 list-none" aria-label="Certifications">
                <li v-for="cert in certifications" :key="cert"
                    class="text-white font-ledger text-xs md:text-sm border border-white/50 bg-black/30 backdrop-blur-sm rounded-full px-4 py-1.5">
                    {{ cert }}
                </li>
            </ul>

            <div class="flex flex-wrap justify-center gap-4 pt-[2dvh] font-ledger">
                <a href="/resume/resume.pdf" target="_blank" rel="noopener"
                    class="bg-red-custom text-white rounded-full px-6 py-3 text-sm md:text-base hover:brightness-110 transition-all">
                    Download Resume
                </a>
                <a href="#projects"
                    class="border border-white text-white rounded-full px-6 py-3 text-sm md:text-base hover:bg-white hover:text-black transition-all">
                    View Projects
                </a>
            </div>
        </div>
    </FramedMainSection>
</template>
