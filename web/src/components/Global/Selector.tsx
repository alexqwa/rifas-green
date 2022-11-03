import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { StyledTrigger, StyledChevron, StyledContent } from '../../stitches/stitchesSelect'
import { SelectionAll } from 'phosphor-react';

export function Selector() {
  return (
    <Select.Root>
      <StyledTrigger className="relative outline-none flex items-center text-white/70 text-sm box-content bg-zinc-900 h-[50px] border-2 border-rifas-border-line rounded-lift pr-[1em] pl-11">
        <SelectionAll
          size={16}
          weight="fill"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
        />
        
        <div className="flex items-center justify-between w-full">
          <Select.Value placeholder="Selecione a categoria" className='text-white' />
          <Select.Icon>
            <StyledChevron/>
          </Select.Icon>
        </div>
      </StyledTrigger>

      <Select.Portal>
        <StyledContent className="rounded-lift p-4 w-full">
          <Select.ScrollUpButton />
          <Select.Viewport className='space-y-2'>
            <Select.Item value="item-1" className="outline-none bg-[#202024] cursor-pointer w-full rounded-lift py-2 px-4 border-2 border-transparent hover:border-rifas-border-line">
              <Select.ItemText>
                Carros
              </Select.ItemText>
            </Select.Item>
            <Select.Item value="item-2" className="outline-none bg-[#202024] cursor-pointer w-full rounded-lift py-2 px-4 border-2 border-transparent hover:border-rifas-border-line">
              <Select.ItemText>
                Motos
              </Select.ItemText>
            </Select.Item>
            <Select.Item value="item-3" className="outline-none bg-[#202024] cursor-pointer w-full rounded-lift py-2 px-4 border-2 border-transparent hover:border-rifas-border-line">
              <Select.ItemText>
                Eletrônicos
              </Select.ItemText>
            </Select.Item>
            <Select.Item value="item-4" className="outline-none bg-[#202024] cursor-pointer w-full rounded-lift py-2 px-4 border-2 border-transparent hover:border-rifas-border-line">
              <Select.ItemText>
                Infantil
              </Select.ItemText>
            </Select.Item>
          </Select.Viewport>
          <Select.SelectScrollDownButton>
            <ChevronDownIcon/>
          </Select.SelectScrollDownButton>
        </StyledContent>
      </Select.Portal>
    </Select.Root>
  )
}