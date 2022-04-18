const pickear = () => {

    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let a = document.getElementById("a").value;

    document.getElementsByClassName("color")[0].style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;

}

for (let i = 0; i <= 3; i++) {

    document.getElementsByClassName("ranges")[i].addEventListener("mousemove", pickear);
    document.getElementsByClassName("ranges")[i].addEventListener("touchmove", pickear);

}