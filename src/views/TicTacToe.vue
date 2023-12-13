<!-- <script lang="ts" setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div>
    <h2>Settings view {{ store.name }}</h2>
  </div>
</template>
 -->
 <template>
  <div id="app">
    <h1 style="font-weight: bold;">Tic Tac Toe</h1>
    <p style="font-weight: bold;">{{ message }}</p>
    <table>
      <tr v-for="(row, i) in board" :key="i">
        <td v-for="(cell, j) in row" :key="j" @click="makeMove(i, j)" style="font-weight: bold;">
          {{ cell }}
        </td>
      </tr>
    </table>
    <button v-if="gameOver" @click="resetGame" style="font-weight: bold;">Play Again</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [
     
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "X", 
      message: "X's turn", 
      gameOver: false, 
    };
  },
  methods: {
    makeMove(i, j) {
     
      if (!this.gameOver && this.board[i][j] == "") {
        
        this.board[i][j] = this.turn; 
        this.checkWinner();
        this.switchTurn(); 
      }
    },
    checkWinner() {
     
      let b = this.board;
      let w = null; 
 
      for (let i = 0; i < 3; i++) {
        if (b[i][0] != "" && b[i][0] == b[i][1] && b[i][1] == b[i][2]) {
          w = b[i][0];
        }
      }

      for (let j = 0; j < 3; j++) {
        if (b[0][j] != "" && b[0][j] == b[1][j] && b[1][j] == b[2][j]) {
          w = b[0][j];
        }
      }
 
      if (b[0][0] != "" && b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
        w = b[0][0];
      }
      if (b[0][2] != "" && b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
        w = b[0][2];
      }
     
      if (w != null) {
        
        this.message = w + " wins!";
        this.gameOver = true;
      } else if (this.isBoardFull()) {
      
        this.message = "It's a tie!";
        this.gameOver = true;
      }
    },
    switchTurn() {
      
      if (!this.gameOver) {
        
        this.turn = this.turn == "X" ? "O" : "X"; 
        this.message = this.turn + "'s turn"; 
      }
    },
    isBoardFull() {
      
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.board[i][j] == "") {
            
            return false; 
          }
        }
      }
      return true; 
    },
    resetGame() {
      // reset the game
      this.board = [
        // clear the board
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.turn = "X"; 
      this.message = "X's turn"; 
      this.gameOver = false; 
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: red;
}
table {
  margin: auto;
  border-collapse: collapse;
}
td {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  font-size: 48px;
  cursor: pointer;
}
button {
  margin-top: 20px;
}
</style>