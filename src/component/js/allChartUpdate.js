function allChartUpdate(data) {
      
        var econts = [].slice.call(document.querySelectorAll('.econt'));
        econts.forEach(function(item) {

            // item.innerHTML = '<div class="chart-container"></div>';


            switch (item.id) {
                case 'econtSex':
               
                     echartfun.pie(item.id,data.sexy[0].title,data.sexy[0].content,data.sexy[0].data)
                  
                    break;
                case 'econtBar1':

                    echartfun.sexybar(item.id,data.age[0].title,data.age[0].content,data.age[0].dataAge1,data.age[0].dataAge2,data.age[0].dataAge3)
                    break;
                case 'econt1':

                   echartfun.pie(item.id,data.consum[0].title,data.consum[0].content,data.consum[0].data);
                    break;
                case 'econt3':
                   echartfun.lifebar(item.id,data.lifepart[0].title,data.lifepart[0].content,data.lifepart[0].databar,data.lifepart[0].databar2)
                    break;
                case 'econt4':

                   echartfun.pie(item.id,data.internet[0].title,data.internet[0].content,data.internet[0].data)
                    break;
                case 'econt5':

                    echartfun.sexybar(item.id,data.work[0].title,data.work[0].content,data.work[0].dataAge1,data.work[0].dataAge2,data.work[0].dataAge3);
                  
                    break;
                case 'econt6':
                  echartfun.pie(item.id,data.car[0].title,data.car[0].content,data.car[0].data)
                    break;
                case 'econt2':
                    echartfun.pie2(item.id,data.level[0].title,data.level[0].data);

                    break;
                default:
                    break;
            }

         

        })

}