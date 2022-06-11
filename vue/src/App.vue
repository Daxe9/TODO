<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToHome() {
    router.push("/");
}
</script>

<template>
    <div class="img-wrapper">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
            id="homelink"
            @click="goToHome"
        />
    </div>
    <router-view />
</template>
