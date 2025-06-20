#!/usr/bin/env python3
"""
Servidor local simples para testar o site do Grupo Cervantes
Execute: python serve.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)

def main():
    # Verificar se estamos no diretório correto
    if not os.path.exists('index.html'):
        print("❌ Erro: arquivo index.html não encontrado!")
        print("📂 Execute este script no diretório raiz do projeto.")
        sys.exit(1)
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🌐 Servidor iniciado em: http://localhost:{PORT}")
            print(f"📁 Servindo arquivos de: {os.getcwd()}")
            print("🔄 Pressione Ctrl+C para parar o servidor")
            print()
            print("📖 Páginas disponíveis:")
            print(f"   • Início: http://localhost:{PORT}/index.html")
            print(f"   • Sobre Nós: http://localhost:{PORT}/sobre-nos.html")
            print(f"   • Contato: http://localhost:{PORT}/contato.html")
            print(f"   • Localização: http://localhost:{PORT}/localizacao.html")
            print()
            
            # Tentar abrir automaticamente no navegador
            try:
                webbrowser.open(f'http://localhost:{PORT}')
                print("🚀 Abrindo o site no navegador...")
            except:
                print("⚠️  Não foi possível abrir automaticamente o navegador.")
                print(f"   Acesse manualmente: http://localhost:{PORT}")
            
            print()
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n👋 Servidor encerrado pelo usuário.")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Porta {PORT} já está em uso!")
            print("💡 Tente fechar outros servidores ou use uma porta diferente.")
        else:
            print(f"❌ Erro ao iniciar servidor: {e}")
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")

if __name__ == "__main__":
    main()
