// $(document).ready(function() {
//   $("#workOrder").submit(function(event) {
//     var sentence = $("#inputText").val();
//     sentence.forEach()
//   });
// });

function removeDuplicateUsingFilter(arr){
  let noDuplicates = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  return noDuplicates
}


$(document).ready(function() {
  $("#workOrder").submit(function(event) {
    event.preventDefault();
      var inputTextArray = [];
      var inputTemp = $("input#inputText").val();
      inputTextArray = inputTemp.split(" ");
      var noDuplicates = removeDuplicateUsingFilter(inputTextArray);
      var original;
      noDuplicates.forEach(function(uniqueWord) {
        var count = 0;
        inputTextArray.forEach(function(duplicate) {
          if (uniqueWord === duplicate) {
            count++;
          }
        });
        $(".output ul").append("<li>Word: " + uniqueWord + " Count: " + count + "</li>")
      });
  });
});


//go over this whole code again, iffy about it 
