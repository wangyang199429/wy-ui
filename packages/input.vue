
<template>
  <div
    class="hm-input "
    :class="{'hm-input--suffix':showFuffix}"
  >
    <input
      :name="name"
      :type="showPassword?(PasswordVisible ? 'text': 'password') :type"
      :placeholder="placeholder"
      :class="{'is-disabled':disabled}"
      :disabled="disabled"
      class="hm-input__inner"
      :value="value"
      @input="handleInput"
    >
    <span
      class="hm-input__suffix"
      v-if="showFuffix"
    >
      <i
        class="hm-input__icon hm-icon-circle-close"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="hm-input__icon hm-icon-view"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'HmInput',
  data () {
    return {
      PasswordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    // eslint-disable-next-line vue/require-prop-type-constructor
    myvalue: {
      type: String,
      default: '0'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showFuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      console.log(e.target.value)
      this.$emit('update:myvalue', e.target.value)
      this.$emit('input', e.target.value)
    },
    handlePassword () {
      this.PasswordVisible = !this.PasswordVisible
    },
    clear (e) {
      this.$emit('input', '')
    }
  }
}
</script>
<style lang="scss">
.hm-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.hm-input--suffix {
  .hm-input__inner {
    padding-right: 30px;
  }
  .hm-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
