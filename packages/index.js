// 整包导入
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItemItem from './form-item'

// 储存组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItemItem
]
// 定义一个install 方法 接收vue 作为参数 如果使用use注册插件， 级所有组件将被注册
const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

export default {
  install
}
