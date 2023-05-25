let docxConverter = require("docx-pdf");
let documentName = "Rahmat.docx";
docxConverter("Rahmat.docx", "outt.pdf", function(error, result) {
  if(error) {
    console.log(error)
  }
  console.log(result)
})