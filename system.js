<!--ここからSpreadSheetの一部を表示する-->
<script>
function input_spreadsheets(sheet_id){
d3.csv("https://docs.google.com/spreadsheets/d/"+
sheet_id+"/export?format=csv&gid=1948877772", function(error, data){
	var text = data[1].ert;
	return(text);
});};
</script>
<!--ここまでSpreadSheetの一部を表示する-->	
