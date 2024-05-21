const progressBar = document.querySelector(".bar");
const progressBar2 = document.querySelector(".bar2");
const progressBar3 = document.querySelector(".bar3");
const steps = document.querySelectorAll(".step");

let next = document.querySelector(".next");
let prev = document.querySelector(".previous");
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");
let form4 = document.querySelector(".form4");
let step = 1;
progressBar.style.width = step * 50 + "%";
steps[0].classList.add("active");
let form = document.querySelector(".form1 form");

const formDataArray = new Set();

function goToOtherForm() {
  next.addEventListener("click", (event) => {
    const nameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const phoneInput = document.getElementById("phone").value;
    const companyInput = document.getElementById("company").value;
    if (
      nameInput === "" ||
      emailInput === "" ||
      phoneInput === "" ||
      companyInput === ""
    ) {
      try {
        if (nameInput.trim() === "") {
          throw new Error("Ad daxil edin");
        }
        if (nameInput.trim().length < 5) {
          throw new Error("Ad 5 simvoldan az ola bilməz");
        } else {
          document.querySelector("#usernameError").innerHTML = "";
        }
      } catch (error) {
        document.querySelector("#usernameError").innerHTML = error.message;
        username.classList.add(".error");
      }

      try {
        if (emailInput.trim() === "") {
          throw new Error("Email daxil edin");
        } else {
          document.querySelector("#emailError").innerHTML = "";
        }
        if (emailInput.trim().length < 5) {
          throw new Error("Email 5 simvoldan az ola bilməz");
        }
      } catch (error) {
        document.querySelector("#emailError").innerHTML = error.message;
      }

      try {
        if (companyInput.trim() === "") {
          throw new Error("Şirkət adı daxil edin");
        } else {
          document.querySelector("#companyError").innerHTML = "";
        }
      } catch (error) {
        document.querySelector("#companyError").innerHTML = error.message;
      }

      try {
        if (phoneInput.trim() === "") {
          throw new Error("Telefon nömrəsi daxil edin");
        }
        if (phoneInput.trim().length < 5) {
          throw new Error("Telefon nömrəsi 5 simvoldan az ola bilməz");
        } else {
          document.querySelector("#phoneError").innerHTML = "";
        }
      } catch (error) {
        document.querySelector("#phoneError").innerHTML = error.message;
      }
    }

    if (
      nameInput !== "" &&
      emailInput !== "" &&
      phoneInput !== "" &&
      companyInput !== ""
    ) {
      document.querySelector("#phoneError").innerHTML = "";
      document.querySelector("#companyError").innerHTML = "";
      document.querySelector("#emailError").innerHTML = "";
      document.querySelector("#usernameError").innerHTML = "";
      formDataArray.add(nameInput);
      formDataArray.add(emailInput);
      formDataArray.add(companyInput);
      formDataArray.add(phoneInput);

      progressBar.style.width = (step + 1) * 50 + "%";

      if (step >= 1) {
        steps[1].classList.add("active");
        prev.style.visibility = "visible";
        progressBar2.style.width = step * 50 + "%";
        form1.style.display = "none";
        form2.style.display = "block";
        form3.style.display = "none";
        form4.style.display = "none";
      }
      if (step >= 2) {
        steps[1].classList.add("active");
        steps[2].classList.add("active");
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "block";
        form4.style.display = "none";
        progressBar3.style.width = (step - 1) * 50 + "%";
      }
      if (step >= 3) {
        steps[3].classList.add("active");
        form1.style.display = "none";
        form4.style.display = "block";
        form3.style.display = "none";
        form2.style.display = "none";
      }

      const selectionElements = document.querySelectorAll(" .selection");


      step++;
    }
  });
  document.querySelector('.submit').addEventListener('click', () => {   console.log("Form Data Array:", formDataArray);});

}
const nextStepButton = document.querySelector(".next");

const circles = document.querySelectorAll(".circle-bord");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => {
      c.style.border = "none";
    });

    circles.forEach((c) => {
      c.classList.remove("selected");
    });

    circle.style.border = "10px solid #4a3aff";
    circle.classList.add("selected");
    circle.classList.add("selected");

    const markElement = circle.parentElement.querySelector(".mark");

    if (markElement) {
      formDataArray.add(markElement.textContent);
      console.log(markElement.textContent);
    }
  });
});


// -------------------------------------------------
prev.addEventListener("click", () => {
  if (step > 1) {
    step -= 1;
    progressBar.style.width = step * 50 + "%";

    if (step >= 1) {
      prev.style.visibility = "hidden";
      steps[2].classList.remove("active");
      steps[3].classList.remove("active");
      steps[1].classList.remove("active");
      form1.style.display = "block";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      progressBar.style.width = "50%";
      progressBar2.style.width = "0%";
      progressBar3.style.width = "0%";
    }
    if (step >= 2) {
      prev.style.visibility = "visible";
      steps[1].classList.add("active");
      form1.style.display = "none";
      form2.style.display = "block";
      form3.style.display = "none";
      form4.style.display = "none";
      progressBar2.style.width = "50%";
      progressBar.style.width = "100%";
      progressBar3.style.width = "0%";
    }
    if (step >= 3) {
      prev.style.visibility = "visible";

      steps[3].classList.remove("active");
      steps[2].classList.add("active");
      steps[1].classList.add("active");
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "block";
      form4.style.display = "none";
      progressBar3.style.width = "50%";
      progressBar2.style.width = "100%";
    }
  }
});

var selectionElements = document.querySelectorAll(".selection");

selectionElements.forEach((selection) => {
  selection.addEventListener("click", () => {
    selectionElements.forEach((s) => {
      s.classList.remove("selected");
    });

    selection.classList.add("selected");

    const markElement = selection.parentElement.querySelector(".mark");
    markElement.textContent = selection.querySelector(".mark").textContent;
    formDataArray.add(markElement.textContent);

  });
});

goToOtherForm();

