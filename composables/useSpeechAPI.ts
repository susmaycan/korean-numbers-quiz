export function useSpeechAPI() {
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

  const isCompatible = computed(
    () =>
      !!window &&
      synth.value &&
      voiceList.value.length > 0 &&
      !!koreanVoice.value
  )

  const speak = (text: string | number, speed: number) => {
    if (!isCompatible.value || !speech.value) return

    synth.value.cancel()
    speech.value.text = text.toString()
    speech.value.voice = koreanVoice.value!
    speech.value.rate = speed
    synth.value.speak(speech.value)
  }

  return { voiceList, isCompatible, speak }
}
