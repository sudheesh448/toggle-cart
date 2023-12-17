
    document.addEventListener("DOMContentLoaded", function () {
        
        var radio1 = document.getElementById('radio1');
        var radio2 = document.getElementById('radio2');
        var radio3 = document.getElementById('radio3');

       
        var nestedBox1 = document.getElementById('nestedBox1');
        var nestedBox2 = document.getElementById('nestedBox2');
        var nestedBox3 = document.getElementById('nestedBox3');

        
        function checkRadio1() {
            radio1.checked = true;
        }

        
        function checkRadio2() {
            radio2.checked = true;
        }

        
        function checkRadio3() {
            radio3.checked = true;
        }

    
        nestedBox1.addEventListener('click', checkRadio1);
        nestedBox2.addEventListener('click', checkRadio2);
        nestedBox3.addEventListener('click', checkRadio3);

        function changeHeight(box, height) {
                box.style.height = height + 'px';

            }

           
            nestedBox1.addEventListener('click', function () {
                
                nestedBox1.style.backgroundColor='#f4fbf9'
                nestedBox2.style.backgroundColor='#ffffff'
                nestedBox3.style.backgroundColor='#ffffff'
                changeHeight(nestedBox1, 180);
                changeHeight(nestedBox2, 90);
                changeHeight(nestedBox3, 90);
            });
            
            nestedBox2.addEventListener('click', function () {
                nestedBox2.style.backgroundColor='#f4fbf9'
                nestedBox1.style.backgroundColor='#ffffff'
                nestedBox3.style.backgroundColor='#ffffff'
                changeHeight(nestedBox2, 200);
                
                changeHeight(nestedBox1, 90);
                changeHeight(nestedBox3, 90);
            });

            nestedBox3.addEventListener('click', function () {
                nestedBox3.style.backgroundColor='#f4fbf9'
                nestedBox1.style.backgroundColor='#ffffff'
                nestedBox2.style.backgroundColor='#ffffff'
                changeHeight(nestedBox3, 180);
               
                changeHeight(nestedBox1, 90);
                changeHeight(nestedBox2, 90);
            });

    });
