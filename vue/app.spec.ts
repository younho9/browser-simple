import App from './App.vue'
import { mount } from '@vue/test-utils'
import {describe, expect, it} from 'vitest'

import type { VueWrapper } from '@vue/test-utils'

const addTodo = async (wrapper: VueWrapper, text: string) => {
  const input = wrapper.find('input')
  const button = wrapper.find('button')

  await input.setValue(text)
  await button.trigger('click')
}

describe('rendering App', () => {
  it('cann add a todo', async () => {
    const wrapper = mount(App)
    await addTodo(wrapper, 'new todo')

    const todo = wrapper.find('section')

    expect(todo.find('h1').text()).toBe('new todo')
    expect(todo.find('input').element.checked).toBe(false)
    expect(wrapper.text()).toContain('Not all completed')
  })

  it('can toggle a todo', async () => {
    const wrapper = mount(App)
    await addTodo(wrapper, 'new todo')

    const todo = wrapper.find('section')
    await todo.find('input').trigger('click')

    expect(todo.find('input').element.checked).toBe(true)
    expect(wrapper.text()).toContain('All completed')
  })
})