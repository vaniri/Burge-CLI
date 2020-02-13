$(".devoured").on("click", function () {
  event.preventDefault();
  let id = $(this).data("id")
  console.log(id);
  location.reload();
})

$("#add_burger").on("click", function () {
  event.preventDefault();
  let newBurger = { burger_name: $("#burger_name").val().trim() };
  $.post("/burgers", newBurger, () => {
    showNewBurger(newBurger);
    location.reload();
  });
})

