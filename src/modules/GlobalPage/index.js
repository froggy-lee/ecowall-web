import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ECO_WALL_TOKEN } from '/src/constants'
import { getMeAction } from '/src/store/slice/users'
import { LocalStorage } from '/src/utils/localStorage'

const GlobalPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (LocalStorage.get(ECO_WALL_TOKEN)) {
      dispatch(getMeAction())
    }
  }, [dispatch])

  return <></>
}

export default GlobalPage
