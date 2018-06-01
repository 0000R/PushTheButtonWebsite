let setup = () => {
    let count =0
    return () => {
        count++;
        document.getElementById("output").innerHTML
                = "You pressed the button" + " " + count + " " + "times.";

    }
}
let doit =setup();