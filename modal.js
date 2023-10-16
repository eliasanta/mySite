/* $("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
}); */
// Trova il modal e aggiungi un evento quando viene mostrato
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");

  // Assicurati che il modal esista prima di aggiungere l'evento
  if (modal) {
    modal.addEventListener("shown.bs.modal", function () {
      // Trova l'elemento "myInput" all'interno del modal e dategli il focus
      var myInput = document.getElementById("myInput");
      if (myInput) {
        myInput.focus();
      }
    });
  }
});


