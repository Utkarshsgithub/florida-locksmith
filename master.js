// SWITCHING TESTIMONIALS USING setInerval() AFTER EVERY 10 SECONDS

let name1 = 'Shalini Singh';
let designation1 = "Product Manager based in Florida";
let taarif1 = "My car door got stuck and didn't opened and I was getting late for the meeting, I tried for more than one hour and then I called Floridian Locksmith Company and they showed up in 20 minutes. They just took 15 minutes after arriving to open the door and I just got 5 minutes late in the meeting. Thank You Floridian Locksmiths!";

let name2 = "Deil Carnegie"
let designation2 = "Business Owner Based In Florida"
let taarif2 = "My house door was stuck from last 3 months, I've called many people to fix it in these three months, they fixed it but it was just working for 2-3days and again got stuck. So finally I called Floridian Locksmiths, they just took 1 hour to identify the problem and provided me with a permanent solution."

let name3 = "Lenin Kagouski"
let designation3 = "Clerk"
let taarif3 = "I locked myself out of my house and there was my daughter inside and she started crying and could not go inside, I was panicking, She was panicking and then I made a wise choice to call Floridian Locksmith and told them that its an emergency. They arrived in 15 minutes and opened the door using their magical tools."

let name4 = "Louis Kerren"
let designation4 = "Resturant Owner"
let taarif4 = "Services of Floridian Locksmith Company are fast, reliable and really awesome. Really amazed with the quality of their work. Thank You!"

var designation = document.getElementById("designation");
var taarif = document.getElementById("taarif");
let testimonial = document.getElementById("testimonial1")

var name = document.getElementById("name").innerHTML = name1;
designation.innerHTML = designation1;
taarif.innerHTML = taarif1;
let testimonial_no = 1;

// FUNCTION TO SWITCH TESTIMONIALS
function switchTestimonial () {
    testimonial.style.transform = "translateY(100%)";
    if (testimonial_no == 1) {
        var name = document.getElementById("name").innerHTML = name2;
        designation.innerHTML = designation2;
        taarif.innerHTML = taarif2;
        testimonial.style.transform = "translateY(0%)";
        testimonial_no = 2;
    }
    else if (testimonial_no == 2) {
        var name = document.getElementById("name").innerHTML = name3;
        designation.innerHTML = designation3;
        taarif.innerHTML = taarif3;
        testimonial.style.transform = "translateY(0%)";
        testimonial_no = 3;
    }
    else if (testimonial_no == 3) {
        var name = document.getElementById("name").innerHTML = name4;
        designation.innerHTML = designation4;
        taarif.innerHTML = taarif4;
        testimonial.style.transform = "translateY(0%)";
        testimonial_no = 4;
    }
    else if (testimonial_no == 4) {
        var name = document.getElementById("name").innerHTML = name1;
        designation.innerHTML = designation1;
        taarif.innerHTML = taarif1;
        testimonial.style.transform = "translateY(0%)";
        testimonial_no = 1;
    }
}

setInterval(switchTestimonial, 10000);

setInterval(() => {
    testimonial.style.transform = "translateY(100%)";
}, 9500)
