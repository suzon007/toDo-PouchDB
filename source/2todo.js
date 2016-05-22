(
  function(){
    'use strict';
    var db = null;
    var dbname = 'idb://zis_todo';
    window.addEventListener('load', loadPouch, false);

    function loadPouch() {
      Pouch(dbname, function(err, pouchdb){
        if(err){
          alert("Can't open pouchdb database");
        }else{
          db = pouchdb;
          windowLoadHandler();
        }
      });
    }
    function windowLoadHandler() {
      //Other logic to be executed when the page loads should be placed here
      addEventListeners();
    }

    function addEventListeners() {
      //Hook in to various parts of the page
      document.getElementById('btnAddToDo').addEventListener( 'click', addToDB, false);
      document.getElementById('btnShowToDo').addEventListener( 'click', showText, false);
      document.getElementById('btnResetAll').addEventListener( 'click', reset, false);
    }
    var reset= function(){
      Pouch.destroy(dbname, function(err1){
        if(err1){
          alert("Database destruction error")
        } else {
          Pouch(dbname, function(err2, pouchdb){
            if(err2){
              alert("Database creation error")
            } else {
              db= pouchdb;
            }
          })
        }
      });
    }
    var addToDB = function(){
      // var text= document.getElementById('enter-text').value;
      // db.post({text: text});

      form = document.getElementById('myForm');
      var o = {};
      o.taskNo = form.taskNo.value;
      o.taskDesc = form.taskDesc.value;
      o._id = new Date().getTime()+'';

      db.put(o, function(error,response){
        if (error) {
          console.log(error);
          return;
        } else if (response && response.ok) {

        }
      });

    }





  }
)();
