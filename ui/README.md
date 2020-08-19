# vuetify-starter-app

## Project setup
```
npm install
```
or
```
yarn
```

### Compiles and hot-reloads for development
```
npm run serve
```
or
```
yarn serve
```

### Compiles and minifies for production
```
npm run build
```
or
```
yarn build
```

### Run your unit tests
```
npm run test:unit
```
or
```
yarn test:unit
```

### Lints and fixes files
```
npm run lint
```
or
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How this project was built
```
vue create vuetify-stater-app
cd vuetify-starter-app
vue add vuetify
npm install @mdi/font -D
npm install @mdi/js -D
npm install material-design-icons-iconfont -D
npm install @fortawesome/fontawesome-free -D
```

### src/plugins/vuetify.js
```
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: [{
    iconfont: 'md'
  },
  {
    iconfont: 'mdi'
  }]
})
```
