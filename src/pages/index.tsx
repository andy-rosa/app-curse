import React, { useState } from 'react'
import { Button, Htag, Ptag, Rating, Tag } from '@/components'
import { Arrow } from '@/components/Button/Button.props'
import { TagTheme } from '@/components/Tag/Tag.props'
import { withLayout } from '../../layout/Layout'
import { type GetStaticProps } from 'next'
import axios from 'axios'
import * as process from 'process'
import { type MenuItem } from '@/interfaces/menu.interface'

function Home ({ menu, firstCategory }: HomeProps): JSX.Element {
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
      {
        menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))
      }
    </div>

  )
}

export default withLayout(Home)

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory
    })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}
