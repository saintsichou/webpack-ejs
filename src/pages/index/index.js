import '../common';
// const echarts = require('echarts')
// import '../../component/Amap/init';
import { addMarker } from '../../component/Amap/addPoint';
import './index.css';
import '../../assets/lib/foundation-datepicker.zh-CN.js';
import * as echartfun from '../../component/echarts';

$(function() {


    var map = new AMap.Map("mapG", {
        resizeEnable: true,
        zoom: 13,
        center: [116.338475, 40.007393]
    });

    addMarker('北京市', [116.338475, 40.007393])
    var intfDir = 'psgPortrait2'
    $.ajax({
        url: "./assets/mock-data/" + intfDir + "/" + "北京市" + ".js",
        dataType: 'json',
        success: function(data) {


            allChartUpdate(data)
        },
        error: function() {
            alert("该区块暂无数据")
        }
    })
    // 多选下拉
    var checkin = $('#dpd1').fdatepicker({
        initialDate: '2018-05-08',
        format: 'yyyy-mm-dd',
    }).on('changeDate', function(ev) {
        console.log('test');
        console.log(ev.date.valueOf());
        console.log(checkout.date.valueOf());
        if (ev.date.valueOf() >= checkout.date.valueOf()) {
            console.log(ev.date.valueOf());
            // console.log(checkout.valueOf());
            alert('开始日期不能大于结束日期');
            return false;
            $('#startDate').text(startDate);
        } else {

            $('#startDate').text($('#dpd1').data('date'));
        }
        $('#dpd1').fdatepicker('hide');
    }).data('datepicker');
    var checkout = $('#dpd2').fdatepicker({
        initialDate: '2018-05-09',
        format: 'yyyy-mm-dd'
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() <= checkin.date.valueOf()) {
            alert('结束日期不能小于开始日期');

        } else {

            endDate = new Date(ev.date);
            $('#endDate').text($('#dpd2').data('date'));
        }
        $('#dpd2').fdatepicker('hide');
    }).data('datepicker');
    var checkin2 = $('#dpd12').fdatepicker({
        initialDate: '2018-04',
        format: 'yyyy-mm',
        language: 'zh-CN'
    })
    var checkin3 = $('#dpd22').fdatepicker({
        initialDate: '2018-05',
        format: 'yyyy-mm',
        language: 'zh-CN'
    })

    $('#parent select').change(function() {
        var ms = $("#parent").find("option:selected").text();

        if (ms == '月') {
            console.log('test1');
            $('#dpd12').css('display', 'block');
            $('#dpd1').css('display', 'none');
            $('#dpd22').css('display', 'block');
            $('#dpd2').css('display', 'none');

        } else {
            $('#dpd12').css('display', 'none');
            $('#dpd1').css('display', 'block');
            $('#dpd22').css('display', 'none');
            $('#dpd2').css('display', 'block');
        }
    })
    //搜索按钮 
    $('#search_date').click(function() {
        var selectText = $("#parent2 select").find("option:selected").text();
        var ms = $("#parent").find("option:selected").text();
        var startD = $('#parent3').find('#dpd1').is(':visible') ? $('#parent3').find('input').val() : $('#parent3').find('#dpd12').val();
        var endD = $('#parent4').find('#dpd2').is(':visible') ? $('#parent4').find('input').val() : $('#parent4').find('#dpd22').val();

        $.ajax({
            url: "./assets/mock-data/" + intfDir + "/" + ms + '-' + startD + endD + selectText + ".js",
            dataType: 'json',
            success: function(data) {
                console.log(selectText);
                console.log(data);
                addMarker(data.ads[0].name, data.ads[0].pos)
                console.log(data.ads[0].name + data.ads[0].pos);
                console.log(data.people[0].datalist1);

                allChartUpdate(data)
            },
            error: function() {
                alert("该区块暂无数据")
            }
        })


    })

    function allChartUpdate(data) {

        var econts = [].slice.call(document.querySelectorAll('.econt'));
        econts.forEach(function(item) {

            // item.innerHTML = '<div class="chart-container"></div>';


            switch (item.id) {
                case 'econtSex':

                    // echartfun.twoPie('econtSex',data.people[0].title,data.people[0].content,data.people[0].datalist1,data.people[0].datalist2)

                    break;
                case 'econtBar1':
                    echartfun.line('econtBar1', data.lineData[0].title2, null, data.lineData[0].xdata, data.lineData[0].yString, [data.lineData[0].data[0]])
                    break;
                case 'econt1':
                    echartfun.lineDatezoom('econt1', data.lineData3[0].title2, null, data.lineData3[0].xdata, data.lineData3[0].yString, [data.lineData3[0].data[0]])
                    break;
                case 'econt3':
                    echartfun.line('econt3', data.lineData2[0].title2, data.lineData2[0].content2, data.lineData2[0].xdata, data.lineData2[0].yString, data.lineData2[0].data)
                    break;
                case 'econt4':

                    echartfun.line('econt4', data.lineData4[0].title2, data.lineData4[0].content2, data.lineData4[0].xdata, data.lineData4[0].yString, data.lineData4[0].data)
                    break;

                default:
                    break;
            }



        })

    }


})