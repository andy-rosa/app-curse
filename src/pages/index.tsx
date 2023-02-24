import React from 'react'
import { Button, Htag, Ptag, Tag } from '@/components'
import { Arrow } from '@/components/Button/Button.props'
import { TagTheme } from '@/components/Tag/Tag.props'

export default function Home (): JSX.Element {
  return (
      <div>
        <Htag tag={'h1'}>Заголовок</Htag>
          <Button styled={'primary'} arrow={Arrow.LEFT}>button</Button>
          <Button styled={'outline'} arrow={Arrow.LEFT}>button</Button>
            <Ptag>asdasd</Ptag>
          <Tag theme={TagTheme.OUTLINE} >asd</Tag>
      </div>

  )
}
