// vue-email-list
// Istruzioni:
// Genera 10 mail tramite api e stampale in una lista
// Usate Vue e Axios.
// La richiesta AJAX per gli indirizzi email inviatela al seguente link:
// https://flynn.boolean.careers/exercises/api/random/mail
// La lista di email va stampata a schermo nella pagina html.
// Bonus (facolativo):
// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato



let app = new Vue({
  el: "#root",
  data: {
    myMail: []
  },

// cicliamo nel mounted 10 vlt per fare la richiesta delle mail;
  mounted(){

    for (var i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(response => {
        // console.log(response.data.response);
        let newMail = response.data.response;
        this.myMail.push(newMail)
        console.log(this.myMail);

      })
    };
  },

});
