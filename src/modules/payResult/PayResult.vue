<template>
  <div @click="fetchData()">
    {{msg}}
  </div>
</template>

<script>
import fetch from "@/utils/fetch";
export default {
  name: "PayResult",
  data() {
    return {
      msg: "支付结果",
      username: "122",
      password: "rttyy"
    };
  },
  mounted: () => {},
  methods: {
    fetchData: async () => {
      const res = await fetch({
        url: "/almond/user/login.do",
        method: "post",
        data: {
          username: "122",
          password: "rttyy"
        }
      });
      if (res) {
        this.$route.push("PayResult");
        console.log(res);
      }
    }
  }
};
</script>

<style scoped>

</style>
