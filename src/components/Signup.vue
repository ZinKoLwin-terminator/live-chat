<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signUP">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let signUP = () => {
            console.log(displayName.value, email.value, password.value);
        }

        return { displayName, email, password ,signUP};
}
}
</script>

<style>

</style>