document.getElementById("calculate").addEventListener("click", calculator);

// executing results

function calculator() {
  let SP1 = +document.getElementById("user-in1").value;
  let SP2 = +document.getElementById("user-in2").value;
  let CSS1 = +document.getElementById("user-in3").value;
  let CSS2 = +document.getElementById("user-in4").value;
  let PA = +document.getElementById("user-in5").value;

  let percent = (SP1 + SP2 + CSS1 + CSS2 + PA) / 5;

  document.getElementById("output1").innerHTML = getLetterGrade(SP1);
  document.getElementById("output2").innerHTML = getLetterGrade(SP2);
  document.getElementById("output3").innerHTML = getLetterGrade(CSS1);
  document.getElementById("output4").innerHTML = getLetterGrade(CSS2);
  document.getElementById("output5").innerHTML = getLetterGrade(PA);
  document.getElementById("output").innerHTML =
    `Final CS10 Grade: ${percent}% ${getLetterGrade(percent)}`;

  // defining calculating fuctiob
  function getLetterGrade(percentGrade) {
    if (percentGrade >= 90) {
      return "A";
    } else if (percentGrade >= 75) {
      return "B";
    } else if (percentGrade >= 60) {
      return "C";
    } else if (percentGrade >= 50) {
      return "D";
    } else if (percentGrade >= 0) {
      return "F";
    }
  }
}
