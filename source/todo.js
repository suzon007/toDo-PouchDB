var pdb = new PouchDB('pouchnotes');
var form, savenote, viewnoteset;


savenote = function(){
  form = document.getElementById('myForm');
  var o = {};
  o.taskNo = form.taskNo.value;
  o.taskDesc = form.taskDesc.value;
  o._id = new Date().getTime()+'';


  pdb.put(o, function(error,response){
    if (error) {
      console.log(error);
      return;
    } else if (response && response.ok) {

    }
  });
}

//============================SHOW TASKS======================================
var showText = function(){

  pdb.allDocs({include_docs: true}, function(err, res){
    if (!err) {
      console.log("This is working!");
      let tableRow = "";
      res.rows.forEach(function(element){
        tableRow +='<tr>'+
                    '<td>' + element.doc.taskNo + '</td>'+
                    '<td>' + element.doc.taskDesc + '</td>'+
                    '<td>' + '<a href="#" onclick(doneThis();)> <i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i></a> | <a href="#"> <i class="fa fa-pencil-square-o  fa-2x" aria-hidden="true"></i> </a>' + '</td>'+
                  '</tr>';
      });
      document.getElementById('table-body').innerHTML = tableRow;
    }
  });
}
//============================DONE THE WORK NOTIFIER==========================
var doneThis = function(){
    console.log("Working!");
}
//=============================RESET==========================================
var reset = function(){
  new PouchDB('pouchnotes').destroy().then(function () {
    alert('RESETED!');
  }).catch(function (err) {
    console.log(err);
  })
}
