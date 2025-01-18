import { Callout } from "nextra/components";
import { getDictionary } from "public/dictionaries/get-dictionary";
import { Locale } from "public/dictionaries/i18n-config";
import { FC } from "react";

export const Caution: FC<{
  lang: Locale;
}> = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <Callout type="error" emoji="⚠️">
      {dictionary.danger.text}
    </Callout>
  );
};
