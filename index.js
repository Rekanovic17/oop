async function GetStudents() {
    class StudentsInfo {
    constructor(name, address, phone, course) {
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.course = course;
    }
  
    getInfo() {
      return (
        "Name: " +
        this.name +
        ", Address: " +
        this.address +
        ", Phone: " +
        this.phone +
        ", Course: " +
        this.course +
        " "
      );
    }
  }
  
  
    try {
      const response = await fetch("https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt");
      if (response.status!=200) {
        throw new Error("Fetch error: " + response.status);
      }
  
      const txt = await response.text();
      const lines = txt.split("\n");
  
      console.log(lines);

      //TAJ NIZ TREBA PRETVORITI U OBJ KOJI CE NA POZIV GORE FUNKCIJE GETINFO U CLASS OBJEKTU 
      //NA SAJTU ISPISATI VRIJEDNOST FUNKCIJE
    } catch (error) {
      console.error(error);
      const students = GetStudents();
    }
  }
  