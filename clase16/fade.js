$(document).ready( () => {
    $(".btn-fade").click(() => {
        $(".div1").fadeIn();
        $(".div2").fadeIn("slow");
        $(".div3").fadeIn(2000);
    })
})