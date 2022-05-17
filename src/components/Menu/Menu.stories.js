import React from 'react'
import Component from './Menu'
import { Provider } from 'react-redux'
import { store } from '../../Redux/store'
import { Router } from 'react-router-dom'
import { history } from '../../helpers/history'

export default {
  title: 'Design System/Organisms/Menu',
  component: Component,
  decorators: [
    (story) => <Provider store={store}>{story()}</Provider>,
    (story) => <Router history={history}>{story()}</Router>,
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const LeftMenu = () => <Component />