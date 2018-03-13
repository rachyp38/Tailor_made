var result;

function check()

{

   var question;
   var value1;
   var value2;

   question = 1;
   value1 = 0;
   value2 = 0;

   result = "";

   var choice;

   for (question = 1; question <= 3; question++) {

      var q = document.forms['quiz'].elements['q'+question];

         for (var i = 0; i < q.length; i++) {
            if (q[i].checked) {
               choice = q[i].value;
            }
         }

         if (choice == "value1") {
            value1++;
         }

         if (choice == "value2") {
            value2++;
         }

      }

   if (value1 >= value2 && value1 > 0) {

      // value1 is the highest
      result = "value1";

   }

   else if (value2 > value1 && value2  > 0) {

      // value2 is the highest
      result = "value2";

   }

   else {
      result = "404";
   }

   window.location = result + '.html';

}
