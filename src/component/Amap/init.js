

window.map = new AMap.Map("mapG", {
            resizeEnable: true,
            zoom: 8.5,
            center: [118.815015,31.994749]
        });
         map.on('click', function(e) {
            console.log('您在[ ' + e.lnglat.getLng() + ',' + e.lnglat.getLat() + ' ]的位置点击了地图！');
        });


