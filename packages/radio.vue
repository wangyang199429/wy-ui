<template>
  <label class="hm-radio">
    <span class="hm-radio__input">
      <span
        class="hm-radio__inner"
        :class="{'is-checked': label=== model}"
      ></span>
      <input
        type="radio"
        class="hm-radio__original"
        :value="label"
        :name="name"
        v-model="model"
        ref="radio"
      >
    </span>
    <span class="hm-radio__label"></span>
    <slot></slot>
    <template v-if="!$slots.default">{{label}}</template>
  </label>
</template>

<script>
export default {
  name: 'HmRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {

    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件给当前组件注册的input事件
        // this.$emit('input', value)
        // eslint-disable-next-line no-debugger
        // debugger
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  created () {
  }
}
</script>
<style lang="scss">
.hm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .is-checked {
      background-color: aqua;
    }
    .hm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>
