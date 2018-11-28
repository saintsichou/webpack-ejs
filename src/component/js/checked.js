$(function(){
	    $('#ms').change(function() {
            // console.log($(this).val());
        }).multipleSelect({
           selectAll: false,
           placeholder: "请选择商家",
           onClick: function(i) {
                // console.log(view);
           }
        });
})