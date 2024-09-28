import axios from "axios";
const optionsConfig = {
  testDMZ: {
    loginUrl: "https://dmzapts.auo.com/DMZ_CAP_EX/Login/Index",
    apiUrl: "http://captest2.corpnet.auo.com/CAP_EX_API/api/AuthFuncs",
    cookieName: ".AUOCAPFORMSAUTHTEST_TOKEN",
  },
  prodDMZ: {
    loginUrl: "https://logon.auo.com/login/index",
    apiUrl: "http://auhqpl01.corpnet.auo.com/CAP_API/api/AuthFuncs",
    cookieName: ".AUOCAPFORMDMZTEST_TOKEN", //【上線時修改】 CAP cookieName 站台註冊時產生
  },
  test: {
    loginUrl: "https://logonts.corpnet.auo.com/Login/Index",
    apiUrl: "https://auhqsql2012ts2.corpnet.auo.com/CAP_API/api/AuthFuncs",
    // cookieName: ".AUOCAPFORMSAUTHDEV_TOKEN",
    cookieName: ".AUOCAPFORMSAUTHTEST_TOKEN",
  },
  prod: {
    loginUrl: "https://logon.corpnet.auo.com/login/index",
    apiUrl: "https://auhqpl01.corpnet.auo.com/CAP_API/api/AuthFuncs",
    cookieName: ".AUOFORMSAUTH927_TOKEN", //正式 CAP cookieName 站台註冊時產生
  },
};
const capMode = import.meta.env.VITE_APP_Cap_Mode;
const capUrlKey = import.meta.env.VITE_CAP_KEY;
const IsProduction = import.meta.env.PROD;
const config = optionsConfig[capMode]; //【上線時修改】設定來源 [test|prod|prodDMZ|testDMZ]
const _capCookieName = config.cookieName;
// 認證用的Axios
const CAPAuthorizateAxios = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
CAPAuthorizateAxios.defaults.headers.common = {};

// 获取CAP登入页面
const returnCAPUrl = function () {
  let returnUrl = window.location.href;

  if (hasUrlCapToken()) {
    const replaceCapUrl = capUrlKey + "=" + getCookie(_capCookieName);
    returnUrl = returnUrl.replace(replaceCapUrl, "");
    console.log("returnCAPUrl-hasUrlCapToken", returnUrl);
  }

  const appPath = IsProduction
    ? encodeURIComponent(window.location.origin + "/")
    : `${encodeURIComponent(window.location.origin + "/")}`;
  return `${config.loginUrl}?ReturnUrl=${encodeURIComponent(
    returnUrl
  )}&AppPath=${appPath}`;
};

const getRootPath = function () {
  var pathName = window.location.pathname.substring(1);
  var webName =
    pathName === "" ? "" : pathName.substring(0, pathName.indexOf("/"));
  return window.location.protocol + "//" + window.location.host + "/" + webName;
};

const hasUrlCapToken = function () {
  return location.href.indexOf(capUrlKey) > 0;
};

const urlCapAuthTokenToCookie = function () {
  if (hasUrlCapToken()) {
    const fakeUrl = new URL(
      location.origin +
        "?" +
        location.href.substring(location.href.indexOf(capUrlKey))
    );
    const capValue = fakeUrl.searchParams.get(capUrlKey);
    return capValue;
  } else {
    return "";
  }
};

const getCAPAuthToken = function (name) {
  let result = null;
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr !== null) {
    result = unescape(arr[2]);
  } else if (hasUrlCapToken()) {
    // 處理 Cap 設定 AuthToken_URL
    result = urlCapAuthTokenToCookie();
    setCookie(name, result, 3);
  }
  console.log("[CAP]get CapAuthToken", name, result);
  return result;
};

const checkCAPAuthToken = function (authToken) {
  return !(authToken === null || authToken === "" || authToken === undefined);
};

function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  let cookieArr =
    document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)")) || [];
  let result = "";
  if (cookieArr !== null) {
    result = cookieArr[2];
  }
  return result;
}

const delCookie = function (name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  console.log("cap cookie exptime", exp.toGMTString());
  let cval = getCookie(name);
  if (cval !== "") {
    document.cookie = name + "=; expires=" + exp.toGMTString() + ";path=/";
  }
};

const doCAPLogout = function () {
  console.log("doCAPLogout");
  let isNeedLogin = true; // (capMode !== "test");
  // if (capMode === "test" && !IsProduction) {
  //   isNeedLogin = confirm("確認將進行登出?"); // 讓你有時間下中斷點進行相關程式驗證
  // }
  if (isNeedLogin) {
    const capUrl = returnCAPUrl();
    delCookie(_capCookieName);
    window.location.href = capUrl;
  }
};

//透過CAP API驗證該Token還是有效
const apiCAPUserInfo = async function () {
  let result = "";
  const _capAuthToken = getCAPAuthToken(_capCookieName);
  if (checkCAPAuthToken(_capAuthToken)) {
    const response = await CAPAuthorizateAxios.get(
      `/GetUserInfoByToken?authToken=${_capAuthToken}`
    );

    return response.data;
  } else {
    doCAPLogout();
  }
  return result;
};

export { apiCAPUserInfo, doCAPLogout };
