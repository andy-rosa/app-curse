import cls from './Rating.module.css'
import { type RatingProps } from './Rating.props'
import cn from 'classnames'
import { useEffect, useState, type KeyboardEvent } from 'react'
import StarIcon from './icon/star.svg'

const MAX_RATING = 5

export function Rating (props: RatingProps): JSX.Element {
  const {
    isEditable = false,
    rating,
    setRating
  } = props

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(MAX_RATING).fill(<></>))

  const clickRatingHandler = (rating: number): void => {
    if (!isEditable || !setRating) {
      return
    }
    setRating(rating)
  }

  const keydownRatingHandler = (evt: KeyboardEvent<SVGElement>, rating: number): void => {
    if (!isEditable || !setRating || evt.key !== 'Enter') {
      return
    }
    setRating(rating)
  }

  const changeDisplayRating = (i: number): void => {
    if (!isEditable) {
      return
    }
    constructRating(i)
  }

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((star: JSX.Element, i: number) => (
      <span
        key={i}
        className={
          cn(cls.rating, {
            [cls.filled]: i < currentRating,
            [cls.editable]: isEditable
          })
        }
        onMouseEnter={() => { changeDisplayRating(i + 1) }}
        onMouseLeave={() => { changeDisplayRating(rating) } }
        onClick={() => { clickRatingHandler(i + 1) }}
      >
        < StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(evt: KeyboardEvent<SVGElement>) => { keydownRatingHandler(evt, i + 1) }}
        />
      </span>
    ))
    setRatingArray(updatedArray)
  }

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  return (
    <div>
      {ratingArray}
    </div>
  )
}
