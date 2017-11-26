<template>
<div>
  <transition
    name="fade"
    >
      <Background v-if="modal || visiable" >
    </Background>
     </transition>
   <transition
    name="fade"
    >
    <div class="el-dialog__wrapper" v-if="visiable">
        <div class="el-dialog el-dialog--center" style="width: 30%; margin-top: 15vh;">
            <div class="el-dialog__header">
                <span class="el-dialog__title">{{title}}</span>
                <button 
                @click="closeCallback()"
                 class="el-dialog__headerbtn">
                    X
                </button>
            </div>
            <div class="el-dialog__body">
                <span>{{content}}
          </span>
            </div>
            <div class="el-dialog__footer">
                <span class="dialog-footer">
            <rs-button
             v-if="cancle"            
            :content="cancle"
            v-on:btnCallback="btnCallback"
            tag="cancle"
            />
             <rs-button
             v-if="confirm"
            :content="confirm"
            className="el-button--primary"
            v-on:btnCallback="btnCallback"  
            tag="confirm"                      
            />
            </span>
            </div>
        </div>
    </div>
    </transition>    
</div>
</template>

<script>
import Background from "./background";
import rsButton from "./button";
export default {
  name: "Dialog",
  components: { Background, rsButton },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    visiable: {
      type: Boolean,
      required: false,
      default: true
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    },
    content: {
      type: String,
      required: false,
      default: ""
    },
    cancle: {
      type: String,
      required: false,
      default: ""
    },
    confirm: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    // 触发父级调用
    btnCallback(data) {
      this.$emit("btnCallback", data);
    },
    closeCallback() {
      this.$emit("btnCallback", "cancle");
    }
  }
};
</script>

<style scoped>
.demo-box.demo-dialog .dialog-footer button:first-child {
  margin-right: 10px;
}
.el-dialog--center {
  text-align: center;
}
.el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #2d2f33;
}
.el-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 50%;
}
.el-dialog__header {
  padding: 15px;
  padding-bottom: 10px;
}
.el-dialog__headerbtn {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #878d99;
}
.el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 25px 27px 30px;
  text-align: center;
}
.el-dialog__body {
  padding: 30px 20px;
  color: #5a5e66;
  line-height: 24px;
  font-size: 14px;
}
.el-dialog--center .el-dialog__footer {
  text-align: inherit;
  padding-bottom: 30px;
}
.el-dialog__footer {
  padding: 15px;
  padding-top: 10px;
  text-align: right;
  box-sizing: border-box;
}
.el-dialog__wrapper {
  position: fixed;
  z-index: 2003;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

