import { createI18n } from 'vue-i18n'
import FlagIcon from 'vue-flag-icon'
// import messages from 'src/i18n'

export default ({ app }) => {
  // Create I18n instance
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'nl',
    globalInjection: true,
    messages
  })

  // Tell app to use the I18n instance
  app.use(i18n)
  app.use(FlagIcon)
}

const messages = {
  'en': {
    toolbarTitle: "Let's collect data!",
    listTitle: "What did you throw away?",
    loadingText: "Loading application...",
    submitButton: "Submit",
    defaultThankYouMessage: "Thank you for registering your waste!",
    co2MessagePart1: "This recycle bin already saved",
    co2MessagePart2: "kg of CO2!",
    askFeedback: "Would you be so kind to give some feedback on the app?",
    clickHere: "Click here",
    normalBin: "Normal bin",
    recycleBin: "Recycle bin"
  },
  'nl': {
    toolbarTitle: "Laten we data verzamelen!",
    listTitle: "Wat heeft u weggegooid?",
    loadingText: "Applicatie aan het laden...",
    submitButton: "Verstuur",
    defaultThankYouMessage: "Bedankt om uw afval te registreren!",
    co2MessagePart1: "Deze vuilbak heeft al",
    co2MessagePart2: "kg CO2 bespaard!",
    askFeedback: "Zou u aub wat feedback willen geven over de app?",
    clickHere: "Klik hier",
    normalBin: "Normale vuilbak",
    recycleBin: "Recyclage vuilbak"
  },
  'es': {
    toolbarTitle: "Laten we data verzamelen!",
    listTitle: "Wat heeft u weggegooid?",
    loadingText: "Applicatie aan het laden...",
    submitButton: "Verstuur",
    defaultThankYouMessage: "Bedankt om uw afval te registreren!",
    co2MessagePart1: "Deze vuilbak heeft al",
    co2MessagePart2: "kg CO2 bespaard!",
    askFeedback: "Zou u aub wat feedback willen geven over de app?",
    clickHere: "Klik hier",
    normalBin: "Normale vuilbak",
    recycleBin: "Recyclage vuilbak"
  },
  'aw': {
    toolbarTitle: "Laten we data verzamelen!",
    listTitle: "Wat heeft u weggegooid?",
    loadingText: "Applicatie aan het laden...",
    submitButton: "Verstuur",
    defaultThankYouMessage: "Bedankt om uw afval te registreren!",
    co2MessagePart1: "Deze vuilbak heeft al",
    co2MessagePart2: "kg CO2 bespaard!",
    askFeedback: "Zou u aub wat feedback willen geven over de app?",
    clickHere: "Klik hier",
    normalBin: "Normale vuilbak",
    recycleBin: "Recyclage vuilbak"
  }
};
