export function useSpeechAPI() {
  const { languageType } = useSettings()

  const synth = computed(() => window?.speechSynthesis)
  const speech = computed(() =>
    window ? new window.SpeechSynthesisUtterance() : null
  )
  const voiceList = computed(() => synth.value?.getVoices() || [])

  const koreanVoice = computed(
    () =>
      voiceList.value.find(
        (voice) => voice.lang === 'ko-KR' || voice.name === 'Korean+Andrea'
      ) ||
      voiceList.value.find(
        (voice) =>
          voice.lang === 'ko-KR' ||
          voice.name === 'ko' ||
          voice.name.includes('Korean') ||
          voice.name.includes('korean')
      )
  )
  const japaneseVoice = computed(() =>
    voiceList.value.find(
      (voice) =>
        voice.lang === 'ja-JP' ||
        voice.name === 'ja' ||
        voice.name === 'jp' ||
        voice.name.includes('Japanese') ||
        voice.name.includes('japanese')
    )
  )

  const voice = computed(() => {
    if (languageType.value === settings.languageType.KOREAN) {
      return koreanVoice.value
    } else {
      japaneseVoice.value
    }
  })

  const isCompatible = computed(
    () => !!window && synth.value && voiceList.value.length > 0 && !!voice.value
  )

  const speak = (text: string | number, speed: number) => {
    console.log('🚀 ~ useSpeechAPI ~ voiceList.value:', voiceList.value)
    console.log('🚀 ~ useSpeechAPI ~ japaneseVoice:', japaneseVoice.value)

    if (!isCompatible.value || !speech.value) return

    console.log()
    synth.value.cancel()
    speech.value.text = text.toString()
    speech.value.voice = voice.value!
    speech.value.rate = speed
    synth.value.speak(speech.value)
  }

  return { voiceList, isCompatible, speak }
}
