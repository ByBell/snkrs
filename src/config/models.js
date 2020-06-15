import { RestApi, GATEWAY_API_URL } from '../service/Api'

export const auth = {
    state: {
      connected: localStorage.getItem('token') ? true : false,
      lastError: undefined,
      token: localStorage.getItem('token') || undefined,
      userprofile: undefined
    },
    reducers: {
      setToken(state, payload) {
        localStorage.setItem('token', payload);
        return {
          ...state,
          connected: true,
          token: payload,
          lastError: undefined
        }
      },
      removeToken(state, payload) {
        localStorage.removeItem('token');
        return {
          ...state,
          connected: false,
          token: undefined,
          lastError: undefined,
          userprofile: undefined
        }
      },
      setError(state, payload) {
        return {
          ...state,
          lastError: payload
        }
      },
      setUserProfile(state, payload) {
        return {
          ...state,
          lastError: undefined,
          userprofile: payload
        }
      }
    },
    effects: dispatch => ({
      async postSignUp(payload, rootState) {
        const api = new RestApi(GATEWAY_API_URL)
        try {
          const response = await api.post('signup', payload)
          dispatch.auth.setToken(response.value)
        } catch (e) {
          dispatch.auth.setError(e.response.data)
        }
      },
      async postSignIn(payload, rootState) {
        const api = new RestApi(GATEWAY_API_URL)
        try {
          const response = await api.post('signin', payload)
          dispatch.auth.setToken(response.value)
        } catch (e) {
          dispatch.auth.setError(e.response.data)
        }
      },
      async postSignOut(payload, rootState) {
        const api = new RestApi(GATEWAY_API_URL, rootState.auth.token)
        try {
          const response = await api.post('signout')
          dispatch.auth.removeToken(response.value)
        } catch (e) {
          dispatch.auth.setError(e.response.data)
        }
      },
      async fetchUserProfile(payload, rootState) {
        const api = new RestApi(GATEWAY_API_URL, rootState.auth.token)
        try {
          const response = await api.get('getprofile')
          dispatch.auth.setUserProfile(response)
        } catch (e) {
          dispatch.auth.setError(e.response.data)
          if (e.response.data.code === 401) {
            dispatch.auth.removeToken(e.response.data.code)
          }
        }
      }
    })
  }
  
