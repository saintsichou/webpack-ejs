window.echartStyleTool = {
    "bar":[
        function(points,dataForMan,dataForFemale){// 柱状图，性别x商场，图例分为男女性别，配色黄绿
            var opt = {
                title: {
                        text: '性别',
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 16,
                            color: '#484d97'
                        },
                        left: '3%',
                        top:'2%'

                },
                color:['#6b78b8','#fbc153'],
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        dataView:{},
                    },
                    top:'2%',
                    right:'5%'
                },
                "tooltip": {
                    "trigger": "axis",
                    "axisPointer": {
                        "type": "shadow",
                        textStyle: {
                            color: "#fff"
                        }

                    },
                },
                label: {
                    normal: {
                        show: true,
                        position:'top',
                        formatter:'{c}%',
                    }
                },
                'grid': {
                        right:'5%',
                        left:'5%',
                        top:'28%',
                        bottom: '15%'
                },
                "legend": {
                    left:'20%',
                    itemWidth:15,
                    itemHeight:10,

                    top: '4%',
                    textStyle: {
                        color: '#90979c',
                    },
                    "data": ["男","女"]
                },
                "calculable": true,
                "xAxis": [{
                    "type": "category",
                     position:'bottom',
                    "axisLine": {
                        show:false,
                        lineStyle: {
                            color: '#90979c'
                        }
                    },
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "splitArea": {
                        "show": false
                    },
                    "axisLabel": {

                        "interval": 0,

                    },
                    "data": points,
                }],
                "yAxis": [{
                    "type": "value",
                    "splitLine": {
                        "show": false
                    },
                    "axisLine": {
                        show:false,
                        lineStyle: {
                            color: '#90979c'
                        }
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLabel": {
                        show:false,
                        "interval": 0,
                        formatter:'{value}%'

                    },
                    "splitArea": {
                        "show": false
                    },

                }],

                "series": [{
                        "name": "男",
                        "type": "bar",
                        barMaxWidth: '18%',
                        barGap:'100%',
                        "data": dataForMan
                    },

                    {
                        "name": "女",
                        "type": "bar",
                        barMaxWidth: '18%',
                        barGap:'100%',
                        "data":dataForFemale
                    }
                ]
            }
            return opt;
        },
        function(title,points,cats,data){//工作地洞察年龄

            var colors = ["#e0556c","#fbc153","#8562ab",'#84bd6c','#5e90d9'];
            var opt = {
                
                title: {
                    text: title,
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#484d97',
                        fontSize: 16
                    },
                    left: '3%',top:'2%'
                },

                "legend": {
                    left:'5%',
                    itemWidth:15,
                    itemHeight:3,

                    bottom: '2%',
                    textStyle: {
                        color: '#90979c',
                    },
                    "data": points
                },
                toolbox:{
                    feature:{
                        saveAsImage :{},
                        dataView :{
                            optionToContent: function(opt) {

                                var axisData = opt.yAxis[0].data;
                                var series = opt.series;
                                var legend = opt.legend[0];
                                var table = '';
                                table = '<table style="width:90%;margin:0 auto;font-size:12px; line-height:24px; text-align:left">'
                                            +'<tbody><tr>'
                                             + '<td>'+title+'</td>';
                                             for (var k = 0, p = legend.data.length; k < p; k++) {
                                                table += '<td>' + legend.data[k] + '</td>';
                                             }
       
                                             table += '</tr>';
                                            for (var i = 0, l = axisData.length; i < l; i++) {
                                                table += '<tr>';
                                                table += '<td>' + axisData[i] + '</td>';

                                                    for (var k = 0, p = legend.data.length; k < p; k++) {
                                                        table += '<td>' + series[2+k].data[i] + '%</td>';
                                                    }


                                                table += '</tr>';
                                            }
                                table += '</tbody></table>';
                                return table;
                            }
                        },
                    },
                    top:'2%',
                    right:'3%'

                },
                grid: {
                    top:'25',
                    left: '5%',
                    right: '5%',
                    bottom: '70'
                },
                tooltip: {
                    show:"true",
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter:function(data){
                        if(data.data==0 || data.data==100)
                            return;
                        return data.name+'<br/>'+data.seriesName + ':' +  data.data + '%'
                    }
                },
                itemStyle:{
                    normal: {
                        show: true,
                        color: '#e9eaf5',
                        barWidth:5,
                        barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                    },
                    emphasis:{
                        color: '#e9eaf5',
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
                    axisLabel:{
                        show:false

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
                            data: cats
                        },
                        {
                            type: 'category',
                            inverse:true,
                            axisLine: {show:false},
                            axisTick: {show:false},
                            axisLabel: {show:false},
                            splitArea: {show:false},
                            splitLine: {show:false},
                            data: cats
                        },

                ],
                series: [



                ]
            };

            var dataBg = [];
            var dataBg2 = [];
            for(var i=0;i<cats.length;i++){
                dataBg.push(0);
                dataBg2.push(100)
            }

            opt.series.push({
                name: '',
                type: 'bar',
                barWidth:'75%',
                barCategoryGap:-12,
                yAxisIndex:0,
                data:dataBg
            });
            opt.series.push({
                name: '',
                type: 'bar',
                barWidth:'75%',
                barCategoryGap:-12,
                yAxisIndex:1,
                data:dataBg
            });
            for(var i=0;i<points.length;i++){

                opt.series.push({
                    name: points[i],
                    type: 'bar',
                    yAxisIndex:1,
                    z:1,
                    itemStyle:{
                        normal: {
                            color:colors[i],
                        },
                        emphasis:{
                            color:colors[i],
                        }
                    },
                    data: data[i]
                })
            }

            for(var i=0;i<points.length;i++){
                opt.series.push({
                    name: points[i],
                    type: 'bar',
                    z:-1,
                    yAxisIndex:0,
                    data: dataBg2
                });

            }


            return opt;
        },
        function(title,points,cats,data){
            var opt = {
                    color :["#e0556c","#fbc153","#8562ab",'#84bd6c','#5e90d9'],
                    title: {
                        text: title,
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 16,
                            color: '#484d97'
                        },
                        left: '3%',
                            top:'3%'

                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView:{}
                        },
                        right:4,
                        top:2
                    },
                    legend: {
                        data: points,
                        width:'50%',
                        itemWidth:15,
                        itemHeight:5,
                        top:'2%',
                        left:'22%',
                        orient:'horizontal'
                    },
                    grid: {
                        top:'22%',
                        left: '4%',
                        right: '10%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: cats,
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false,
                        },
                        axisLabel:{
                            interval:0
                        },
                        splitLine:{
                            show:false,
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisTick:{
                            show:false,
                        },
                        splitLine:{
                            show:false,
                        },
                        axisLine: {
                            show:false,
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        axisLabel: {
                            // color:'#eb6818',
                            formatter: '{value}%'
                        }
                    },
                    series:[]
            };

            for(var i = 0 ; i<points.length;i++){
                opt.series.push({
                    name: points[i],
                    type: 'bar',
                    data: data[i]
                });
            }

            return opt;
        },
        function(title,legend,cats,data){

            var opt = {
                backgroundColor: '#fff',
                title: {
                    text: title,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#484d97'
                    },
                    left: '3%',
                        top:'2%'

                },
                color:['#484d97','#e0556c',"#fbc153"], 
                 toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView:{},
                        },
                        top:'2%',
                        right:'5%'
                    },
                "tooltip": {
                    "trigger": "axis",
                    "axisPointer": {
                        "type": "shadow",
                        textStyle: {
                            color: "#fff"
                        }

                    },
                },
                 'grid': {
                        top: '22%',
                        left: '5%',
                        right: '5%',
                        bottom: '20%',
                        containLabel: true
                    },
                "legend": {
                    right:'1%',
                    itemWidth:15,
                    itemHeight:10,

                    bottom: '2%',
                    textStyle: {
                        color: '#90979c',
                    },
                    "data": legend
                },


                "calculable": true,
                "xAxis": [{
                    "type": "category",
                     position:'bottom',
                    "axisLine": {
                        show:false,
                        lineStyle: {
                            color: '#90979c'
                        }
                    },
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "splitArea": {
                        "show": false
                    },
                    "axisLabel": {

                        "interval": 0,
                         rotate:35
                    },
                    "data": cats,
                }],
                "yAxis": [{
                    "type": "value",
                    "splitLine": {
                        "show": false
                    },
                    "axisLine": {
                        show:false,
                        lineStyle: {
                            color: '#90979c'
                        }
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLabel": {
                        "interval": 0,
                        formatter:'{value}%'

                    },
                    "splitArea": {
                        "show": false
                    },

                }],

                "series": [
                ]
            }


            for(var i = 0 ; i<legend.length;i++){
                opt.series.push({
                    name: legend[i],
                    type: 'bar',
                    "stack": "总量",
                    "barMaxWidth": 35,
                    "barGap": "10%",
                    data: data[i]
                });
            }



            return opt;
        },
        function(wrap,title,cats,data){ // 横向柱图 年龄

            var dataBg = [];
            var dataBg2 = [];
            for(var i=0;i<cats.length;i++){
                dataBg.push(0);
                dataBg2.push(100)
            }

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
                            data: cats
                        },
                        {
                            type: 'category',
                            inverse:true,

                            axisLine: {show:false},
                            axisTick: {show:false},
                            axisLabel: {show:false},
                            splitArea: {show:false},
                            splitLine: {show:false},
                            data: cats
                        },

                ],
                series: [
                    {
                        name: '',
                        type: 'bar',
                        barGap:'600%',
                        barCategoryGap:0,
                        yAxisIndex:0,

                        data: dataBg
                    },

                    {
                        name: '',
                        type: 'bar',
                        barGap:'600%',
                        barCategoryGap:0,
                        yAxisIndex:1,

                        yAxisIndex:1,
                        data: dataBg
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
                        data: dataBg2
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
                                distance:  - wrap.clientWidth * .905,
                                textStyle: {
                                    color: '#000'
                                },
                                formatter:'{c}%',

                            }
                        },

                        data: data
                    }

                ]
            };
            return opt;
        },
        function(title,points,cats,data){
            var opt = {
                    color :["#e0556c","#fbc153","#8562ab",'#84bd6c','#5e90d9'],
                    title: {
                        text: title,
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 16,
                            color: '#484d97'
                        },
                        left: '3%',
                            top:'3%'

                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView:{}
                        },
                        right:4,
                        top:2
                    },
                    legend: {
                        data: points,
                        itemWidth:15,
                        itemHeight:5,
                        bottom:'3%',
                        width:'94%',
                        right:'3%'
                    },
                    grid: {
                        top:'15%',
                        left: '4%',
                        right: '3%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: cats,
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false,
                        },
                        axisLabel:{
                            interval:0
                        },
                        splitLine:{
                            show:false,
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisTick:{
                            show:false,
                        },
                        splitLine:{
                            show:false,
                        },
                        axisLine: {
                            show:false,
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        axisLabel: {
                            // color:'#eb6818',
                            formatter: '{value}%'
                        }
                    },
                    series:[]
            };

            for(var i = 0 ; i<points.length;i++){
                opt.series.push({
                    name: points[i],
                    type: 'bar',
                    data: data[i]
                });
            }

            return opt;
        },
        function(title,legend,cats,data){

            var opt = {
                backgroundColor: '#fff',
                title: {
                    text: title,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#484d97'
                    },
                    left: '3%',
                        top:'2%'

                },
                color:['#484d97','#e0556c',"#fbc153"], 
                 toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataView:{},
                        },
                        top:'2%',
                        right:'5%'
                    },
                "tooltip": {
                    "trigger": "axis",
                    "axisPointer": {
                        "type": "shadow",
                        textStyle: {
                            color: "#fff"
                        }

                    },
                },
                 'grid': {
                        top: '15%',
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                "legend": {
                    right:'1%',
                    itemWidth:15,
                    itemHeight:10,

                    bottom: '2%',
                    textStyle: {
                        color: '#90979c',
                    },
                    "data": legend
                },


                "calculable": true,
                "xAxis": [{
                    "type": "category",
                     position:'bottom',
                    "axisLine": {
                        show:false,
                        lineStyle: {
                            color: '#90979c'
                        }
                    },
                    "splitLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    },
                    "splitArea": {
                        "show": false
                    },
                    "axisLabel": {

                        "interval": 0,
                         rotate:35
                    },
                    "data": cats,
                }],
                "yAxis": [{
                    "type": "value",
                    "splitLine": {
                        "show": false
                    },
                    "axisLine": {
                        show:false,
                        lineStyle: {
                            color: '#90979c'
                        }
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLabel": {
                        "interval": 0,
                        formatter:'{value}'

                    },
                    "splitArea": {
                        "show": false
                    },

                }],

                "series": [
                ]
            }


            for(var i = 0 ; i<legend.length;i++){
                opt.series.push({
                    name: legend[i],
                    type: 'bar',
                    "stack": "总量",
                    "barMaxWidth": 35,
                    "barGap": "10%",
                    data: data[i]
                });
            }



            return opt;
        }

    ],
    'line':[
        function(title,points,cats,data){//工作地洞察生活阶段、教育程度、收入层级
            var opt = {
                color : ["#e0556c","#fbc153","#8562ab",'#84bd6c','#5e90d9'],
                
                title: {
                    text: title,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#484d97'
                    },
                    left: '3%',
                        top:'2%'

                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                legend: {
                    icon: 'rect',
                    itemWidth: 10,
                    itemHeight: 5,
                    itemGap: 13,
                    bottom:'2%',
                    data: points,
                    right: '3%',
                    textStyle: {
                        fontSize: 12
                        // color: '#F1F1F3'
                    }
                },
                grid: {
                    top: '22%',
                    left: '5%',
                    right: '5%',
                    bottom: '30%',
                    containLabel: true
                },
                  toolbox: {
                    feature: {
                        saveAsImage: {},
                        dataView:{},
                        magicType: {
                            type: ['line', 'bar']
                        }
                    },
                    top:'2%',
                    right:'5%'
                },

                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    // nameRotate：'30%',
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        rotate:35,
                        interval:0
                    },
                    axisLine: {
                        show:false,

                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    data: cats
                }],
                yAxis: [{
                    name: '',
                    nameGap: '10',
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        formatter: '{value}%',
                        textStyle: {
                            fontSize: 12,
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f2f2f2'
                        }
                    }
                }],
                series: [ ]
            }

            for(var i = 0 ; i<points.length;i++){
                opt.series.push({
                    name: points[i],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: data[i]
                });
            }

            return opt;

        },
        function(title,points,data){//工作地洞察分布率、渗透率
            var opt = {
                color : ["#e0556c","#fbc153","#8562ab"],
                
                title: {
                    text: title,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#484d97'
                    },
                    left: '3%',
                        top:'2%'

                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },

                grid: {
                    top: '22%',
                    left: '5%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                  toolbox: {
                    feature: {
                        saveAsImage: {},
                        dataView:{},
                    },
                    top:'2%',
                    right:'5%'
                },

                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    // nameRotate：'30%',
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        rotate:35,
                        interval:0
                    },
                    axisLine: {
                        show:false,

                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    data: points
                }],
                yAxis: [{
                    name: '',
                    nameGap: '10',
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        formatter: '{value}%',
                        textStyle: {
                            fontSize: 12,
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f2f2f2'
                        }
                    }
                }],
                series: [{
 
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: data
                } ]
            }


            return opt;
        }
    ]
};


