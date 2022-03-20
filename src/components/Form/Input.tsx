import { useField } from 'formik'
import { Input as BaseInput, InputProps } from '@chakra-ui/react'


type Props = InputProps & {
  name: string
}

/**
 * A custom input component that uses the `useField` hook to work with formik
 * @returns an Input component
 */
export const Input = ({ name, id, ...props }: Props) => {
  const [field, meta] = useField(name)
  const { touched, error } = meta

  return <BaseInput id={name} error={touched && error ? error : ''} {...field} {...props} />
}
