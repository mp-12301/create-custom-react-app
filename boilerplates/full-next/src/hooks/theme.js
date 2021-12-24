import { useTheme as useEmotionTheme } from '@emotion/react'

export const useTheme = (styles, props) => {
  const theme = useEmotionTheme()

  return styles({props, theme})
}