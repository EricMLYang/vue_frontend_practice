<script setup>  
import { ref, provide,inject, onBeforeMount } from "vue";  
import { useStore } from 'vuex';  
import { useRouter } from 'vue-router';  
  
const router = useRouter();  
const user = ref({ account: "", password: "", accountIdentity: "" ,isLogin:false});  

const userlist = ref([  
  { account: "admin", password: "123", accountIdentity: "admin" ,isLogin:true},  
  { account: "user1", password: "123", accountIdentity: "user1" ,isLogin:true},  
  { account: "user2", password: "123", accountIdentity: "user2" ,isLogin:true}  
]);  
  
const store = useStore();  

  
onBeforeMount(() => {  
  console.log(store.getters["User/getUserData"]);    
});  
  
const gUserT = () => {  
 
  console.log(store.getters["User/getUserData"]); 
  console.log(store.getters["User/getUserData"].isLogin); 
  
 
  return null;  
};  
  
const checkUser = () => {   
  for (let i = 0; i < userlist.value.length; i++) {  
    if (userlist.value[i].account === user.value.account && userlist.value[i].password === user.value.password) {  
      user.value.accountIdentity = userlist.value[i].accountIdentity;  
      user.value.isLogin = userlist.value[i].isLogin;        
      console.log("Logged in as: " + user.value.accountIdentity);  
      store.commit('User/setUser', user.value);         
      localStorage.setItem("permissions", JSON.stringify(user.value));     
      router.push('/');      
      return;  
    }     
  }  
  console.log("Invalid username or password");  
};  
  
</script>  

