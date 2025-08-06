import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FileExplorer } from './FileExplorer'
import { GitChanges } from './GitChanges'
import { CommitDialog } from './CommitDialog'
import { 
  GitBranch, 
  GitCommit, 
  Settings, 
  Search,
  MoreHorizontal,
  ChevronDown,
  RefreshCw
} from 'lucide-react'

export function GitHubDesktop() {
  const [selectedFile, setSelectedFile] = useState<string | null>('public/src/pages/companies/list.tsx')

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-white">
      {/* Sidebar */}
      <div className="w-80 bg-[#2d2d30] border-r border-[#3c3c3c] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#3c3c3c]">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-1 hover:bg-[#404040] rounded">
              <Settings size={16} />
            </button>
            <button className="p-1 hover:bg-[#404040] rounded">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Repository Info */}
        <div className="p-4 border-b border-[#3c3c3c]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium">Current Repository</h2>
            <ChevronDown size={14} />
          </div>
          <div className="text-sm text-[#cccccc] mb-3">service-proxy</div>
          
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Current Branch</h3>
            <ChevronDown size={14} />
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <GitBranch size={14} />
            <span className="text-sm text-[#cccccc]">fe-fix-sog-full-2</span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Fetch origin</h3>
            <RefreshCw size={14} />
          </div>
          <div className="text-xs text-[#cccccc] mt-1">Last fetched just now</div>
        </div>

        {/* File Explorer */}
        <div className="flex-1 overflow-hidden">
          <FileExplorer onFileSelect={setSelectedFile} selectedFile={selectedFile} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          <GitChanges selectedFile={selectedFile} />
        </div>

        {/* Commit Dialog */}
        <CommitDialog />
      </div>
    </div>
  )
}