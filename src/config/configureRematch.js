import { init } from '@rematch/core'
import * as models from './models'

const store = init({
  redux: {
    devtoolOptions: {
      name: 'SNKRS'
    }
  },
  models: models,
})

export default store;
