import Comp from './flexbox-item.vue'

import { mount } from 'vue-test-utils'
import { expect } from 'chai'

describe('Blur', () => {
  it('basic', () => {
    const wrapper = mount(Comp)
    expect(wrapper.name()).to.equal('flexbox-item')
  })
})
