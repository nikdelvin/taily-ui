import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { buttonsGroup, buttonsGroupItem } from './components/buttonGroup'

const tailyUI = plugin(
  function ({addComponents}) {
    addComponents({
      '.button': {
        [button]: {}
      },
      '.buttons-group': {
        [buttonsGroup]: {}
      },
      '.buttons-group-item': {
        [buttonsGroupItem]: {}
      }
    })
  }
)

export { tailyUI }