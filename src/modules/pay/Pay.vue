<template>
  <div>
    <div @click="fetchData()">
      请求
    </div>
    <div @click="openDialog()">
      打开对话框
    </div>
    <rs-dialog
    :title="dialogTitle"
    v-bind:modal="dialogModal"
    :content="dialogContent"
    v-bind:visiable="dialogVisiable"
    v-on:btnCallback="btnCallback"
    :cancle="dialogCancle"
    :confirm="dialogConfirm"    
    />
  </div>
</template>

<script>
import fetch from "@/utils/fetch";
import rsDialog from "@/components/dialog";
export default {
  name: "Pay",
  components: {
    rsDialog
  },
  data() {
    return {
      // 弹窗
      dialogModal: false,
      dialogContent: "",
      dialogTitle: "",
      dialogVisiable: false,
      dialogCancle: "",
      dialogConfirm: "",
      msg: "支付",
      username: "122",
      password: "rttyy"
    };
  },
  mounted: () => {},
  methods: {
    // 请求
    fetchData: async function () {
      const res = await fetch({
        url: "/almond/user/login.do",
        method: "post",
        data: {
          username: "122",
          password: "rttyy"
        }
      });
      console.log(this.$router);
      if (res) {
        this.$router.push("PayResult");
        console.log(res);
      }
    },
    closeDialog() {
      this.dialogModal = false;
      this.dialogVisiable = false;
    },
    openDialog() {
      this.dialogModal = true;
      this.dialogContent = "bb";
      this.dialogTitle = "ss";
      this.dialogVisiable = true;
      this.dialogCancle = "取 消";
      this.dialogConfirm = "确 定";
    },
    // 对话框
    btnCallback(data) {
      console.log(data);
      if (data === "cancle") {
        console.log("点击取消");
        this.closeDialog();
      }
      if (data === "confirm") {
        console.log("点击确定");
        this.closeDialog();
      }
    }
  }
};
</script>

<style scoped>

</style>
