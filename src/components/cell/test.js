import CellWrapper from './test/wrapper'
import Cell from './index.vue'

import { mount } from 'vue-test-utils'
import { expect } from 'chai'

describe('Cell.vue', () => {
  it('should render correct value', () => {
    const wrapper = mount(CellWrapper)
    wrapper.setProps({
      value: 'hello'
    })
    expect(wrapper.contains('div')).to.equal(true)
  })

  it('prop:align-items', () => {
    const wrapper = mount(Cell, {
      propsData: {
        alignItems: 'flex-start'
      }
    })
    expect(wrapper.hasStyle('-webkit-align-items', 'flex-start')).to.equal(true)
  })

  it('prop:title', () => {
    const wrapper = mount(Cell, {
      propsData: {
        title: 'hello'
      }
    })
    expect(wrapper.find('.vux-label').vnode.elm.innerText).to.equal('hello')
  })
})
