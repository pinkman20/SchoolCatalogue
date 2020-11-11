//Classes practice


// Parrent class
class School {
    constructor (name,level,numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name () {
      return this._name;
    }
    get level () {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents
    }
    set numberOfStudents (newNumberOfStudents) {
      if (newNumberOfStudents ==='number') {
        return this._numberOfStudents = newNumberOfStudents;
      } else {
        return console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
     
    }
    quickFacts () {
      return console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`)
    }  
    static pickSubstituteTeacher (substituteTeachers) {
    let random = Math.floor(Math.random()*substituteTeachers.length)
    return substituteTeachers[random]
  }
  }
  
  //Child class - Primary School
  
  class PrimarySchool extends School {
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents);
      this._pickupPolicy = pickupPolicy;
      
    }
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  
// HighSchool child class

  class HighSchool extends School {
    constructor(name,numberOfStudents,sportsTeams){
      super(name,'High',numberOfStudents)
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams () {
      return this._sportsTeams;
    }
  }
  

  // New instances

  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts()
  
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  
  console.log(sub)
  
  
  const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeams)