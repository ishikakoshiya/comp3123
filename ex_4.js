function Angle(angle){
    if (angle < 0 || angle > 180) {
        return "Invalid angle.";
    }

    if (angle > 0 && angle < 90) {
        return "Acute angle"; 
    } else if (angle === 90) {
        return "Right angle"; 
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle"; 
    } else if (angle === 180) {
        return "Straight angle"; 
    }
}

const angle = 120;
const Typeofangle = Angle(angle);
console.log("The angle is:", Typeofangle);