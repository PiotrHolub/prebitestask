window.onload = function(){

    function rand( min, max ){
        min = parseInt( min, 10 );
        max = parseInt( max, 10 );
        if ( min > max ){
            var tmp = min;
            min = max;
            max = tmp;
        }
        return Math.floor( Math.random() * ( max - min + 1 ) + min );
    }

    function createData(){
        var cols = rand(4,12);
        var rows = rand(4,30);
        var tab = [];
        

        for(var i = 0; i < rows ; i++ ){
            tab[i] = [];
            for( var j = 0; j < cols ; j++){
                tab[i][j] = rand(-100,100); 
            }
        }
        console.log(tab);
        return tab;
    }

    function tableCreate(tab) {
        var body = document.getElementById("table");
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        
        for (var i = 0; i < tab.length; i++) {
          var row = document.createElement("tr");
          for (var j = 0; j < tab[i].length; j++) {
            var cell = document.createElement("td");
            var tdnumber = tab[i][j];
            var tekst = document.createTextNode(tdnumber);
            cell.appendChild(tekst);
            row.appendChild(cell);
          }
          tblBody.appendChild(row);
        }
      

        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
      }

      function min(tab){
        for(var i = 0; i < tab.length; i++){
            Math.min(...tab[i]);
            console.log(Math.min(...tab[i]));
        }
      }

      function max(tab){
        for(var i = 0; i < tab.length; i++){
            Math.max(...tab[i]);
            console.log(Math.max(...tab[i]));
        }
      }



      var result = createData();
      
      min(result);
      max(result);
      tableCreate(result);




















   }