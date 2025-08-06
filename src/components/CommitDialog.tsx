import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { GitCommit, User } from 'lucide-react'

export function CommitDialog() {
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="border-t border-[#3c3c3c] bg-[#2d2d30] p-4">
      <Card className="bg-[#1e1e1e] border-[#3c3c3c]">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#0969da] flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="text-sm text-[#cccccc]">
              Commit to <span className="text-white font-medium">fe-fix-sog-full-2</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <Input
                placeholder="Summary (required)"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="bg-[#0d1117] border-[#3c3c3c] text-white placeholder:text-[#6e7681]"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-[#0d1117] border-[#3c3c3c] text-white placeholder:text-[#6e7681] min-h-[80px]"
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-[#6e7681]">
                3 changed files with 12 additions and 7 deletions
              </div>
              <Button 
                className="bg-[#238636] hover:bg-[#2ea043] text-white"
                disabled={!summary.trim()}
              >
                <GitCommit size={16} className="mr-2" />
                Commit to fe-fix-sog-full-2
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}