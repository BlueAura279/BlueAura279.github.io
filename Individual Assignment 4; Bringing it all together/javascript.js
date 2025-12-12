// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
    //   Once valid; (displays a message when submitted)
      else{
        formSubmittedAlert();
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Show alert message that form was submitted function
function formSubmittedAlert() {
    alert("Your form was successfully submitted. I will respond to you as soon as I can!");
}

function budgetPCCalculator() {
  let pcTotal = document.querySelector('#totalCostofPC').value;
  let months = document.querySelector('#numberOfMonths').value;
  let message = "";

  let savingsPerMonth = (pcTotal) / (months);

  message = "The amount you should save per month to reach your goal is: $" + savingsPerMonth + " per month.";

  document.querySelector("#resultMessage").innerHTML = message;
}