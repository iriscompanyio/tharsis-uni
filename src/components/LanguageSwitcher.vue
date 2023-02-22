<script>
import { useI18n } from "vue-i18n";
import Tr from "../i18n/translate";

export default {
  setup() {
    const { t, locale } = useI18n();

    const supportedLocales = Tr.supportedLocales;
    const switchLanguage = async (event) => {
      const newLocale = event.target.value;

      await Tr.switchLanguage(newLocale);
    };
    return { t, locale, supportedLocales, switchLanguage };
  },
};
</script>

<template>
  <select
    @change="switchLanguage"
    class="px-2rem text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
  >
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>
