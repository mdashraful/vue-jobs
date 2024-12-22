<script>
export default {
  data() {
    return {
      name: 'Jhon Doe',
      status: 'pending',
      tasks: ['Task one', 'Task Two', 'Task Three'],
      link: 'https://google.com' 
    }
  },
  methods: {
    toggleStatus() {
      if (this.status == 'active') {
        this.status = 'pending'
      } else if (this.status == 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">User is Active</p>
  <p v-else-if="status == 'pending'">User is Pending</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>

  <button v-on:click="toggleStatus">Change Status</button>
</template>

