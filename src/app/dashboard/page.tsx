import { AnimatedBackground } from "@/components/animated-background"

export default function Dashboard() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your Ecstasy subscription and settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Status Card */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold">Service Status</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">All systems operational</p>
            <div className="text-2xl font-bold text-green-400">Online</div>
          </div>

          {/* Subscription Card */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Active Plan</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Current subscription</p>
            <div className="text-2xl font-bold">UEFI FiveM Infinity</div>
            <p className="text-sm text-muted-foreground mt-1">Expires: 30 days</p>
          </div>

          {/* HWID Card */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">HWID Status</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Hardware verification</p>
            <div className="text-2xl font-bold text-orange-400">Verified</div>
            <p className="text-sm text-muted-foreground mt-1">Changes left: 1</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex flex-col items-center space-y-2 p-4 bg-secondary/50 hover:bg-secondary/80 rounded-lg transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-sm font-medium">Download Client</span>
            </button>

            <button className="flex flex-col items-center space-y-2 p-4 bg-secondary/50 hover:bg-secondary/80 rounded-lg transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Settings</span>
            </button>

            <button className="flex flex-col items-center space-y-2 p-4 bg-secondary/50 hover:bg-secondary/80 rounded-lg transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium">Support</span>
            </button>

            <button className="flex flex-col items-center space-y-2 p-4 bg-secondary/50 hover:bg-secondary/80 rounded-lg transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium">Documentation</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Successfully authenticated</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Configuration updated</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Subscription renewed</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