<template>       
         <!-- content -->
         <div class="content">
            <div class="login_content">
                <div class="container">
                    <div class="login">
                        <div class="login_head">
                            <h2>登入帳戶</h2>
                            <p>您是新用戶嗎? <a href="#">建立帳戶</a></p>
                        </div>
                        <form action="">
                            <div class="form_grp">
                                <label for="username">帳號</label>
                                <input  v-model="user.account" name="username" type="text" placeholder="請輸入文字">
                            </div>
                            <div class="form_grp">
                                <label for="password">密碼</label>
                                <input v-model="user.password" name="password" type="password" placeholder="請輸入密碼">
                            </div>
                            <div class="checkbox" style="width: auto">
                                <label><input type="checkbox">記住我</label>
                            </div>
                        </form>
                        <div class="btn_grp">
                            <button type="button" class="btn btn-auo" v-on:click="checkUser">登入</button>
                        </div>
                        <div class="divider">
                            <span>或使用下列帳號登入</span>
                        </div>
                        <div class="login_social">
                            <ul>
                                <li><a href="#"><img src="../assets/images/btn_login_google.svg" alt=""></a></li>
                                <li><a href="#"><img src="../assets/images/btn_login_facebook.svg" alt=""></a></li>
                                <li><a href="#"><img src="../assets/images/btn_login_linkedin.svg" alt=""></a></li>
                                <li><a href="#"><img src="../assets/images/btn_login_photo.svg" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <!-- <div
    class="grid grid-cols-2 gap-4 h-full p-4 pt-20"
    style="
      background-image: url('Login_blur.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top left;
    "
  >
    <div class="grid grid-cols-5 grid-rows-3 gap-4">
      <div
        class="col-start-2 col-span-3 row-start-2 row-span-1 text-[#FFFFFF] text-left my-2 flex flex-col justify-center"
      >
        <h1 class="font-bold text-5xl">Smart Space Solution</h1>
        <p class="font-semibold text-xl my-4">SSS Portal</p>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-4 h-full p-4">
      <div class="..."></div>
      <div class="col-span-3 mt-20">
        <div class="card bg-base-100 w-full border border-gray-300">
          <div class="card-body text-left">
            <h1 class="text-primary text-left font-bold text-3xl my-2">
              登入帳戶
            </h1>
            <p class="text-base text-[#414141]">
              您是新用戶嗎?
              <button
                class="text-[#64DCF0] ml-2 focus:outline-none hover:underline"
              >
                建立帳戶
              </button>
            </p>
            <p class="text-[#969696] text-sm mt-4">Username or email</p>           
            <input v-model="user.account"
              class="w-full border-b-2 border-primary bg-transparent focus:outline-none placeholder-[#646464] text-lg"
              type="text"
              placeholder="Input user name"
            />
            <p class="text-[#969696] text-sm mt-4">Password</p>
           
            <input  v-model="user.password" type="password"  class="w-full border-b-2 border-primary bg-transparent focus:outline-none placeholder-[#646464] text-lg" />
            <div
              class="flex items-center justify-between my-4 text-base text-[#646464]"
            >
              <div class="flex items-center">
                <input type="checkbox" checked="checked" class="checkbox" />
                <p class="ml-2">記住我</p>
              </div>
              <button  v-on:click="gUserT" class="text-[#64DCF0] focus:outline-none hover:underline" >
                忘記密碼
              </button>
            </div>

            <div class="card-actions">
              <button v-on:click="checkUser"
                class="mx-4 my-2 py-4 w-full text-base rounded-full text-white bg-primary focus:outline-none hover:bg-blue-400"
              >
                登入
              </button>
            </div>

            <div
              class="flex items-center text-[#969696] text-center text-sm my-4"
            >
              <hr class="flex-grow border-t border-[#969696] mx-2" />
              <div class="px-2 mx-2">
                <p>or sign in with</p>
              </div>
              <hr class="flex-grow border-t border-[#969696] mx-2" />
            </div>

            <div class="flex justify-between mx-8">
              <svg
                id="google"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#969696"
                />
                <g
                  id="Icon_ICON_custom_google_SIZE_MEDIUM_STATE_DEFAULT_STYLE_STYLE2_"
                  data-name="Icon [ICON=custom/google][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"
                  transform="translate(14 14)"
                >
                  <rect
                    id="Area_ICON:custom_google_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                    data-name="Area [ICON:custom/google][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                    width="20"
                    height="20"
                    fill="#fff"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(-1 -1)">
                    <path
                      id="_9f055ff3-996e-4662-8f15-38cdf4458ced"
                      data-name="9f055ff3-996e-4662-8f15-38cdf4458ced"
                      d="M23.139,11.375h-.806v-.042h-9v4h5.652a6,6,0,1,1-1.671-6.481l2.828-2.828a9.963,9.963,0,1,0,3,5.351Z"
                      transform="translate(-2.343 -2.334)"
                      fill="#fff"
                    />
                    <path
                      id="d2935d1b-29c5-40b7-b547-e57cccdf0ded"
                      d="M5.255,8.7l3.3,2.417a6.009,6.009,0,0,1,9.576-2.243l2.839-2.837A10.017,10.017,0,0,0,5.255,8.7Z"
                      transform="translate(-3.108 -2.334)"
                      fill="#fff"
                    />
                    <path
                      id="d536ae85-abc0-410c-b6c8-824e318b4657"
                      d="M14.1,31.379a9.988,9.988,0,0,0,6.729-2.606l-3.107-2.627a6.006,6.006,0,0,1-9.283-2.768L5.167,25.9A10.026,10.026,0,0,0,14.1,31.379Z"
                      transform="translate(-3.07 -10.38)"
                      fill="#fff"
                    />
                    <path
                      id="aca9bad5-fe13-4223-b6c4-c98827fefbe8"
                      d="M29.84,16.708h-.808v-.041H20v4.014h5.672a6.046,6.046,0,0,1-2.051,2.8h0L26.727,26.1a9.711,9.711,0,0,0,3.307-7.43A10.066,10.066,0,0,0,29.84,16.708Z"
                      transform="translate(-9.044 -7.71)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <svg
                id="facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#969696"
                />
                <g
                  id="Icon_ICON_feather_facebook_SIZE_MEDIUM_STATE_DEFAULT_STYLE_STYLE2_"
                  data-name="Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"
                  transform="translate(14 14)"
                >
                  <rect
                    id="Area_ICON:feather_facebook_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                    data-name="Area [ICON:feather/facebook][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                    width="20"
                    height="20"
                    fill="#fff"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(-1 -1)">
                    <path
                      id="_53039f37-75bd-4dcc-b13e-7867c2d78447"
                      data-name="53039f37-75bd-4dcc-b13e-7867c2d78447"
                      d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z"
                      transform="translate(-1.5 -1)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <svg
                id="linkedin"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#969696"
                />
                <g
                  id="Icon_ICON_feather_linkedin_SIZE_MEDIUM_STATE_DEFAULT_STYLE_STYLE2_"
                  data-name="Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"
                  transform="translate(14 14)"
                >
                  <rect
                    id="Area_ICON:feather_linkedin_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                    data-name="Area [ICON:feather/linkedin][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                    width="20"
                    height="20"
                    fill="#fff"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(-1 -1)">
                    <path
                      id="bc623334-597b-4b6e-86a1-a38208e0413b"
                      d="M16,8a6,6,0,0,1,6,6v7H18V14a2,2,0,0,0-4,0v7H10V14A6,6,0,0,1,16,8Z"
                      transform="translate(-1 -0.5)"
                      fill="#fff"
                    />
                    <rect
                      id="da636241-4326-436a-b6ad-036e7e6cae54"
                      width="4"
                      height="12"
                      transform="translate(1 8.5)"
                      fill="#fff"
                    />
                    <circle
                      id="bdc81090-cb9a-4eb2-9843-e26636422ceb"
                      cx="2"
                      cy="2"
                      r="2"
                      transform="translate(1 1.5)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <svg
                id="chrome"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#969696"
                />
                <g
                  id="Icon_ICON_feather_twitter_SIZE_MEDIUM_STATE_DEFAULT_STYLE_STYLE2_"
                  data-name="Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"
                  transform="translate(14 14)"
                >
                  <rect
                    id="Area_ICON:feather_twitter_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                    data-name="Area [ICON:feather/twitter][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                    width="20"
                    height="20"
                    fill="#969696"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(-1 -1)">
                    <circle
                      id="d244de54-66bc-405a-9c31-b9db85d78fe7"
                      cx="10"
                      cy="10"
                      r="10"
                      transform="translate(1 1)"
                      fill="#969696"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <circle
                      id="e0f9046c-8c13-4ea4-b8f4-15fda255fdef"
                      cx="4"
                      cy="4"
                      r="4"
                      transform="translate(7 7)"
                      fill="#969696"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="_0f6bc8f3-515e-4b4a-b6d3-4041c23cc948"
                      data-name="0f6bc8f3-515e-4b4a-b6d3-4041c23cc948"
                      x1="9.17"
                      transform="translate(11 7)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="_6b168982-18f8-47de-a5da-5de1d777cca6"
                      data-name="6b168982-18f8-47de-a5da-5de1d777cca6"
                      x2="4.59"
                      y2="7.94"
                      transform="translate(2.95 5.06)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="_079a229d-6359-4fba-942e-f6f7973171f1"
                      data-name="079a229d-6359-4fba-942e-f6f7973171f1"
                      y1="7.94"
                      x2="4.58"
                      transform="translate(9.88 13)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="..."></div>
    </div>
  </div> -->
</template>
