import { useTranslation } from "react-i18next";

export function useLocalization(namespaces = ["common"]) {
  const { t, i18n } = useTranslation(namespaces);

  // Вы можете добавить дополнительную логику или возвращаемые значения здесь

  return { t, i18n };
}
