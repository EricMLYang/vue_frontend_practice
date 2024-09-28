

<script setup>

import { useStore } from 'vuex';

const store = useStore();
console.log(store.getters["User/getUserData"]);    



setTimeout(() => {
    // console.log('vue 與 AOS 合併需要AOS在VUE生命週期之後，加入延遲');
    if(document.getElementById("app")){
          AOS.init(); //呼叫AOS        
    } 
    }, 100 );


</script>

<style scoped>
.content h3 {
  font-weight:bold!important;
}

.content h2 {
  font-weight:bold!important;
}
</style>
<template>
    <!-- vue+aos會出現問題，網路解決:https://blog.csdn.net/kwon_sdqb/article/details/134104422  加入 <div data-aos="ade-up-right"></div> -->
    <div data-aos="ade-up-right"></div>
    <!-- <div ref="div1" class="h-[100vh] top-20 bg-cover" style="background-image: url('KV_blur.png')">
        <div class="grid grid-cols-4 h-full">
            <div class="grid col-start-2 col-span-2 grid-rows-2 grid-flow-col">
                <div class="flex justify-start items-center">
                    <div>
                        <div class="mt-6 text-white">
                            <div class="mt-64  text-4xl font-bold">智慧空間</div>
                            <div class="mt-2  text-4xl font-bold">啟動無限可能</div>
                            <div class="mt-4  text-lg font-medium "> 提升辦公空間安全性與效率生產力，保障資訊安 全，讓您的工作環境更智慧、更可靠。</div>
                            <button
                                class="mt-8  bg-auoBlue text-white  hover:bg-gray-6 hover:text-auoBlue font-bold rounded-full px-4 py-3.5 min-w-28">
                                聯絡我們 </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ref="div2">
        <div class="grid grid-cols-8 h-full">
            <div class="col-span-3 col-start-2">
                <div class="mt-16">
                    <div class="mt-16 text-auoBlue  text-4xl font-bold"> 用電管理</div>
                    <div class="mt-4  text-lg font-medium">
                        運用AIoT串接工廠與辦公大樓中與能源效率相關之照明、空調、消防、能源管理等系統設備，即時蒐集周圍環境數據，分析碳排放量及監控異常，達到主動式節能，為淨零建築奠下基礎。
                    </div>
                    <button
                        class="mt-8 btn bg-auoBlue text-white  hover:bg-gray-6 hover:text-auoBlue font-bold rounded-full px-4 py-3.5 min-w-28">
                        探索更多 </button>
                </div>
            </div>
            <div class="col-span-3">
                <div> <img src="../assets/images/用電管理.png" class="p-4" /></div>
            </div>
        </div>
        <div class="grid grid-cols-8 h-full">
            <div class="col-span-3 col-start-2">
                <div> <img src="../assets/images//會議室空間管理.png" class="p-4" /></div>
            </div>
            <div class="col-span-3 col-start-5 ml-8">
                <div class="mt-16">
                    <div class=" text-auoBlue text-4xl font-bold"> 會議室空間管理</div>
                    <div class="mt-4  text-lg font-medium ">
                        我們的會議空間管理解決方案不僅簡化了會議室和辦公空間的預訂與管理，更進一步提供了先進的用電管理功能。透過XpacePlus平台、互動式樓層指南，以及房間和辦公桌標誌，讓您輕鬆掌握空間利用率，同時有效降低能源成本和環境影響。
                    </div>
                    <button
                        class="mt-8 btn bg-auoBlue text-white  hover:bg-gray-6 hover:text-auoBlue font-bold rounded-full px-4 py-3.5 min-w-28">
                        探索更多 </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-8 h-full">
            <div class="col-span-3 col-start-2">
                <div class="mt-16">
                    <div class="mt-16 text-auoBlue text-4xl font-bold"> 智慧節能調控</div>
                    <div class="mt-4  text-lg font-medium ">
                        碳排放管理解決方案透過即時數據分析和智慧技術，監控會議室使用率及能源消耗情況，精準掌握會議室營運狀況。方案提供會議室使用效率報告，並比對IoT裝置的啟用時間，以提供精準的節能改善建議，有效減少資源浪費，降低企業碳足跡。
                    </div>
                    <button
                        class="mt-8 btn bg-auoBlue text-white  hover:bg-gray-6 hover:text-auoBlue font-bold rounded-full px-4 py-3.5 min-w-28">
                        探索更多 </button>
                </div>
            </div>
            <div class="col-span-3">
                <div> <img src="../assets/images/智慧節能調控.png" class="p-4" /></div>
            </div>
        </div>
    </div>
    <div ref="div3" class="h-[100vh] top-20 bg-cover bg-auoBlue">
        <div class="grid grid-cols-4 ">
            <div class="grid col-start-2 col-span-2  grid-flow-col">
                <div class="flex justify-start items-center">
                    <div class="mt-6">
                        <div class="mt-16 text-energeticYellow text-4xl font-bold text-center"> 我們的服務</div>
                        <div class="mt-4 text-white text-lg font-medium "> 我們致力於提供全面的智慧空間管理解決方案，透過先進的AI
                            技術和數據分析，為您量身打造高效節能且環保的辦公空間</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-6 mt-16 ">
            <div class="grid col-start-2 col-span-2 grid-rows-1 grid-flow-col">
                <div class="flex justify-start items-center">
                    <div>
                        <span class="inline-grid grid-cols-2 gap-x-1">
                            <div> <img src="../assets/images/etage.jpg" class="mask mask-circle" />
                            </div>
                            <div class=" text-white text-lg font-medium ">
                                <div class=" text-white text-2xl font-bold"> 智慧樓宇</div>
                                我們致力於提供全面的智慧空間管理解決方案，透過先進的AI
                                技術和數據分析，為您量身打造高效節能且環保的辦公空間
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="grid col-start-4 col-span-2 grid-rows-1 grid-flow-col">
                <div class="flex justify-start items-center">
                    <div>
                        <span class="inline-grid grid-cols-2 gap-x-1">
                            <div class="font-bold"> <img src="../assets/images/xpaceplus.svg"
                                    class="mask mask-circle  bg-white " />
                            </div>
                            <div class=" text-white text-lg font-medium ">
                                <div class=" text-white text-2xl font-bold "> AUO Mesh</div>
                                我們的大數據智慧節能解決方案透過監控 IoT 裝置的使用數據趨勢變化，幫助您精確了解和分析能源使用情況
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="grid col-start-2 pt-10 col-span-2 grid-rows-1 grid-flow-col">
                <div class="flex justify-start items-center">
                    <div>
                        <span class="inline-grid grid-cols-2 gap-x-1">
                            <div class="   font-bold"> <img src="../assets/images/istation.jpg"
                                    class="mask mask-circle" /></div>
                            <div class=" text-white text-lg font-medium ">
                                <div class=" text-white text-2xl font-bold"> iStation</div>
                                利用人流攝影機與AIOT技術，打造智慧安防解決方案。精準識別和監控人流，提升安全效能，實現智慧空間。
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="grid col-start-4  pt-10 col-span-2 grid-rows-1 grid-flow-col">
                <div class="flex justify-start items-center">
                    <div>
                        <span class="inline-grid grid-cols-2 gap-x-1">
                            <div class=" "> <img src="../assets/images/auomesh.jpg" class="mask mask-circle" /></div>
                            <div class=" text-white text-lg font-medium ">
                                <div class=" text-white text-2xl font-bold"> XpacePlus</div>
                                我們致力於提供全面的智慧空間管理解決方案，透過先進的AI
                                技術和數據分析，為您量身打造高效節能且環保的辦公空間
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ref="div4" class="h-[100vh] top-20 bg-cover ">
        <div class="grid grid-cols-4  ">
            <div class="grid col-start-2 col-span-2  grid-flow-col">
                <div class="flex justify-start items-center">
                    <div class="mt-6">
                        <div class="mt-16 text-auoBlue text-4xl font-bold text-center"> 讓辦公空間更聰明、更安全</div>
                        <div class="mt-4 text-gray-1 text-lg font-medium "> 我們致力於提供全面的智慧空間管理解決方案，透過先進的AI
                            技術和數據分析，為您量身打造高效節能且環保的辦公空間</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3  ">
            <div class="grid ">
                <div class="flex justify-start items-center">
                    <div class="mt-6">
                        <div> <img src="../assets/images/Auomesh.png" class="mask mask-square px-20" /></div>

                        <div class="mt-16 text-auoBlue text-1xl font-bold text-center"> 大數據智慧節能：優化工作空間能源管理</div>
                        <div class="mt-4 text-gray-1 text-lg font-medium p-4"> 借助 <a class="text-auoBlue"
                                href="https://www.google.com/">AUO Mesh</a>
                            大數據智慧節能解決方案不僅能即時監控，還有效警示是否存在資源浪費，並提供相應的優化建議，實現節能降耗的目標。</div>
                    </div>
                </div>
            </div>
            <div class="grid ">
                <div class="flex justify-start items-center">
                    <div class="mt-6 ">
                        <img src="../assets/images/智慧樓宇.png" class="mask mask-square " />
                        <div class="mt-12 text-auoBlue text-1xl font-bold text-center"> AI 智慧辦公室樓層管理：革新您的辦公環境</div>
                        <div class="mt-4 text-gray-1 text-lg font-medium p-4">
                            系統更允許您查看各樓層按用電類型的每日用電分佈，並追蹤用電變化趨勢，便於您進行相應的篩選與分析。深入了解<a class="text-auoBlue"
                                href="https://www.google.com/">智慧樓宇</a> </div>
                    </div>
                </div>
            </div>
            <div class="grid ">
                <div class="flex justify-start items-center">
                    <div class="mt-6">
                        <img src="../assets/images/Xpaceplus.png" class="px-20" />
                        <div class="mt-16 text-auoBlue text-1xl font-bold text-center"> 智慧空間管理：最佳化您的工作環境，提升效率</div>
                        <div class="mt-4 text-gray-1 text-lg font-medium p-4"> <a class="text-auoBlue"
                                href="https://www.google.com/">XpacePlus</a>
                            提供詳盡的樓層空間配置圖，追蹤使用時間和次數變化趨勢。您可以查看會議室的使用數據，掌握每個空間的實際運用情況。</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <font-awesome-icon :icon="['fab', 'facebook']" />
    <div ref="div5" class="h-[30vh] top-10 bg-cover bg-energeticYellow">
        <div class="grid grid-cols-6 h-full">
            <div class="grid col-start-2 col-span-4  grid-flow-col">
                <div class="flex justify-start items-center">
                    <div class="">
                        <div class=" text-auoBlue text-4xl font-bold"> 訂閱我們的最新消息，即刻掌握專屬資訊！</div>
                    </div>
                </div>
            </div>
            <div class="grid col-start-6 col-span-2  grid-flow-col">
                <div class="flex justify-start items-center">
                    <div class="">
                        <button
                            class="  bg-auoBlue text-white  hover:bg-gray-6 hover:text-auoBlue font-bold rounded-full px-4 py-3.5 min-w-28">
                            訂閱我們 </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-7  bg-base-300">
        <div class="grid col-start-2 col-span-2  grid-flow-col">
            <div class="flex justify-start items-center">
                <div class="mt-6">
                    <div class=" text-auoBlue text-4xl font-bold "> Smart Space Solution</div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2 items-center justify-end bg-base-300 text-auoBlue p-4">

        <ul class="hidden md:flex md:justify-around md:grow">

            <li>
                <h5 class="text-slate-400 mb-3">SOLUTIONS</h5>
                <ul class="space-y-3">
                    <li><a href="#" class="link">智慧樓宇</a></li>
                    <li><a href="#" class="link">AUO Mesh</a></li>
                    <li><a href="#" class="link">XpacePlus</a></li>
                    <li><a href="#" class="link">iStation</a></li>
                </ul>
            </li>
            <li>
                <h5 class="text-slate-400 mb-3">SUPPORT</h5>
                <ul class="space-y-3">
                    <li><a href="#" class="link">媒體中心</a></li>
                    <li><a href="#" class="link">服務支援</a></li>
                    <li><a href="#" class="link">企業永續</a></li>
                    <li><a href="#" class="link">聯絡我們</a></li>
                </ul>
            </li>
        </ul>
    </div> -->

     <!-- 新的kv_slider -->
 
    <div class="content ">
            <!-- kv_slider -->             
            <div class="kv ">
                <div class="kv_slider carousel">
                    <div class="item">
                        <div class="kv_content">
                            <h3>智慧空間 <br>啟動無限可能</h3>
                            <p>Smart Space Solution 提供您全方位的空間管理服務，打造永續節能、健康安全、資訊整合的智慧建築空間。</p>
                            <button type="button" class="btn btn-auo btn-primary">探索更多</button>
                        </div>
                        <div class="img-container">
                            <img src="../assets/images/sss_kv_01.jpg" alt="" class="" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="kv_content">
                            <h3>智慧空間 <br>啟動無限可能</h3>
                            <p>Smart Space Solution 提供您全方位的空間管理服務，打造永續節能、健康安全、資訊整合的智慧建築空間。</p>
                            <button type="button" class="btn btn-auo btn-primary">探索更多</button>
                        </div>
                        <div class="img-container">
                            <img src="../assets/images/sss_kv_02.jpg" alt="" class="" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- features -->
            <section class="sec feature">
                <div class="container">
                    <div class="item">
                        <div class="pic" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500"
                            data-aos-easing="ease-out-cubic">
                            <img src="../assets/images/sss_feature_01.jpg" alt="" class="" />
                        </div>
                        <div class="info" data-aos="fade-left" data-aos-duration="750" data-aos-delay="750"
                            data-aos-easing="ease-out-cubic">
                            <h3>智慧會議</h3>
                            <p>我們的智慧會議管理解決方案不僅簡化了會議室和辦公空間的預訂與管理，更進一步提供了先進的用電管理功能。透過 XpacePlus
                                平台、互動式樓層指南，以及房間和辦公桌標誌，讓您輕鬆掌握空間利用率，同時有效降低能源成本和環境影響。</p>
                            <button type="button" class="btn btn-auo btn-primary">探索更多</button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pic" data-aos="fade-left" data-aos-duration="750" data-aos-delay="750"
                            data-aos-easing="ease-out-cubic">
                            <img src="../assets/images/sss_feature_02.jpg" alt="" class="" />
                        </div>
                        <div class="info" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500"
                            data-aos-easing="ease-out-cubic">
                            <h3>智慧能源</h3>
                            <p>運用 AIoT 串接建物中與能源效率相關之照明、空調、消防、能源管理等系統設備，即時蒐集周圍環境數據，分析碳排放量及監控異常，達到主動式節能，為淨零建築奠下基礎。</p>
                            <button type="button" class="btn btn-auo btn-primary">探索更多</button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pic" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500"
                            data-aos-easing="ease-out-cubic">
                            <img src="../assets/images/sss_feature_03.jpg" alt="" class="" />
                        </div>
                        <div class="info" data-aos="fade-left" data-aos-duration="750" data-aos-delay="750"
                            data-aos-easing="ease-out-cubic">
                            <h3>智慧安控</h3>
                            <p>透過智慧安控有效管理訪客、門禁、保全等資訊，快速警報異常事件，確保安全防護，提供安心的空間環境。</p>
                            <button type="button" class="btn btn-auo btn-primary">探索更多</button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pic" data-aos="fade-left" data-aos-duration="750" data-aos-delay="750"
                            data-aos-easing="ease-out-cubic">
                            <img src="../assets/images/sss_feature_04.jpg" alt="" class="" />
                        </div>
                        <div class="info" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500"
                            data-aos-easing="ease-out-cubic">
                            <h3>智慧空間</h3>
                            <p>我們提供依據空間用途量身訂做的智慧化整合服務，如智慧運動解決方案、數位藝廊...等，並結合多項智慧化功能串接，讓建築空間更舒適便利。</p>
                            <button type="button" class="btn btn-auo btn-primary">探索更多</button>
                        </div>
                    </div>
                    <div class="element_auo_01">
                        <img src="../assets/images/element_auo_01.png" alt="" class="" />
                    </div>
                    <div class="element_auo_02">
                        <img src="../assets/images/element_auo_02.png" alt="" class="" />
                    </div>
                </div>
            </section>
            <!-- experience -->
            <section class="section experience">
                <div class="container">
                    <h2 class="title">全新打造您的空間體驗</h2>
                    <p>我們提供依據不同空間需求量身打造的解決方案組合，讓空間管理更輕鬆簡易</p>
                    <div class="experience_content">
                        <div class="item" experience_content data-aos="fade-left" data-aos-duration="750"
                            data-aos-delay="400" data-aos-easing="ease-out-cubic">
                            <div class="img-container">
                                <img src="../assets/images/sss_p_1.jpg" alt="" class="" />
                            </div>
                            <h3>會議室/視聽室</h3>
                        </div>
                        <div class="item" experience_content data-aos="fade-left" data-aos-duration="750"
                            data-aos-delay="600" data-aos-easing="ease-out-cubic">
                            <div class="img-container">
                                <img src="../assets/images/sss_p_2.jpg" alt="" class="" />
                            </div>
                            <h3>辦公室/商務空間</h3>
                        </div>
                        <div class="item" experience_content data-aos="fade-left" data-aos-duration="750"
                            data-aos-delay="800" data-aos-easing="ease-out-cubic">
                            <div class="img-container">
                                <img src="../assets/images/sss_p_3.jpg" alt="" class="" />
                            </div>
                            <h3>智慧樓宇</h3>
                        </div>
                        <div class="item" experience_content data-aos="fade-left" data-aos-duration="750"
                            data-aos-delay="1000" data-aos-easing="ease-out-cubic">
                            <div class="img-container">
                                <img src="../assets/images/sss_p_4.jpg" alt="" class="" />
                            </div>
                            <h3>智慧工廠</h3>
                        </div>
                        <div class="item" experience_content data-aos="fade-left" data-aos-duration="750"
                            data-aos-delay="1200" data-aos-easing="ease-out-cubic">
                            <div class="img-container">
                                <img src="../assets/images/sss_p_5.jpg" alt="" class="" />
                            </div>
                            <h3>智能社區/住宅</h3>
                        </div>
                    </div>
                    <div class="element_auo_03">
                        <img src="../assets/images/element_auo_03.png" alt="" class="" />
                    </div>
                </div>
            </section>
            <!-- partner -->
            <section class="section partner">
                <div class="container">
                    <h2 class="title">友達集團與合作夥伴</h2>
                    <p>Smart Space Solution 產品由友達集團攜手生態圈夥伴，以豐富的跨領域集團資源與整合技術優勢，提供您最佳的合作選擇</p>
                    <div class="marquee" experience_content data-aos="fade-left" data-aos-duration="750"
                        data-aos-delay="400" data-aos-easing="ease-out-cubic">
                        <div class="view">
                            <div class="pic-container" style="width: 70%;">
                                <div class="pic">
                                    <img src="../assets/images/company.png"  alt="" class="" />
                                </div>
                                <div class="pic">
                                    <img src="../assets/images/company.png"   alt="" class="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- case -->
            <section class="section case">
                <div class="container">
                    <div class="photo_wall">
                        <div class="pic">
                            <img src="../assets/images/sss_case_1.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_2.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_3.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_4.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_5.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_6.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_7.jpg" alt="" class="" />
                        </div>
                        <div class="pic">
                            <img src="../assets/images/sss_case_8.jpg" alt="" class="" />
                        </div>
                        <div class="feature_cases">
                            <h3>精選案例</h3>
                            <p>友達光電宣布 2050 年達到 RE100 的願景，並應用 AIoT 落實減碳管理。其中位於新竹的研發總部大樓 GRC，2023
                                年改裝完成，導入全新智慧建築與辦公解決方案，從樓頂太陽能綠電規劃，全場域用電量，冰水節能及空調節能，停車場及廚房有害氣體偵測阻斷，全棟 13
                                樓層的溫溼度與外氣連動，辦公室內照明節電規劃、BEMS、會議室管理系統，並於每一樓層透過公播資訊平台，布達給員工 RE-100 與各樓層能耗的狀況揭露。</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- contact -->
            <section class="section contact">
                <div class="container">
                    <h3>開始打造您的智慧空間解決方案</h3>
                    <button type="button" class="btn btn-auo btn-primary">與我們聯繫</button>
                </div>
            </section>
        </div>
</template>
