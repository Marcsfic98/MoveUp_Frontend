import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any
  }
}

const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isApiReady, setIsApiReady] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null)

  useEffect(() => {
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
      playerRef.current = new window.YT.Player("youtube-audio", {
        height: "0",
        width: "0",
        videoId: "FGBhQbmPwH8",
        playerVars: {
          autoplay: 1,
          controls: 0,
          start: 5,
          loop: 1,
          playlist: "FGBhQbmPwH8",
        },
        events: {
          onReady: () => {
            setIsApiReady(true)
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (event: any) => {
            if (event.data === 1) setIsPlaying(true)
            else setIsPlaying(false)
          },
        },
      })
    }
  }, [])

  const togglePlay = () => {
    if (!playerRef.current) return
    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-[#0d1017] py-4 text-[#00affa] backdrop-blur-sm transition-all duration-500 ${
        isPlaying
          ? "animate-neon-pulse border-[#00affa]"
          : "border-[#00affa]/30 shadow-[0_4px_20px_-5px_rgba(0,175,250,0.3)]"
      }`}
    >
      <div id="youtube-audio" className="hidden"></div>

      {/* Grid com 3 colunas para manter os links centralizados e nada sair do lugar */}
      <nav className="mx-auto grid max-w-5xl grid-cols-3 items-center px-4">
        {/* Coluna 1: Logo (Alinhada à esquerda) */}
        <div className="flex justify-start">
          <Link to="/home" className="h-16 w-16">
            <img src="/img/logo/logo.jpeg" alt="logo" />
          </Link>
        </div>

        {/* Coluna 2: Menu (Sempre centralizado) */}
        <ul className="flex justify-center gap-10 text-xl font-semibold text-[#244e73]">
          <li>
            <Link to="/home" className="transition-colors hover:text-[#00affa]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contatos"
              className="transition-colors hover:text-[#00affa]"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition-colors hover:text-[#00affa]"
            >
              Sobre
            </Link>
          </li>
        </ul>

        {/* Coluna 3: Controles (Alinhados à direita) */}
        <div className="flex items-center justify-end gap-4">
          {/* Indicador visual (Equalizador) */}
          <div
            className={`flex h-4 w-6 items-end gap-1 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
          >
            <div className="w-1 animate-[bounce_1s_infinite] bg-[#00affa]"></div>
            <div className="w-1 animate-[bounce_0.6s_infinite] bg-[#00affa]"></div>
            <div className="w-1 animate-[bounce_0.8s_infinite] bg-[#00affa]"></div>
          </div>

          {isApiReady && (
            <button
              onClick={togglePlay}
              className="flex cursor-pointer items-center justify-center rounded-full border border-[#00affa] p-2 shadow-[0_0_10px_rgba(0,175,250,0.3)] transition-all hover:bg-[#00affa] hover:text-[#0d1017]"
              title={isPlaying ? "Pausar Música" : "Tocar Música"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
