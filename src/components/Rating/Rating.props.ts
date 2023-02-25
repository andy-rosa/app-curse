export interface RatingProps {
  className?: string
  isEditable?: boolean
  rating: number
  setRating?: (rating: number) => void
}
