// Bonus (facolativo):
// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

// creiamo l'istanza di vue
let app = new Vue({
  el: "#root",

  // all'interno dei data le specifiche dei nostri quadratini...
  data: {
    mySquare: {
      width: "100px",
      height: "100px",
      border: "1px solid black",
      backgroundColor: "white",
    },
    myNumber: "",
    counter: 36
  },

  methods: {
    getNumber(){
      axios.get("https://flynn.boolean.careers/exercises/api/random/int")
      .then(response =>{
        let number = response.data.response;
        console.log(response.data.response);
        this.myNumber = number

      })

    }
  }
});
