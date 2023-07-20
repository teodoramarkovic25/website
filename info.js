function funkcija1() {
    window.alert("Dobro došli na informativni sajt");
   }

   const administrator1 = {
    ime: "Marko",
    prezime: "Marković",
  
    imeprezime: function() {
      return this.ime + " " + this.prezime;
    }
  };
  document.getElementById("administrator").innerHTML = administrator1.imeprezime();

  
  
  function promjena() {
    document.getElementById("change").innerHTML = "Lorem ipsum information sit";
  }


