import { Loader2, Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any
  }
}

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isApiReady, setIsApiReady] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null)

  useEffect(() => {
    // 1. Carrega a API do YouTube se não existir
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    } else if (window.YT && window.YT.Player) {
      initPlayer()
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer()
    }

    function initPlayer() {
      if (playerRef.current) return

      playerRef.current = new window.YT.Player("youtube-player-hidden", {
        height: "0",
        width: "0",
        videoId: "FGBhQbmPwH8",
        playerVars: {
          autoplay: 1,
          controls: 0,
          start: 5,
          loop: 1,
          playlist: "FGBhQbmPwH8", // Necessário para o loop funcionar
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (event: any) => {
            setIsApiReady(true)

            // --- LÓGICA DE 5 SEGUNDOS ---
            setTimeout(() => {
              // Tenta dar o play após 5 segundos
              event.target.playVideo()
            }, 2000)
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (event: any) => {
            // event.data === 1 significa "Playing"
            if (event.data === 1) setIsPlaying(true)
            else setIsPlaying(false)
          },
        },
      })
    }
  }, [])

  const toggle = () => {
    if (!playerRef.current || !isApiReady) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  return (
    <div className="flex items-center gap-3 rounded-full border border-white/5 bg-black/20 px-3 py-1 backdrop-blur-md">
      {/* Container do player (invisível) */}
      <div id="youtube-player-hidden" className="hidden"></div>

      {/* Visualizer de Barras */}
      <div className="flex h-4 w-6 items-end gap-0.5">
        <div
          className={`w-1.5 rounded-t bg-[#00affa] transition-all duration-300 ${
            isPlaying ? "h-3 animate-bounce" : "h-1"
          }`}
        ></div>
        <div
          className={`w-1.5 rounded-t bg-[#00affa] transition-all duration-300 ${
            isPlaying ? "h-4 animate-[bounce_0.6s_infinite]" : "h-2"
          }`}
        ></div>
        <div
          className={`w-1.5 rounded-t bg-[#00affa] transition-all duration-300 ${
            isPlaying ? "h-2 animate-[bounce_0.8s_infinite]" : "h-1.5"
          }`}
        ></div>
      </div>

      {/* Botão de Controle */}
      <button
        onClick={toggle}
        disabled={!isApiReady}
        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
          isApiReady
            ? "cursor-pointer border-[#00affa] bg-[#00affa]/10 text-[#00affa] hover:bg-[#00affa] hover:text-[#0d1017] hover:shadow-[0_0_15px_rgba(0,175,250,0.5)]"
            : "animate-pulse cursor-wait border-slate-600 bg-slate-800 text-slate-500"
        }`}
      >
        {!isApiReady ? (
          <Loader2 size={14} className="animate-spin" />
        ) : isPlaying ? (
          <Pause size={14} fill="currentColor" />
        ) : (
          <Play size={14} fill="currentColor" className="ml-0.5" />
        )}
      </button>
    </div>
  )
}
