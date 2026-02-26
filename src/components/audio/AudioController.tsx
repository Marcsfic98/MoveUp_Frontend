// Adicione isso logo acima dos imports ou dentro do arquivo d.ts do projeto
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
    YT: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Player: any
      PlayerState: {
        PLAYING: number
        PAUSED: number
      }
    }
  }
}

// Para garantir que o TS trate este arquivo como um módulo
export {}

import React, { useEffect, useRef, useState } from "react"

interface AudioProps {
  onPowerChange: (playing: boolean) => void
}

const AudioController: React.FC<AudioProps> = ({ onPowerChange }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null)

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag)
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: "FGBhQbmPwH8",
        playerVars: { autoplay: 1, start: 5, loop: 1, playlist: "FGBhQbmPwH8" },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (event: any) => {
            const active = event.data === 1
            setIsPlaying(active)
            onPowerChange(active)
          },
        },
      })
    }
  }, [onPowerChange])

  const toggle = () => {
    if (isPlaying) playerRef.current.pauseVideo()
    else playerRef.current.playVideo()
  }

  if (!isReady) return null

  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-full border border-[#00affa]/30 bg-black/40 p-2">
      <div id="youtube-player" className="hidden"></div>
      <button
        onClick={toggle}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#00affa] text-[#0d1017] transition-transform hover:scale-110"
      >
        {isPlaying ? "Ⅱ" : "▶"}
      </button>
      <span className="text-[10px] font-bold tracking-widest uppercase">
        Neon Audio
      </span>
    </div>
  )
}

export default AudioController
