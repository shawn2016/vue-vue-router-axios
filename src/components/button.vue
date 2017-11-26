<template>
       <button 
       type="button" 
       class="el-button  el-button--default" 
       :class="className"
       @click="btnClick(tag)"
       :tag="tag"
       >
        <span>{{content}}</span>
       </button>
</template>
<script>
export default {
  name: "rsButton",
  props: ["content", "className", "tag"],
  methods: {
    btnClick(tag) {
      this.$emit("btnCallback", tag);
    }
  }
};
</script>
<style scoped>
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #d8dce5;
  border-color: #d8dce5;
  color: #5a5e66;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.el-button + .el-button {
  margin-left: 10px;
}
.el-button:focus,
.el-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
</style>

