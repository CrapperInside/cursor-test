import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronRight, 
  ChevronDown, 
  Folder, 
  FolderOpen, 
  File,
  FileText
} from 'lucide-react'

interface FileItem {
  name: string
  type: 'file' | 'folder'
  children?: FileItem[]
  isModified?: boolean
  isOpen?: boolean
  path: string
}

const fileTree: FileItem[] = [
  {
    name: 'UNTITLED (WORKING TREE)',
    type: 'folder',
    isOpen: true,
    path: '',
    children: [
      {
        name: 'Documents',
        type: 'folder',
        path: 'Documents',
        children: []
      },
      {
        name: 'Program Files',
        type: 'folder',
        isOpen: true,
        path: 'Program Files',
        children: [
          {
            name: 'Project',
            type: 'folder',
            isOpen: true,
            path: 'Program Files/Project',
            children: [
              {
                name: 'SAM',
                type: 'folder',
                isOpen: true,
                path: 'Program Files/Project/SAM',
                children: [
                  {
                    name: 'ser',
                    type: 'folder',
                    isOpen: true,
                    path: 'Program Files/Project/SAM/ser',
                    children: [
                      {
                        name: 'public',
                        type: 'folder',
                        isOpen: true,
                        path: 'Program Files/Project/SAM/ser/public',
                        children: [
                          {
                            name: 'src',
                            type: 'folder',
                            isOpen: true,
                            path: 'public/src',
                            children: [
                              {
                                name: 'components',
                                type: 'folder',
                                isOpen: true,
                                path: 'public/src/components',
                                children: [
                                  {
                                    name: 'filter-component.tsx',
                                    type: 'file',
                                    isModified: true,
                                    path: 'public/src/components/filter-component.tsx'
                                  },
                                  {
                                    name: 'print',
                                    type: 'folder',
                                    path: 'public/src/components/print',
                                    children: [
                                      {
                                        name: 'buttons',
                                        type: 'folder',
                                        path: 'public/src/components/print/buttons',
                                        children: [
                                          {
                                            name: 'index.tsx',
                                            type: 'file',
                                            isModified: true,
                                            path: 'public/src/components/print/buttons/index.tsx'
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                name: 'pages',
                                type: 'folder',
                                isOpen: true,
                                path: 'public/src/pages',
                                children: [
                                  {
                                    name: 'companies',
                                    type: 'folder',
                                    isOpen: true,
                                    path: 'public/src/pages/companies',
                                    children: [
                                      {
                                        name: 'list.tsx',
                                        type: 'file',
                                        isModified: true,
                                        path: 'public/src/pages/companies/list.tsx'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

interface FileExplorerProps {
  onFileSelect: (path: string) => void
  selectedFile: string | null
}

export function FileExplorer({ onFileSelect, selectedFile }: FileExplorerProps) {
  const renderFileItem = (item: FileItem, level: number = 0) => {
    const isSelected = selectedFile === item.path
    
    return (
      <div key={item.path}>
        <div 
          className={`flex items-center py-1 px-2 hover:bg-[#404040] cursor-pointer ${
            isSelected ? 'bg-[#404040]' : ''
          }`}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          onClick={() => item.type === 'file' && onFileSelect(item.path)}
        >
          {item.type === 'folder' ? (
            <>
              {item.isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              {item.isOpen ? <FolderOpen size={16} className="ml-1" /> : <Folder size={16} className="ml-1" />}
            </>
          ) : (
            <>
              <div className="w-3.5"></div>
              <FileText size={16} className="ml-1" />
            </>
          )}
          <span className={`ml-2 text-sm ${item.isModified ? 'text-[#f9c74f]' : 'text-[#cccccc]'}`}>
            {item.name}
          </span>
          {item.isModified && (
            <Badge variant="warning" className="ml-auto text-xs px-1 py-0 h-4">
              M
            </Badge>
          )}
        </div>
        {item.isOpen && item.children?.map(child => renderFileItem(child, level + 1))}
      </div>
    )
  }

  return (
    <div className="h-full">
      <div className="p-3 border-b border-[#3c3c3c]">
        <h3 className="text-sm font-medium text-[#cccccc] mb-2">EXPLORER</h3>
      </div>
      <ScrollArea className="h-full">
        <div className="p-1">
          {fileTree.map(item => renderFileItem(item))}
        </div>
      </ScrollArea>
    </div>
  )
}