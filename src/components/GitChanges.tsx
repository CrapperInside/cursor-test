import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface GitChangesProps {
  selectedFile: string | null
}

const changedFiles = [
  {
    path: 'public/src/components/filter-component.tsx',
    name: 'filter-component.tsx',
    status: 'M',
    additions: 3,
    deletions: 0
  },
  {
    path: 'public/src/components/print/buttons/index.tsx',
    name: 'index.tsx', 
    status: 'M',
    additions: 2,
    deletions: 1
  },
  {
    path: 'public/src/pages/companies/list.tsx',
    name: 'list.tsx',
    status: 'M',
    additions: 7,
    deletions: 6
  }
]

const diffContent = `@@ -13,6 +13,7 @@ import { useKeycloak } from "react-keycloak/web";
13    13        import { ICompany } from "../../../interface/company";
14    14        import { Check, Close } from "@mui/icons-material";
15    15        import { usePermissions } from "@redefined/core";
16         +    import { PrintButton } from "@/components/print/buttons";
17    16        
18    17        export const CompanyList = () => {
19    18          const { keycloak } = useKeycloak();

@@ -89,6 +90,7 @@ export const CompanyList = () => {
90    90        
91    91        return (
92    92          <List>
93         +            <PrintButton reportName="" dataSourceURL="/api/companies" />
94    93            <DataGrid {...dataGridProps} columns={columns} autoHeight />
95    94          </List>
96    95        );`

export function GitChanges({ selectedFile }: GitChangesProps) {
  const selectedFileData = changedFiles.find(f => f.path === selectedFile)

  return (
    <div className="h-full bg-[#1e1e1e] flex flex-col">
      {/* File Tabs */}
      <div className="border-b border-[#3c3c3c] bg-[#2d2d30]">
        <div className="flex">
          {changedFiles.map((file, index) => {
            const isActive = file.path === selectedFile
            return (
              <div 
                key={file.path}
                className={`px-4 py-2 text-sm border-r border-[#3c3c3c] flex items-center space-x-2 ${
                  isActive ? 'bg-[#1e1e1e] text-white' : 'bg-[#2d2d30] text-[#cccccc] hover:bg-[#404040]'
                }`}
              >
                <span>{file.name}</span>
                <Badge variant="warning" className="text-xs px-1 py-0 h-4">
                  {file.status}
                </Badge>
              </div>
            )
          })}
        </div>
      </div>

      {/* Changes Header */}
      <div className="p-4 border-b border-[#3c3c3c] bg-[#2d2d30]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Changes</h2>
          <Badge variant="secondary" className="text-xs">
            3 changed files
          </Badge>
        </div>
        {selectedFileData && (
          <div className="mt-2 text-sm text-[#cccccc]">
            {selectedFileData.path}
          </div>
        )}
      </div>

      {/* History Tab */}
      <div className="border-b border-[#3c3c3c] bg-[#2d2d30]">
        <div className="flex">
          <div className="px-4 py-2 text-sm bg-[#1e1e1e] text-white border-r border-[#3c3c3c]">
            History
          </div>
        </div>
      </div>

      {/* Diff Content */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {selectedFile ? (
            <Card className="bg-[#0d1117] border-[#3c3c3c] text-white">
              <div className="p-4">
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {diffContent.split('\n').map((line, index) => {
                    let className = 'block py-0.5 px-2'
                    let lineNumberColor = 'text-[#6e7681]'
                    
                    if (line.startsWith('@@')) {
                      className += ' bg-[#0969da] text-white'
                    } else if (line.startsWith('+')) {
                      className += ' bg-[#0d4429] text-[#7ee787]'
                    } else if (line.startsWith('-')) {
                      className += ' bg-[#67060c] text-[#f97583]'
                    } else if (line.includes('import')) {
                      className += ' text-[#79c0ff]'
                    } else if (line.includes('export') || line.includes('const') || line.includes('return')) {
                      className += ' text-[#ff7b72]'
                    } else {
                      className += ' text-[#e6edf3]'
                    }

                    // Extract line numbers from the diff
                    const lineMatch = line.match(/^\s*(\d+)\s+(\d+)/)
                    let displayLine = line
                    if (lineMatch) {
                      displayLine = line.substring(lineMatch[0].length)
                    }

                    return (
                      <div key={index} className={className}>
                        {lineMatch && (
                          <>
                            <span className={`${lineNumberColor} mr-4 select-none w-8 inline-block text-right`}>
                              {lineMatch[1]}
                            </span>
                            <span className={`${lineNumberColor} mr-4 select-none w-8 inline-block text-right`}>
                              {lineMatch[2]}
                            </span>
                          </>
                        )}
                        <span>{displayLine}</span>
                      </div>
                    )
                  })}
                </pre>
              </div>
            </Card>
          ) : (
            <div className="text-center text-[#cccccc] mt-8">
              Select a file to view changes
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}