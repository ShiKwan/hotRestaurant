// #tableuse -- for reservation

// #waitlist -- for waitlist
var numWaitList = 0;
var arrWaitList = [];
var numReservation = 0;
var arrReservation = [];

$.get("/api/reservation", function (data) {
    console.log(data);
    console.log(data.length);
    if (data) {
        $("#tableUse").show();
        for (var i = 0; i < data.length; i++) {
            var div = $("div");
            var h2 = $("h2");
            div.addClass("well");
            div.attr("id", "tableWell-0" + i + 1)

            var span = $("span");
            span.addClass("label").addClass("label-primary");
            span.html(i);
            h2.text(" | " + data.nameid);
            h2.append(span)
            div.append(h2)
            $("#tableUse").append(div);
            arrReservation.push(data[i]);
        }
    }
});

$.get("/api/waitList", function (data) {
    console.log(data);
    console.log(data.length);
    if (data) {
        $("#waitlist").show();
        for (var i = 0; i < data.length; i++) {
            var div = $("div");
            var h2 = $("h2");
            div.addClass("well");
            div.attr("id", "tableWell-0" + i + 1)

            var span = $("span");
            span.addClass("label").addClass("label-primary");
            span.html(i);
            h2.text(" | " + data.nameid);
            h2.append(span)
            div.append(h2)
            $("#waitlist").append(div);
            arrWaitList.push(data[i]);
        }
    }
});

$(".submit").click(function(){
    event.preventDefault();
    var newReservation = {
        dinerName: $("#reserve-name").val().trim(),
        phoneNumber: $("#reserve-phone").val().trim(),
        email: $("#reserve-email").val().trim(),
        nameid: $("#reserve-unique-id").val().trim().replace(/\s+/g, "").toLowerCase()
    };
    console.log(arrReservation);
    console.log(arrWaitList);
    if(arrReservation <5){
        $.post("/api/addReservation", newReservation)
            .then(function (data) {
                console.log(data);
                alert("Adding reservation...");
            });
    }else{
        $.post("/api/addWaitList", newReservation)
            .then(function (data) {
                console.log(data);
                alert("Adding waitlist...");
            });
    }
    // Question: What does this code do??
    
})