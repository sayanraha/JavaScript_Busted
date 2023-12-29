/* This use case will give you empty value : 

const height = parseInt(document.querySelector("#height").value)
    
const weight = parseInt(document.querySelector("#weight").value) */



/* This code is adding an event listener to the submit event of a form element. When the form is
submitted, the event listener function is executed. */
const form = document.querySelector('form')

/* The code `form.addEventListener('submit', (e) => { ... })` is adding an event listener to the submit
event of a form element. When the form is submitted, the event listener function is executed. */

form.addEventListener('submit',(e)=>{

   /* `e.preventDefault()` is a method that prevents the default behavior of an event. In this case, it
   is preventing the default behavior of the form submission event. By calling `e.preventDefault()`,
   the form will not be submitted and the page will not be refreshed. This allows the JavaScript
   code to handle the form submission and perform any necessary actions without navigating away from
   the current page. */
    e.preventDefault()

   /* The code is retrieving the values of the input fields with the IDs "height" and "weight" from the
   HTML document. It then converts these values to integers using the `parseInt()` function and
   assigns them to the variables `height` and `weight`, respectively. */
    const height = parseInt(document.querySelector("#height").value)

    const weight = parseInt(document.querySelector("#weight").value)

    const results = document.querySelector("#results")


    /* This code block is performing validation checks on the user input for height and weight. */
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        // bmi formula
        const bmi = (weight / ((height * height)/10000)).toFixed(2)

        // show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
})