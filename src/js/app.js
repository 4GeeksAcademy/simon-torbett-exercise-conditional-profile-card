import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
  ${cover}
<img src="${variables.avatarURL}" class="photo" />
<h1>${variables.name} ${variables.lastname}</h1>
<h2>${variables.role}</h2>
<h3>${variables.city} ${variables.country}</h3>
<ul class="${variables.socialMediaPosition}">
  <li><a href="https://twitter.com/simontorbett"><i class="fab fa-twitter"></i></a></li>
  <li><a href="https://github.com/Storbett21"><i class="fab fa-github"></i></a></li>
  <li><a href="https://www.linkedin.com/in/simon-torbett-4b12b2168/"><i class="fab fa-linkedin"></i></a></li>
  <li><a href="https://www.instagram.com/simon_torbett/"><i class="fab fa-instagram"></i></a></li>
</ul>
</div>
`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://lh3.googleusercontent.com/pw/AIL4fc-ba8r0oCYBur1jMMXTHeIpf4dTNhlXPVnsGPvCnlHYFqW6CUoj0OyOWG0FXeT7FLzmc62h9iwjk3bZDiyVdYohd_vmGVAymy78TAqlWBIn40jQZ7LFe5hvhD-d8_cYvNDJzb_aXk36LenVHhbwtc6Q1jhVHBjhYPLLU_mofFvZhfzSUyqPL4iIzWI1HD3lCZGDp5cq7HuAdkwMK0XmQ-iNyk4WwjHFr2Wf8vqQcr_LjaI7IzUIMC3hhOTo12Ta2Y-ECR0EZAOPpo1WbxA70hmOV4d9ulZE_bpYJjzjnXhrwYdBv2xqmBOqeBCHWr7QGedNLdHlK88msjxDf969JjNfMkzNLXrwMgSpKWZMgWMbZiW1Ix6XoZJEKXp3vMn_PWBt1UOTY4Huru2mHSLgAHRzVAHiHovZisP8gjaYfrEa7lE61UFlECJXr6zP4BxUAuwIyHBou97wSiSsaWjBXt85HXw_KcGLFgklxQciJUkVcNirhPXaqPmN835PYf0NSCFgJ_sYHio0b4b1Ia1iCNgS-B7o5IQnTz7sCHQdnBlRd8V-ezaUy6MLyiwMxoQ55Io6mWMokOxp7yt8EbkLzq-SpYsKFaPDtEvKHRoPTBEz8nSn3DJ6eT9-mwClETs5J7JLTxFltvUwWwtkmtSy3ND4sn-bfuFINMgR3iaSNzO6C4OjZdfflSd9zZ9RAradNaMiznh6sFPzc8Le236HOc8oHpDcO9ybXBn82Un-SAl3IntGqf8y1hT5bE-UJbei2s0tPB4A1CFFuVkl6f3YS4Im9pA0jEAKOdSAkn7MG7jqiQkQKAkbm_I4H8H87Fm8E4hssDq0va5zoP4WHVYEuItfgp2OE8NMgNzsH5hoMUAj5E21EmdGfmCm77NQe3DqM9oHHmF9_HtCNh-auRi22Q=w1115-h836-s-no?authuser=0",
    // this is the url for the profile avatar
    avatarURL:
      "https://lh3.googleusercontent.com/pw/AIL4fc8dV0tcavWk5RaU-05CWI5wKzFqrewNYkRk71MAgQ4m25K92v_EgEalMMrx3Guze3zsTAeMGu73mBN5XN1fryUYxhgnU1JIF_bJNZ9JVIFkORNBLULWoioCHzIrD1gfloyHbduTz9dFCxWahEBpiFEO-9qOKpnlTKYoeREblM9tsN_q1r6O5yX6LExVcZ-fpzzw-i_HsxkGtz0pMpDp0ozdo8kF2aeylWrPhlHDOR9M-wAh0GUqJonJF3EbOEO5OwWp-8wek4GWep9UFyKF2GrP6UeylyFzp0G9GWPb_LurA5GMSRQphxIUSyPLMl0wxtJ3VIs0-B-nfoh-y2IybOrCpOzgRRXsBs5wCyxUBAvlEmC9xK2NKxm1WsKlDjB3G5dPMjDUaZStrfD-R_MlzJZcXx43pf12WLBgJr6mGzE_yyLyuKj3MfaCp_YAdTI65rsU7NZNQ1-LufejWt5oCbqtx7p0vNOq6LmuYirwrhzM-M9R8EOgYrtlJlAWgUpfdeGKwByKuZjPDpFDDfPKRFYDf56G6G_ffKqlAHXU-u2Vp-1GTrTCqYLjslQdQb8RU3khQYQbrt5oPvStkZz-C67cUSVowPKRv7-2QrxzQeYKGpOmwGZ2VorGsEiiLDLSdBeFU9xd32815zn8I9ePUHL85X8OmciCg49d1G8U4GdpvMv2sEJKsesJcKkw5iVU_Ky8knVCnRRFTAiC0H08euxWoqbl4pJktlnzIQLRxg2FUDi70rmwjEicZRg-e7M5QnePD2bVHZ3286t-x0jvEovKQoA7kb4uiQlnfhpOLc1RMA1aP_mkyJVTCf13qn9T_6vVf9u3txWhrBLwe0s_ZVufG9Xd8svKUqL0DVN6SlY3VuPc4_BY_EvpbPCL_rUpIKJ8ejTeL02q2l1QMB6GUQ=w1115-h836-s-no?authuser=0",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
