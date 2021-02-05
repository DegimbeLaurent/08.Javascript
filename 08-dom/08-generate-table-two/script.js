// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here

    function tableCreate(r,c) {

        let tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');

        for (let i = 0; i < r; i++) {
            
            let tr = document.createElement('tr');
            tr.style.height = '50px';

            for (var j = 0; j < c; j++) {
                
                let td = document.createElement('td');
                td.innerHTML = (i+1)*(j+1);
                tr.appendChild(td)
           
          }
          tbl.appendChild(tr);
        }

        let target = document.getElementById('target');
        target.appendChild(tbl)
      }

      tableCreate(10,10);

})();
