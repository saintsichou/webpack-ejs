export function conbar(id,title,dataN){
 var chart4 = echarts.init(document.getElementById(id));

    var option4_1 = {
        title: {
            text: title,
            left: 'center',
            top: '2%',
            textStyle: {
                color: '#4e515a',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',
            },
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
                dataView: {}
            },
            right: 4,
            top: -5
        },
        legend: {
            data: ['1', '2', '3', '4', '5'],
            top: '8%',
            textStyle: {
                color: '#90979c',
            },

        },
        grid: {
            "top": '20%',
            "bottom": 80,
        },
        xAxis: [{
            type: 'category',
            data: ['百货类', '超市', '餐饮', '零售', '影院', '娱乐', '儿童', '其它']
        }],
        yAxis: [{
            type: 'value',

            position: 'left',
            axisLabel: {
                formatter: '{value}'
            }
        }, {
            type: 'value',

            position: 'left',
            axisLabel: {
                formatter: '{value}'
            }
        }],
        series:dataN
    }
	chart4.setOption(option4_1);
}