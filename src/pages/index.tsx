import React, { useState } from 'react'
import { Button, Htag, Ptag, Rating, Tag } from '@/components'
import { Arrow } from '@/components/Button/Button.props'
import { TagTheme } from '@/components/Tag/Tag.props'
import { withLayout } from '../../layout/Layout'

function Home (): JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <div>
      <Htag tag={'h1'}>Заголовок</Htag>
      <Button styled={'primary'} arrow={Arrow.LEFT}>button</Button>
      <Button styled={'outline'} arrow={Arrow.LEFT}>button</Button>
      <Ptag>asdasd</Ptag>
      <Ptag size={'normal'}>asdasd</Ptag>
      <Ptag size={'large'}>asdasd</Ptag>
      <Tag theme={TagTheme.OUTLINE} >tag</Tag>
      <Tag theme={TagTheme.PRIMARY} >tag</Tag>
      <Tag theme={TagTheme.RED} >tag</Tag>
      <Tag theme={TagTheme.GREEN} >tag</Tag>
      <Rating rating={rating} />
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </div>

  )
}

export default withLayout(Home)
