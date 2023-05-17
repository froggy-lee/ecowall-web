import axios from 'axios'
import { LocalStorage } from '/src/utils/localStorage'
import { ECO_WALL_TOKEN, BASE_API_URL } from '/src/constants'

const authRequest = axios.create({
  baseURL: BASE_API_URL
})

const SSRRequest = axios.create({
  timeout: 2000,
  baseURL: BASE_API_URL
})

// Add a request interceptor
authRequest.interceptors.request.use(async request => {
  const token = LocalStorage.get(ECO_WALL_TOKEN)

  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return request
})

authRequest.interceptors.response.use(
  response => {
    return response.data.data
  },
  async error => {
    const originalRequest = error.config
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      // LocalStorage.remove(ECO_WALL_TOKEN);
      // const auth = getAuth();
      // if (auth.currentUser) {
      //   const token = await getIdToken(auth.currentUser, true);
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return authRequest(originalRequest);
      // }
      LocalStorage.remove(ECO_WALL_TOKEN)
      // if (typeof window !== "undefined") {
      //   window.open("/auth/login", "_self");
      // }
    } else {
      // Retried faile => Log user out
      // await signOut(getAuth());
      // await removeServerCookieRequuest();
    }

    // eslint-disable-next-line no-undef
    return Promise.reject(error.response.data)
  }
)

export { authRequest, SSRRequest }
