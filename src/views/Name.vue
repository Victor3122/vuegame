<script lang="ts" setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>


    <h2>Name Change Game</h2>
    <p>Name: {{ store.name }}</p>
    <button @click="store.changeName('Vi')">Change name to Vi</button><br>
    <button @click="store.changeName('Ko Ko')">Change name to Ko KO</button><br>
    <button @click="store.changeName('Peter')">Change name to Peter</button><br>
    <button @click="store.changeName('Lwin')">Change name to Lwin</button><br>
    <button @click="store.changeName('Chit Ko')">Change name to Chit KO</button><br>
    <button @click="store.changeName('Hla Hla')">Change name to Hla Hla</button><br>
    <button @click="store.$reset">Reset</button>

</template>
<style>
div {
  border: 2px solid rgb(219, 83, 34); /* change the border color to blue */
  font-size: 18px; /* increase the font size */
  text-align: center; /* center the elements */
}
</style>