var input = "";
var val = "";

$("button").click(function() {
    val = $(this).text();

    if (parseInt(val, 10) == val || val === "/" || val === "*" || val === "-" || val === "+" || val === ".") {
        if (val === "." && input.substring(input.length - 1) === "." ||
            val === "/" && input.substring(input.length - 1) === "/" ||
            val === "*" && input.substring(input.length - 1) === "*" ||
            val === "-" && input.substring(input.length - 1) === "-" ||
            val === "+" && input.substring(input.length - 1) === "+") {
            input += "";
        } else {
            input += val;
            $("#screen").val(input);
        }
    } else if (val === "=") {
        input = eval(input);
        $("#screen").val(input);
        input = "";
    } else if (val === "C") {
        input = "";
        $("#screen").val(input);
    } else if ($(this).attr(".backSpace") === $(this).attr(".backSpace")) {
        input = input.slice(0, -1);
        $("#screen").val(input);
    }
});