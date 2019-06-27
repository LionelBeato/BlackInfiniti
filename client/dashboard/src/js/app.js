$(".Rtable--stripe .Rtable-cell").each( function() {
  var order = $(this).attr("style").match(/order\s*:\s*\d/g)[0].replace(/order(\s*):(\s*)/,"");
  if(order % 2 === 0) $(this).addClass("is-striped");
});