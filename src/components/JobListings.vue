<script setup>
import JobListing from '@/components/JobListing.vue'
import axios from 'axios';
// import jobsData from '@/jobs.json';
import { ref, defineProps, reactive, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { RouterLink } from 'vue-router';

const state = reactive({
    jobs: [],
    isLoading: true
});

onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs');
        state.jobs = response.data;
    } catch (error) {
        console.error(error);
    } finally {
        state.isLoading = false;
    }
});

const props = defineProps({
    limit: {
        type: Number,
    },

    // showMoreButton: {
    //     type: Boolean,
    //     default: false,
    // }
});
// console.log(props.limit);
const showMoreButton = () => {
    if (props.limit) {
        // console.log(jobs.value.length);
        if (state.jobs.length > props.limit) {
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
            <!-- Show Loading Spineer While isLoading is true -->
            <div v-if="state.isLoading" class="text-center text-gray-500 py-5">
                <PulseLoader />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showMoreButton()" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Jobs
        </RouterLink>
    </section>
</template>