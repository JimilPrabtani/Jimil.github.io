<script setup>
import { ref, onMounted } from 'vue';
import FramedMainSection from '@/layouts/FramedMainSection.vue';
import ToggleSection from '@/components/ToggleSection.vue';
import { useSingleToggle } from '@/composables/useSingleToggle.js'
import ImageAsCursor from '@/components/ImageAsCursor.vue';
import { useImageAsCursor } from '@/composables/useImageAsCursor'
import projects from '@/data/projects.json'
import CustomA from '@/components/CustomA.vue';

const { setImage, setIsUrl, setIsOpen, setIsSmall } = useImageAsCursor()
const { isOpen, toggle, openIndex } = useSingleToggle()
const frameRef = ref()
const containerRef = ref();

onMounted(() => {
    containerRef.value = frameRef.value.sectionRef;
})
</script>

<template>
    <ImageAsCursor v-if="containerRef" :contentSection="containerRef" />
    <FramedMainSection ref="frameRef" id="projects" :class="'min-h-[100dvh] flex h-auto'">
        <div class="flex-1 w-full bg-fit flex flex-col text-center pt-20">
            <h2 class="sr-only">Projects</h2>
            <div class="w-full h-full flex flex-col">
                <ToggleSection v-for="(project, pi) in projects" :key="pi" :open="isOpen(pi)" @toggle="toggle(pi)"
                    @hover="setImage(project.background), setIsOpen(true), openIndex == pi ? setIsSmall(true) : setIsSmall(false)" @leave="setIsOpen(false), setIsSmall(false)">
                    <template v-slot:header>
                        <img :src="project.background" alt="" loading="lazy" decoding="async" class="absolute h-full w-full top-0 left-0 -z-20 brightness-50 object-cover"/>
                        <span class="tracking-[-0.3dvw] hidden md:flex" aria-hidden="true">
                            00-{{ (pi + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 }) }}
                        </span>
                        <h3 class="text-left">{{ project.title }}</h3>
                    </template>
                    <template v-slot:content>

                        <div class="px-6 pb-6">
                            <div
                                class="relative w-full text-black overflow-hidden flex flex-col items-start gap-6 h-fit">
                                <div class="gap-4 flex items-center flex-col lg:flex-row">
                                    <img v-if="project.desktop_pic" :src="project.desktop_pic" :alt="`${project.title} — screenshot`" loading="lazy" decoding="async" class="w-full lg:w-auto lg:h-52 object-contain"/>
                                    <div class="z-20 min-h-full w-full text-white p-4 text-left flex flex-col gap-4">
                                        <p>{{ project.description }}</p>
                                        <ul v-if="project.tags" class="flex flex-wrap gap-2 list-none" aria-label="Technologies used">
                                            <li v-for="tag in project.tags" :key="tag"
                                                class="text-xs border border-white/40 rounded-full px-3 py-1 text-neutral-200">
                                                {{ tag }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a v-if="project.link && project.link !== '#'" @mouseenter="setIsUrl(true)" @mouseleave="setIsUrl(false)" :href="project.link" class="relative w-full flex bg-center bg-cover bg-white" target="_blank" rel="noopener">
                                    <CustomA text="View more" :href="project.link" target="_blank" class="z-10 h-full w-full p-4"/>
                                </a>
                            </div>
                        </div>

                    </template>
                </ToggleSection>
            </div>
        </div>
    </FramedMainSection>
</template>


<style>
@keyframes bg-move {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: 3dvh -3dvh;
    }
}
</style>