const story1 = document.querySelector(".pic0");
const story2 = document.querySelector(".pic1");
const story3 = document.querySelector(".pic2");
const story4 = document.querySelector(".pic3");
const story5 = document.querySelector(".pic4");

story1.addEventListener("click", function () {
    swal('Error!', 'The story is not hear !', 'info');
});
story2.addEventListener("click", function () {
    swal('Error!', 'Congratulation!.You find the story!', 'success');
});
story3.addEventListener("click", function () {
    swal('Error!', 'Why are you click hear !', 'error');
});
story4.addEventListener("click", function () {
    swal('Error!', ' Not do this,It is wrong!', 'warning');
});
story5.addEventListener("click", function () {
    swal('Error!', 'This facility is coming soon !', 'error');
});
