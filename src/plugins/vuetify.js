import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'parada',
    themes: {
      parada: {
        dark: true,
        colors: {
          background: '#0c2416',
          surface: '#143221',
          primary: '#1f6b38',
          secondary: '#e6a817',
          accent: '#f3c75a',
          error: '#ff8a80',
          info: '#fbf6ea',
          success: '#2f7d46',
          warning: '#e6a817',
          'on-secondary': '#142418',
          'on-background': '#ffffff',
          'on-surface': '#ffffff',
        },
      },
      paradaLight: {
        dark: false,
        colors: {
          background: '#fbf6ea',
          surface: '#ffffff',
          primary: '#1a4d2a',
          secondary: '#e6a817',
          'on-surface': '#142418',
          'on-background': '#142418',
          'on-primary': '#ffffff',
        },
      },
    },
  },
})
