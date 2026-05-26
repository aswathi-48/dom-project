// Array Data
    let students = [
      "Abhi",
      "John",
      "Arun",
      "Meera",
      "David"
    ];

    const studentList = document.getElementById("studentList");

    // DISPLAY USING LOOP
    function displayStudents(){

      // Clear existing DOM
      studentList.innerHTML = "";

      // Loop through array
      students.forEach((student,index)=>{

        // Create DOM Elements
        const li = document.createElement("li");

        li.innerHTML = `
          <span>${index + 1}. ${student}</span>
          <button class="delete" onclick="deleteStudent(${index})">
            Delete
          </button>
        `;

        // Append to DOM
        studentList.appendChild(li);
      });
    }

    // ADD OPERATION
    function addStudent(){

      const newStudent = prompt("Enter student name");

      if(newStudent){
        students.push(newStudent);
        displayStudents();
      }
    }

    // DELETE OPERATION
    function deleteStudent(index){

      students.splice(index,1);
      displayStudents();
    }

    // REMOVE LAST
    function removeLast(){

      students.pop();
      displayStudents();
    }

    // DOM + LOOP + CONDITIONAL OPERATION
    function highlightEven(){

      const items = document.querySelectorAll("li");

      items.forEach((item,index)=>{

        // Remove old highlight
        item.classList.remove("highlight");

        // Highlight even index items
        if(index % 2 === 0){
          item.classList.add("highlight");
        }
      });
    }

    // Initial Load
    displayStudents();