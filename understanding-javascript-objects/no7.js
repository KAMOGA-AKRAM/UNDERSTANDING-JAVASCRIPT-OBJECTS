//part 7 object methids and the this method(using this in a method)
let ugandanFarmer = {
    name: "akram",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5,
    introduceFarmer: function() {
    return `Hello, my name is ${this.name} and I am a farmer of ${this.crop}
    in ${this.farmLocation}.`;
    }
    };
    console.log(ugandanFarmer.introduceFarmer());



//task a method school introduction to the school object
school = {
    name: "uganda christian university",
    location: "Mukono, Uganda",
    studentsCount: 5000,
    establishedYear: 2007,
    schoolType: "Secondary",
    calculateSchoolAge: function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.establishedYear;
    },
    schoolIntroduction: function() {
      return `This is ${this.name}, located in ${this.location}. We currently have ${this.studentsCount} students.`;
    }
  };
  
  const introduction = school.schoolIntroduction();
  console.log(introduction);