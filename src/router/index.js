import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddJobView from "@/views/AddJobView.vue";
import { ref } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job-view",
      component: JobView,
    },
    {
      path: "/job/add",
      name: "job-add",
      component: AddJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

// Reactive previous URL tracker
export const previousUrl = ref("");

router.beforeEach((to, from, next) => {
  previousUrl.value = from.fullPath; // Update the previous URL
  next();
});

export default router;
