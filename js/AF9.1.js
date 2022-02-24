// write here the optimal jQuery code as required in the statemens

$(document).ready(function () {
  $("main > section:nth-of-type(odd)").hover(
    function () {
      $(this).find("a + div").fadeIn(1000);
    },
    function () {
      $(this).find("a + div").fadeOut(1000);
    }
  );

  $("section:nth-of-type(even)").on("dblclick", function () {
    $(this).find("a + div").fadeIn(1000);
  });

  $("section > div > img + img").click(function () {
    $(this).parent().parent().find("a + div").fadeOut(1000);
  });

  $("nav p").click(function() {
    let txt = $(this).text();
    $(`h2:contains('${txt}')`).parent().slideToggle(1000);
  });


});
