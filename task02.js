class Student {
    constructor (name,age,marks){
        this. name = name;
        this. age = age;
        this. marks = marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {

            console.log("Eligible for current company",this)
            if(this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + "is ready for placements ")                
            }else {
                console.log(this.name + "is not ready for placements")
            }
        }
    }
}

const John = new Student('john',25,75);
const Paul = new Student('paul',13,35);

John.setPlacementAge(18)(40);
Paul.setPlacementAge(18)(40);