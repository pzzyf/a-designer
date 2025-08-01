import { Divider } from '@heroui/react'
import { IconArrowBackUp, IconArrowForwardUp, IconDeviceFloppy, IconScanEye, IconTrash } from '@tabler/icons-react'

export function Toolbar() {
  return (
    <div className="flex h-[36px] box-border leading-[36px] items-center justify-between px-4 border-b border-solid border-[var(--border-color)] bg-[var(--bg)]">
      <div className="flex items-center gap-4">
        <IconArrowBackUp size="16px" className=" cursor-pointer" />
        <IconArrowForwardUp size="16px" className=" cursor-pointer" />
        <Divider className="h-[15px] cursor-pointer" orientation="vertical" />
        <IconTrash size="16px" className=" cursor-pointer" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-[25px] gap-1 items-center cursor-pointer border border-solid border-[var(--border-color)] rounded-[4px] px-2 hover:bg-[#f5f8fe] hover:border-[#5389eb] hover:text-[#5389eb]">
          <IconScanEye size="16px" className=" cursor-pointer" />
          <div>预览</div>
        </div>
        <div className="flex h-[25px] gap-1 items-center cursor-pointer border border-solid border-[var(--border-color)] rounded-[4px] px-2 hover:bg-[#f5f8fe] hover:border-[#5389eb] hover:text-[#5389eb]">
          <IconDeviceFloppy size="16px" className=" cursor-pointer" />
          <div>保存</div>
        </div>
      </div>
    </div>
  )
}
