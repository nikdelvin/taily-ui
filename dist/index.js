import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { buttonGroup, buttonGroupItem } from './components/buttonGroup'

const tailyUI = plugin(
  function ({addComponents}) {
    addComponents({
      '.button': {
        [button]: {}
      },
      '.button-group': {
        [buttonGroup]: {}
      },
      '.button-group-item': {
        [buttonGroupItem]: {}
      }
    })
  }
)

export { tailyUI }