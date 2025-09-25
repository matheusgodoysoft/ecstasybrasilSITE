'use client'

import { useEffect } from 'react'

export function SecurityProtection() {
  useEffect(() => {
    // Função para detectar se DevTools está aberto
    const detectDevTools = () => {
      const threshold = 160
      
      const devtools = {
        open: false,
        orientation: null as string | null
      }
      
      const checkDevTools = () => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          if (!devtools.open) {
            devtools.open = true
            // Redirecionar ou mostrar aviso
            document.body.innerHTML = `
              <div style="
                position: fixed; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                background: #000; 
                color: #fff; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                font-family: Arial; 
                font-size: 24px; 
                z-index: 999999;
              ">
                🔒 Acesso Negado - Ferramentas de Desenvolvedor Detectadas
              </div>
            `
          }
        } else {
          devtools.open = false
        }
      }
      
      setInterval(checkDevTools, 500)
    }

    // Função para bloquear teclas de atalho
    const blockKeyboardShortcuts = (e: KeyboardEvent) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+A (Select All)
      if (e.ctrlKey && e.keyCode === 65) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+C (Copy)
      if (e.ctrlKey && e.keyCode === 67) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+S (Save)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault()
        return false
      }
      
      // Ctrl+P (Print)
      if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault()
        return false
      }
    }

    // Função para bloquear botão direito
    const blockRightClick = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Função para bloquear seleção de texto
    const blockTextSelection = () => {
      document.body.style.userSelect = 'none'
      ;(document.body.style as unknown as Record<string, string>).webkitUserSelect = 'none'
      ;(document.body.style as unknown as Record<string, string>).mozUserSelect = 'none'
      ;(document.body.style as unknown as Record<string, string>).msUserSelect = 'none'
    }

    // Função para detectar debugging
    const antiDebug = () => {
      const start = performance.now()
      debugger
      const end = performance.now()
      
      if (end - start > 100) {
        // Debugger detectado
        window.location.href = 'about:blank'
      }
    }

    // Função para ofuscar console
    const obfuscateConsole = () => {
      console.log = () => {}
      console.error = () => {}
      console.warn = () => {}
      console.clear = () => {}
      console.dir = () => {}
      console.dirxml = () => {}
      console.table = () => {}
      console.trace = () => {}
      console.group = () => {}
      console.groupCollapsed = () => {}
      console.groupEnd = () => {}
      console.time = () => {}
      console.timeEnd = () => {}
      console.profile = () => {}
      console.profileEnd = () => {}
      console.count = () => {}
    }

    // Função para detectar ferramentas de desenvolvedor por timing
    const detectDevToolsByTiming = () => {
      let devtools = false
      const threshold = 100
      
      setInterval(() => {
        const start = performance.now()
        console.log('%c', 'font-size: 1px;')
        console.clear()
        const end = performance.now()
        
        if (end - start > threshold) {
          if (!devtools) {
            devtools = true
            document.body.innerHTML = `
              <div style="
                position: fixed; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                background: linear-gradient(45deg, #ff0000, #000000); 
                color: #fff; 
                display: flex; 
                flex-direction: column;
                align-items: center; 
                justify-content: center; 
                font-family: 'Courier New', monospace; 
                font-size: 20px; 
                z-index: 999999;
                text-align: center;
              ">
                <h1>🚫 ACESSO NEGADO 🚫</h1>
                <p>Ferramentas de desenvolvedor detectadas!</p>
                <p>Esta página está protegida contra inspeção.</p>
                <p style="font-size: 14px; margin-top: 20px;">Ecstasy Security System</p>
              </div>
            `
          }
        }
      }, 1000)
    }

    // Inicializar todas as proteções
    detectDevTools()
    blockTextSelection()
    obfuscateConsole()
    detectDevToolsByTiming()
    
    // Executar anti-debug periodicamente
    setInterval(antiDebug, 1000)
    
    // Adicionar event listeners
    document.addEventListener('keydown', blockKeyboardShortcuts)
    document.addEventListener('contextmenu', blockRightClick)
    
    // Cleanup
    return () => {
      document.removeEventListener('keydown', blockKeyboardShortcuts)
      document.removeEventListener('contextmenu', blockRightClick)
    }
  }, [])

  return null // Este componente não renderiza nada visível
}