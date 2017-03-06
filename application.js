// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practise. Each time you make some progress in software
// development, you want to save a snapshot.

function runChallenges() {

    // Ex 1. Read the content of the email input
    var email = $("input#email").val(); // TODO: replace null, keep the email variable.


    // Ex 2. Fill the content of the email input with your email
    $("input#email").val("thomascaillier@gmail.com");



    // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
    //       The text should be emphasized using a <strong> tag
    $("span#email-hint").html("<strong>This is my email now</strong>");


    // Ex 4. Add the .blue CSS class to the table header cells (th elements)
    $("th").addClass("blue");


    // Ex 5. Count the number of table body rows there are (team count!)
    var team_count = $("table.table tbody tr").last().index() + 1; // TODO: replace 0, keep the team_count variable.



    // Ex 6. Say there is a 15th team added to the table.
    //       Add a row at the bottom, this new team should have zero points.
    $("table.table tbody").append("<tr></tr>");
    $("table.table tbody tr").last().append("<td>" + (team_count + 1) + "</td>");
    $("table.table tbody tr").last().append("<td>Crazy Rugby Team</td>");
    $("table.table tbody tr").last().append("<td>0</td>");


    // Ex 7. Write some code to sum all points given to all teams
    var sum = 0; // TODO: replace 0 with your sum result, keep the sum variable.
    var tbody = $("table.table tbody");
    tbody.find("tr").each(function() {
        sum += parseInt($(this).find("td").eq(2).text());
    })


    // Ex 8. Change the background color of all table header cells to #DDF4FF
    var th = $("table.table thead").find("th");
    th.each(function() {
        $(this).css("background-color", "#DDF4FF");
    })


    // Ex 9. Translate the #results list 20px downward (animation would be great ^_^)
    $("ul#results").animate({
        top: "+=20"
    }, 800);


    // Ex 10. Remove the "Email:" label from the DOM
    $("label:contains('Email:')").remove();




    // Checking exercise answers. DO NOT MODIFY BELOW
    assert_equal(email, "dleuliette@gmail.com");
    assert_not_equal(document.getElementById("email").value, "dleuliette@gmail.com");
    assert_equal($('strong', document.getElementById("email-hint")).html(), "This is my email now");
    assert_equal($('th:eq(0)').css('color'), 'rgb(0, 0, 255)');
    assert_equal(team_count, 14);
    assert_equal($('tbody > tr').length, 15);
    assert_equal(sum, 859)
    assert_equal($('th:eq(0)').css('background-color'), 'rgb(221, 244, 255)');
    setTimeout(function() {
        assert_equal($('ul:eq(0)').position().top, 20);
        assert_equal(document.getElementsByTagName('label').length, 0);
    }, 1000);
}
