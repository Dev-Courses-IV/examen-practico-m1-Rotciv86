const students = [
    { name: "Laura", age: 22, email: "laura@email.com" },
    { name: "Anna", age: 21, email: "anna@email.com" },
    { name: "Lluis", age: 28, email: "lluis@email.com" },
    { name: "Dani", age: 21, email: "dani@email.com" },
    { name: "Leo", age: 33, email: "leo@email.com" },
    { name: "Clara", age: 24, email: "clara@email.com" },
    { name: "Marc", age: 24, email: "marc@email.com" },
    { name: "Adriana", age: 28, email: "adriana@email.com" },
    { name: "Diego", age: 32, email: "diego@email.com" },
    { name: "Mar", age: 30, email: "mar@email.com" },
    { name: "Helena", age: 22, email: "helena@email.com" },
    { name: "Javi", age: 33, email: "javi@email.com" },
    { name: "Lorena", age: 34, email: "lorena@email.com" },
    { name: "Constanza", age: 28, email: "constanza@email.com" },
  ];
  



  function showStudents () {

    const printButton = document.getElementById("printButton")
    
    printButton.addEventListener("click", (event) => {
      if (!document.getElementById("studentsList").querySelector("li")) {
      event.preventDefault()

      const infoStudentList = document.getElementById("studentsList")

      for (let student of students){
        console.log(`${student.name} ${student.age}`)

        const studentInfo = document.createElement("li")
        studentInfo.classList.add("flex","flex-row","justify-around","rounded-lg","shadow-xl","p-4","bg-white")

        const nameTitle = document.createElement("h3")
        nameTitle.classList.add("text-purple-900","underline")
        nameTitle.innerText = "Nombre"
        const ageTitle = document.createElement("h3")
        ageTitle.classList.add("text-purple-900","underline")

        ageTitle.innerText = "Edad"

        const nameContent = document.createElement("p")
        nameContent.innerText = student.name
        const ageContent = document.createElement("p")
        ageContent.innerText = student.age

        const infoName = document.createElement("div")
        const infoAge = document.createElement("div")

        infoName.classList.add("flex","flex-col","gap-4","text-emerald-600")
        infoAge.classList.add("flex","flex-col","gap-4","text-emerald-600")


        infoName.appendChild(nameTitle)
        infoName.appendChild(nameContent)

        infoAge.appendChild(ageTitle)
        infoAge.appendChild(ageContent)

        studentInfo.appendChild(infoName)
        studentInfo.appendChild(infoAge)





        infoStudentList.appendChild(studentInfo)

      }
    }
    })
  
  }

  showStudents()
