import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
const tailyUI = plugin(
  function ({addComponents}) {
    addComponents({
        '.button': {
            [button]: {}
        }
    })
  }
)
export { tailyUI }