export default {
	pie(id,title,dataN,originalData){
	   var mychart = echarts.init(document.getElementById(id));      
       var optionp2 = {
            color:['#484d97','#e0556c','#fbc153'],
            title:{
                text:title,
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#484d97'
                },
                left: '3%',top:'5%'
            },
            //  legend: {
            //     orient: 'vertical',
            //     x: '2%',
            //     y:'25%',
            //     // align:'auto',
            //     itemGap:5,
            //     itemWidth: 14,
            //     itemHeight: 5,
            //     data:dataN,
            // },
            toolbox:{
                feature:{
                    saveAsImage :{},
                    dataView :{},
                },
                top:'5%',
                right:'3%'

            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} %"
            },
             series: [{
                 hoverAnimation: false, //设置饼图默认的展开样式
                 radius: ['40%', '55%'],
                 center:['50%','60%'],
                 name: '城市人口洞察',
                 type: 'pie',

                 selectedMode: 'single',
                 selectedOffset: 16, //选中是扇区偏移量
                 clockwise: true,
                 startAngle: 90,
                 label: {

                     normal: {
                        show:true,
                        formatter:'{b}\n{d}%',
                         textStyle: {
                             fontSize: 12,
                             color: '#000'
                         }
                     }
                 },
                 labelLine: {

                        normal: {
                            show:true,
                            length:20,
                            length2:20,
                            smooth:0,
                        }
                    },
                 data: originalData
             }]
        };
        mychart.setOption(optionp2)	
	},
	sexybar(id,title,dataName,dataAge1,dataAge2,dataAge3){
		var mychart = echarts.init(document.getElementById(id)); 
		var opt = {
        
        title: {
            text: title,
            textStyle: {
                fontWeight: 'normal',
                color: '#484d97',
                fontSize: 16
            },
            left: '3%',top:'5%'
        },
      toolbox:{
            feature:{
                saveAsImage :{},
                dataView :{
                    optionToContent: function(opt) {
                        console.log(opt)
                        var axisData = opt.yAxis[0].data;
                        var series = opt.series;
                        var table = '<table style="width:90%;margin:0 auto; line-height:24px; text-align:left"><tbody><tr>'
                                     + '<td>'+title+'</td>'

                                     +'<td>' + series[3].name + '</td>'
                                     + '</tr>';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            table += '<tr>'
                                     + '<td>' + axisData[i] + '</td>'
                                     + '<td>' + series[3].data[i] + '%</td>'
                                     + '</tr>';
                        }
                        table += '</tbody></table>';
                        return table;
                    }
                },
            },
            top:'5%',
            right:'3%'

        },
        grid: {
            top:'10%',
            left: '5%',
            right: '18%',
            bottom: '5%'
        },
        tooltip: {
            show:"true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function(data){
                return data[3].name + ':' +  data[3].value + '%'
            }
        },
        xAxis:  {
            type: 'value',
            // min:0,
            // max:100,
            axisTick : {show: false},
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#fff',
                }
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [
                {
                    type: 'category',
                    axisTick : {show: false},

                    axisLabel: {
                        inside:true,
                        show:true,
                        color:'#000',
                        margin:0
                    },
                    inverse:true,
                    axisLine: {
                        show: false,
                        lineStyle:{
                            color:'#000',
                        }
                    },
                    data: dataName
                },
                {
                    type: 'category',
                    inverse:true,

                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data: dataName
                },

        ],
        series: [
            {
                name: '',
                type: 'bar',
                barGap:'600%',
                barCategoryGap:0,
                yAxisIndex:0,
                data: dataAge3
            },

            {
                name: '',
                type: 'bar',
                barGap:'600%',
                barCategoryGap:0,
                yAxisIndex:1,
                yAxisIndex:1,
                data: dataAge3
            },
            {
                name: '',
                type: 'bar',
                barCategoryGap:0,
                yAxisIndex:0,
                itemStyle:{
                    normal: {
                        show: true,
                        color: '#e9eaf5',
                        barWidth:5,
                        barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                    }
                },
                data: dataAge1
            },
            {
                name: '占比',
                type: 'bar',
                barCategoryGap:0,
                yAxisIndex:1,
                itemStyle:{
                    normal: {
                        show: true,
                        color: '#484d97',
                        barWidth:5,
                        barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        distance:   - id.clientWidth * .905,
                        textStyle: {
                            color: '#000'
                        },
                        formatter:'{c}%',

                    }
                },

                data: dataAge2
            }

	        ]
	    }
	    mychart.setOption(opt)
	}
}