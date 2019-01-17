import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row',Row)
Vue.component('g-col', Col)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hello'
    },
  methods: {
    inputChange(e){
      console.log(e);
    }
  }
})
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

// try {
//     //单元测试
//     {
//         //动态生成button
//         const Constructor = Vue.extend(Button) //生成一个构造实例
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         }) //创建构造实例对象
//         vm.$mount('#test') //对象挂载到test下面
//         let useElement = vm.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect( href ).to.eq('#i-settings')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     {
//         const Constructor = Vue.extend(Button) //生成一个构造实例
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 loading: true
//             }
//         })
//         vm.$mount()
//         let useElement = vm.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#i-loading')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         })
//         vm.$mount(div)
//         let svg = vm.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('2')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm .$mount(div)
//         let svg = vm .$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('2')
//         vm .$el.remove()
//         vm .$destroy()
//     }
//     {
//         //Mock
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         })
//         vm.$mount()
//         let spy = chai.spy( function () {})
//         vm.$on('click', spy)
//         //希望这个函数被执行
//         let button = vm.$el
//         button.click()
//         expect(spy).to.have.been.called()
//     }
//
// } catch (error) {
//     window.errors = [error]
// } finally {
//     window.error && window.errors.forEach( (error)=>{
//         console.error(error.message)
//     } )
// }
//
//
