<template>
  <nav v-if="user">
    <div>
        <p>Hi {{ user.displayName }}</p>
        <p class="email">{{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { auth } from "../firebase/config";
import getUser from '../composables/getUser';

export default {
    setup() {
        let error = ref(null);
        let { user } = getUser();
        let logout = async () => {
            try {
                await auth.signOut();
            console.log("user loggedd out");
            } catch (err) {
                error.value = err.message;
                console.log(error.value);
            }
        }
       
        

        return { logout,user };
}
}
</script>

<style>

</style>