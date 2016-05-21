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

viewnoteset = function(){
  var df = document.createDocumentFragment(),
      options = {},
      nl = document.getElementById('table-body');
  options.include_docs = true;

  this.pbd.allDocs(options, function(error, response){
    row = response.rows.map(addrow);
    row.map(function(f){
      if (f) {
        df.appendChild(f);
      }
    });
    nl. appendChild(df);

  });
};
