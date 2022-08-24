import PhotoModel from "../../models/photo.model"
import { IAuthor } from "./author.type"

export interface IPhoto {
  id: string
  description: string
  alt_description: string
  user: IAuthor
  urls: {
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
    full: string
  }
}

export interface IPhotoProps {
  photo: PhotoModel[] | null
  photoLoadingStatus: 'loading' | 'idle' | 'error'
}
