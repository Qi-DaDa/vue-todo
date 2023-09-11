// export default {
//   install(app, option) {
//     // app为vue实例 可以使用 component、use、mouunt 等方法
//     app.component("BtnPlugin", {
//       name: "aa",
//       template: "<button>1234567</button>",
//     });
//   },
// };

import CustomButton from "@/components/CustomButton/index.vue";
export default {
  install(app, option) {
    console.log("==>", app, option);
    // app为vue实例 可以使用 component、use、mouunt 等方法
    app.component("BtnPlugin", CustomButton);
  },
};
