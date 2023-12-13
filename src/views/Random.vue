<template>
    <div id="app">
      <h1>Random Number Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input type="number" v-model="guess" />
      <button @click="checkGuess">Check</button>
      <p>{{ message }}</p>
      <button @click="getRandomNumber">Get a random number between 1 and 250</button>
      <p>{{ randomNumber }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        guess: null, 
        number: Math.floor(Math.random() * 100) + 1, 
        message: "", 
        randomNumber: null, 
      };
    },
    methods: {
      checkGuess() {
    
        if (this.guess < 1 || this.guess > 100) {
          this.message = "Invalid guess. Enter a number between 1 and 100.";
        } else {
          
          if (this.guess == this.number) {
            this.message = "You got it! The number was " + this.number + ".";
          } else if (this.guess < this.number) {
            this.message = "Too low. Try again.";
          } else {
            this.message = "Too high. Try again.";
          }
        }
      },
      getRandomNumber() {
        
        this.randomNumber = Math.floor(Math.random() * 250) + 1;
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  </style>