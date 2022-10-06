import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/shared/i18n-messages'

Vue.use(VueI18n)

const i18n = new VueI18n({
  messages,
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  silentFallbackWarn: true,
});

i18n.isGlobalScope = true;

export default i18n;