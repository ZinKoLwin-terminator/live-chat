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
import { auth } from "../firebase/config";
export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let error = ref(null);

        let signUP =async () => {
           try {
            let resp = await auth.createUserWithEmailAndPassword(email.value, password.value);
               if (!resp) {
                   throw new Error("could not create new user");
            }
           } catch (err) {
               error.value = err.message;
               console.log(error.value);
           }
        }

        return { displayName, email, password ,signUP};
}
}
</script>

<style>

</style>