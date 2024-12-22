<script setup>
import JobListing from '@/components/JobListing.vue'
import jobsData from '@/jobs.json';
import { ref, defineProps } from 'vue';

const jobs = ref(jobsData);
const allJobs = jobs.value.jobs;

const props = defineProps({
    limit: {
        type: Number,
        default: 5,
    },

    // showMoreButton: {
    //     type: Boolean,
    //     default: false,
    // }
});
// console.log(props.limit);
const showMoreButton = () => {
    if (props.limit) {
        if (allJobs.length > props.limit) {
            return true;
        }
        else {
            return false;
        }
    }
    return false;
}

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in allJobs.slice(0, limit || allJobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showMoreButton()" class="m-auto max-w-lg my-10 px-6">
        <a href="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Jobs
        </a>
    </section>
</template>