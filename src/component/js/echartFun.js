

window.ehartsFun={
	pie:function(id,value,color){
		var mychart = echarts.init(document.getElementById(id));
		var option = {
			 series: [{
            name: '饼图',
            type: 'pie',
            center:['50%', '50%'],
            radius: ['80%', '98%'],
            label: {
                normal: {
                    // position: 'center'
                }
            },
            hoverAnimation:false,
            data: [{
                value: value,
                name: '饼图的值',
                itemStyle: {
                    normal: {
                        color: color
                    }
                },
                label: {
                    normal: {
                        position:'center',
                        formatter: function(value,i){
                                    console.log(value.data.value)
                                    return value.data.value.toFixed(1)+'%'                
                        },
                        textStyle: {
                            fontSize:20
                        }
                    }
                }
            }, {
                value: 100-value,

                tooltip: {
                    show: false
                },
                label:{
                    normal: {
                    show:false
                    }
                },
                labelLine:{
                    normal:{
                        show:false
                    },
                    emphasis:{
                        show:false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#e5e4f2'
                    },
                    emphasis: {
                        color: '#e5e4f2'
                    }
                },
                hoverAnimation: false
            }]
        }]
		};
		mychart.setOption(option);
	}
}