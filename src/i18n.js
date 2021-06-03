import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ko from 'vuetify/lib/locale/ko'

Vue.use( VueI18n )

const messages = {
    ko: {
        ...require( '@/locales/ko.json' ),
        $vuetify: ko,
    },
}

export default new VueI18n( {
    locale        : process.env.VUE_APP_I18N_LOCALE || 'ko',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ko',
    messages,
} )
