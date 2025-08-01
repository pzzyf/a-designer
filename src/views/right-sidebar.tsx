import { Tab, Tabs } from '@heroui/react'

export function RightSidebar() {
  return (
    <div className="
     w-[300px]
     border-l
     border-solid
     border-[var(--border-color)]"
    >
      <Tabs
        className="h-[36px] leading-[36px] w-full border-b border-solid border-[var(--border-color)]"
        key="underlined"
        aria-label="Tabs variants"
        variant="underlined"
        // 2. 添加了 classNames 属性来为组件内部元素指定样式
        classNames={{
          tabList: 'flex-1',
        }}
      >
        <Tab key="props" title="属性">
          1
        </Tab>
        <Tab key="style" title="样式">
          2
        </Tab>
      </Tabs>
    </div>
  )
}
