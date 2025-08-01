import { IconAB2 } from '@tabler/icons-react'

export function ActivityBar() {
  const components = [
    { id: 'component1', name: '组件1', icon: IconAB2 },
    { id: 'component2', name: '组件2', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
    { id: 'component1', name: '组件1', icon: IconAB2 },
    { id: 'component2', name: '组件2', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
    { id: 'component1', name: '组件1', icon: IconAB2 },
    { id: 'component2', name: '组件2', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
    { id: 'component1', name: '组件1', icon: IconAB2 },
    { id: 'component2', name: '组件2', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
    { id: 'component1', name: '组件1', icon: IconAB2 },
    { id: 'component2', name: '组件2', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
    { id: 'component1', name: '组件1', icon: IconAB2 },
    { id: 'component2', name: '组件2', icon: IconAB2 },
    { id: 'component3', name: '组件3', icon: IconAB2 },
  ]

  return (
    <div className="w-[300px]
     border-r
     border-solid
     border-[var(--border-color)]"
    >
      <div className="text-center box-border leading-[36px] h-[36px] border-b border-solid border-[var(--border-color)]">组件</div>
      <div className="grid grid-cols-2 p-2 gap-2">
        {components.map((component) => {
          const Icon = component.icon
          return (
            <div key={component.id} className="leading-[36px] h-[36px] px-3 flex items-center gap-2 border border-solid border-[var(--border-color)] rounded-[8px] hover:bg-[#f5f8fe] hover:border-[#5389eb] hover:text-[#5389eb] cursor-pointer">
              <Icon className="size-[15px]" />
              <div>{component.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
