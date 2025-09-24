import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 relative">
                <Image
                  src="/logo_animated_icon.gif"
                  alt="Ecstasy Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-semibold">Ecstasy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © Ecstasy 2025. All rights reserved.
            </p>
            <Link
              href="https://www.dmca.com/Protection/Status.aspx?id=54f2021d-8fe8-4ae4-9864-fdf871fee7ac&refurl=https://ecstasy.zip/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/dmca-badge.svg"
                alt="DMCA.com Protection Status"
                width={100}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Pages */}
          <div>
            <h2 className="font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="font-semibold mb-4">Socials</h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://discord.gg/ASPfsdkHGW" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/ASPfsdkHGW" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/tos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
