function computeGrade(prelimGrade, midtermGrade, preFinalGrade, finalGrade){
    let averageGrade = (prelimGrade + midtermGrade + preFinalGrade + finalGrade) / 4;

let grade;

if (averageGrade >= 97.50)
    {
        grade = "Excellent 1.00"
    }
else if (averageGrade >= 94.50)
    {
        grade = "Very Good 1.25"
    }
else if ( averageGrade >= 91.50)
    {
        grade = "Good 1.50"
    }
else if ( averageGrade >= 88.50)
    {
        grade = "Good 1.75"
    }    
else if (averageGrade >= 85.50)
    {
        grade = "Satisfactory 2.00"
    }
else
    {
        grade = "Failed"
    }

    return grade;
}

const prelimGrade = 100
const midtermGrade = 85.48
const preFinalGrade = 86.03
const finalGrade = 96.79

const grade = computeGrade(prelimGrade, midtermGrade, preFinalGrade, finalGrade);
console.log(`Final grade: ${grade}`);

document.getElementById('prelim').innerHTML = prelimGrade;
document.getElementById('midterm').innerHTML = midtermGrade;
document.getElementById('preFinals').innerHTML = preFinalGrade;
document.getElementById('finals').innerHTML = finalGrade;
document.getElementById('practice').innerHTML = grade;

console.log(prelimGrade)
console.log(midtermGrade)
console.log(preFinalGrade)
console.log(finalGrade)

