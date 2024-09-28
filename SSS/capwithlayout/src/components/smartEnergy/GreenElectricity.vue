<script setup>
import basePage from "@/components/common/BasePage.vue";
import baseButton from "@/components/common/BaseButton.vue";
import baseButtonDownload from "@/components/common/BaseButtonDownload.vue";
import baseButtonSearch from "@/components/common/BaseButtonSearch.vue";

import axios from "axios";
import '@/assets/css/dashboard.min.css'

const btnClick = (event) => {
  alert("button click");

  axios
    .get(
      "http://auohqcmmtt01.corpnet.auo.com/MicroLEDApi/api/EmpDataApi/GetEmpLike?empKey=1107308"
    )
    .then((res) => {
      console.log(res);
    });
};
const btnDownload = (event) => {
  alert("Download");
};
const btnSearch = (event) => {
  alert("Search");
};
</script>

<template>
  <div class="dashboard_content">
         
            <div class="dashboard_chart">
                <div class="container">
                    <h2 class="title">主要標題 <small>(這頁為Chart & Grid圖表 示範頁)</small></h2>
                    <!-- tab -->
                    <div class="tab">
                        <ul>
                            <li><a href="#" class="active">標籤-01</a> </li>
                            <li><a href="#">標籤-02</a> </li>
                            <li><a href="#">標籤-03</a> </li>
                            <li><a href="#">標籤-04</a> </li>
                        </ul>
                    </div>
                    <!--最外層格線系統 chart-grid-->
                    <div class="chart-grid">
                        <!-- flex-grid-2-2-2-2-2-2 建議不要使用，格子太小 -->
                        <h3 class="sub_title">數據摘要(月份)</h3>
                        <div class="flex-grid-2-2-2-2-2-2">
                            <div class="col">
                                <div class="mp_widget">
                                    <h4>空調總使用次數</h4>
                                    <div class="widget_now_counter">
                                        <div class="counter" data-count="132">0</div> <!-- 加入初始值0 -->
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mp_widget">
                                    <h4>空調平均設定溫度</h4>
                                    <div class="widget_now_counter">
                                        <div class="counter" data-count="25.2">0</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mp_widget">
                                    <h4>電燈(RY65)總使用次數</h4>
                                    <div class="widget_now_counter">
                                        <div class="counter" data-count="300">0</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mp_widget">
                                    <h4>電燈(RY67)總使用次數</h4>
                                    <div class="widget_now_counter">
                                        <div class="counter" data-count="1216">0</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mp_widget">
                                    <h4>電燈(RY69)總使用次數</h4>
                                    <div class="widget_now_counter">
                                        <div class="counter" data-count="1115">0</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mp_widget">
                                    <h4>平均會議室使用率</h4>
                                    <div class="widget_now_counter">
                                        <div class="counter" data-count="83">0</div><span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grid-8-4">
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <figure class="highcharts-figure">
                                            <div id="line2"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <figure class="highcharts-figure">
                                            <div id="pie"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grid-4-8">
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <figure class="highcharts-figure">
                                            <div id="line"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <figure class="highcharts-figure">
                                            <div id="plot"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grid-12 ">
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                        <figure class="highcharts-figure">
                                            <div id="areaChart"></div>
                                        </figure>
                                        <!-- table -->
                                        <div class="table_wrapper">
                                            <table class="table_hover">
                                                <thead>
                                                    <tr>
                                                        <th>標題</th>
                                                        <th>標題</th>
                                                        <th>標題</th>
                                                        <th>標題</th>
                                                        <th>時間</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td><time>01/13 08:00</time></td>
                                                    </tr>
                                                    <tr>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td><time>01/13 08:00</time></td>
                                                    </tr>
                                                    <tr>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td><time>01/13 08:00</time></td>
                                                    </tr>
                                                    <tr>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td><time>01/13 08:00</time></td>
                                                    </tr>
                                                    <tr>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td>內容</td>
                                                        <td><time>01/13 08:00</time></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- pagination -->
                                        <div class="pagination">
                                            <ul class="page">
                                                <li class="first"><a href="#" title="第一頁">第一頁 </a></li>
                                                <li class="prev"><a href="#" title="回上一頁">回上一頁 </a></li>
                                                <li class="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">...</a></li>
                                                <li><a href="#">8</a></li>
                                                <li><a href="#">9</a></li>
                                                <li><a href="#">10</a></li>
                                                <li class="next"><a href="#" title="下一頁">下一頁 </a></li>
                                                <li class="last"><a href="#" title="最後一頁">最後一頁 </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grid-6-6 ">
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <figure class="highcharts-figure">
                                            <div id="axes_line_column"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <!-- 圖表模組 chart_block -->
                                <div class="chart_block">
                                    <h3>圖表標題</h3>
                                    <time>2024.09.01 12:00:00</time>
                                    <!-- chart放在chart content下面 -->
                                    <div class="chart_content">
                                        <figure class="highcharts-figure">
                                            <div id="gauge"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grid-4-4-4">
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <figure class="highcharts-figure">
                                        <div id="basic_column"></div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <figure class="highcharts-figure">
                                        <div id="piefill"></div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <figure class="highcharts-figure">
                                        <div id="radial"></div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grid-3-3-3-3">
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <div class="no_data">
                                        <img src="images/nodata.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <div class="no_data">
                                        <img src="images/nodata.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <div class="no_data">
                                        <img src="images/nodata.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- 圖表模組 chart_block -->
                            <div class="chart_block">
                                <h3>圖表標題</h3>
                                <time>2024.09.01 12:00:00</time>
                                <!-- chart放在chart content下面 -->
                                <div class="chart_content">
                                    <div class="no_data">
                                        <img src="images/nodata.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
