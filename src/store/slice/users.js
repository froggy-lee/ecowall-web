import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getMeRequest,
  updateUserRequest,
  deleteUserRequest,
  resetPasswordRequest,
  getTopUserRequest,
  dailyRewardRequest,
  checkBonusCodeRequest,
  dailyBonusRequest,
  top24hRequest,
  changePasswordRequest
} from '/src/api/users/request'
import { leaderboardRequest } from '/src/api/leaderboard/request'
import { getMissionEarnRequest } from '/src/api/earn/request'
import { toast } from 'react-toastify'
import {
  getDetailUserRequest,
  pressReceiveRequest
} from '/src/api/users/request'
import { getRecentEarnByUserRequest } from '/src/api/users/request'
import { earnOfferRequest } from '/src/api/users/request'
import {
  notificationRequest,
  removeNotificationRequest,
  readNotificationRequest
} from '/src/api/notification/request'

const initialState = {
  profile: null,
  leaderboard: {
    rows: [],
    pagination: null
  },
  topUser: {
    rows: [],
    pagination: null
  },
  detailUser: null,
  recentEarnByUser: null,
  pressedReceive: null,
  earnOffer: {
    rows: [],
    pagination: null
  },
  notification: {
    rows: [],
    pagination: null
  },
  top24h: [],
  mission: []
}

export const getMeAction = createAsyncThunk('users/getMe', async () => {
  try {
    const response = await getMeRequest()

    return response
    // eslint-disable-next-line no-empty
  } catch (error) {}
})

export const updateUserAciton = createAsyncThunk(
  '/users/editProfile',
  async account => {
    try {
      const res = await updateUserRequest(account)
      return res
    } catch (error) {
      toast.error(error?.message)
    }
  }
)

export const deleteUserAction = createAsyncThunk(
  '/users/deleteAccount',
  async () => {
    try {
      const res = await deleteUserRequest()
      return res
    } catch (error) {
      toast.error(error?.message)
    }
  }
)

export const resetPasswordAction = createAsyncThunk(
  '/users/resetPassword',
  async data => {
    const res = await resetPasswordRequest(data)
    return res
  }
)

export const leaderboardAction = createAsyncThunk(
  'users/leaderboard',
  async queries => {
    const response = await leaderboardRequest(queries)

    return response?.data?.data
  }
)

export const topUserAction = createAsyncThunk(
  'users/topuser',
  async queries => {
    const response = await getTopUserRequest(queries)

    return response
  }
)

export const detailUserAction = createAsyncThunk(
  'users/detailTopUser',
  async id => {
    const response = await getDetailUserRequest(id)

    return response
  }
)

export const recentEarnByUserAction = createAsyncThunk(
  'users/recentEarnByUser',
  async id => {
    const response = await getRecentEarnByUserRequest(id)

    return response
  }
)

export const notificationAction = createAsyncThunk(
  'users/notification',
  async queries => {
    try {
      const response = await notificationRequest(queries)

      return response
    } catch (error) {
      toast.error(error?.message)
    }
  }
)

export const removeNotificationAction = createAsyncThunk(
  'users/deleteNotification',
  async id => {
    try {
      const res = await removeNotificationRequest(id)
      return res
    } catch (error) {
      toast.error(error?.message)
    }
  }
)

export const readNotificationAction = createAsyncThunk(
  'users/readNotification',
  async id => {
    try {
      const res = await readNotificationRequest(id)
      return res
    } catch (error) {
      toast.error(error?.message)
    }
  }
)
export const pressedReceiveAction = createAsyncThunk(
  'users/pressedReceive',
  async () => {
    const response = await pressReceiveRequest()
    return response
  }
)

export const dailyRewardAction = createAsyncThunk(
  'users/dailyReward',
  async () => {
    const response = await dailyRewardRequest()
    return response
  }
)

export const earnOfferAction = createAsyncThunk('users/earnOffer', async () => {
  const response = await earnOfferRequest()
  return response
})

export const checkBonusCodeAction = createAsyncThunk(
  'users/checkBonusCode',
  async data => {
    const response = await checkBonusCodeRequest(data)
    return response
  }
)

export const dailyBonusAction = createAsyncThunk(
  'users/dailyBonus',
  async data => {
    const response = await dailyBonusRequest(data)
    return response
  }
)

export const top24hAction = createAsyncThunk('users/top24h', async () => {
  const response = await top24hRequest()
  return response
})

export const changePasswordAction = createAsyncThunk(
  'users/changePassword',
  async data => {
    const response = await changePasswordRequest(data)
    return response
  }
)

export const getMissionEarnAction = createAsyncThunk(
  'users/net-offers',
  async () => {
    const res = await getMissionEarnRequest()
    return res
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logOut: () => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(getMeAction.pending)
      .addCase(getMeAction.fulfilled, (state, { payload }) => {
        state.profile = payload
      })
      .addCase(getMeAction.rejected, state => {
        state.profile = null
      })
      .addCase(updateUserAciton.pending)
      .addCase(updateUserAciton.fulfilled, () => {})
      .addCase(updateUserAciton.rejected)

      .addCase(deleteUserAction.pending)
      .addCase(deleteUserAction.fulfilled, () => {})
      .addCase(deleteUserAction.rejected)

      .addCase(leaderboardAction.pending)
      .addCase(leaderboardAction.fulfilled, (state, { payload }) => {
        state.leaderboard = payload
      })
      .addCase(leaderboardAction.rejected)

      // reset password
      .addCase(resetPasswordAction.pending)
      .addCase(resetPasswordAction.fulfilled, () => {})
      .addCase(resetPasswordAction.rejected)

      // get top user
      .addCase(topUserAction.pending)
      .addCase(topUserAction.fulfilled, (state, { payload }) => {
        state.topUser = payload
      })
      .addCase(topUserAction.rejected)

      // get detail user
      .addCase(detailUserAction.pending)
      .addCase(detailUserAction.fulfilled, (state, { payload }) => {
        state.detailUser = payload
      })
      .addCase(detailUserAction.rejected)

      // get recent earnings by user
      .addCase(recentEarnByUserAction.pending)
      .addCase(recentEarnByUserAction.fulfilled, (state, { payload }) => {
        state.recentEarnByUser = payload
      })
      .addCase(recentEarnByUserAction.rejected)

      //notification
      .addCase(notificationAction.pending)
      .addCase(notificationAction.fulfilled, (state, { payload }) => {
        state.notification = payload
      })
      .addCase(notificationAction.rejected)

      //remove notification
      .addCase(removeNotificationAction.pending)
      .addCase(removeNotificationAction.fulfilled, (state, { payload }) => {
        state.notification.rows = state.notification.rows.filter(
          item => item.id !== payload
        )
      })
      .addCase(removeNotificationAction.rejected)

      //read notificaton
      .addCase(readNotificationAction.pending)
      .addCase(readNotificationAction.fulfilled, (state, { payload }) => {
        state.readNotification = payload
      })
      .addCase(readNotificationAction.rejected)

      //get pressed receive
      .addCase(pressedReceiveAction.pending)
      .addCase(pressedReceiveAction.fulfilled, (state, { payload }) => {
        state.pressedReceive = payload
      })
      .addCase(pressedReceiveAction.rejected)

      // daily reward
      .addCase(dailyRewardAction.pending)
      .addCase(dailyRewardAction.fulfilled, () => {})
      .addCase(dailyRewardAction.rejected)

      //earning offer
      .addCase(earnOfferAction.pending)
      .addCase(earnOfferAction.fulfilled, (state, { payload }) => {
        state.earnOffer = payload
      })
      .addCase(earnOfferAction.rejected)

      //check bonus code
      .addCase(checkBonusCodeAction.pending)
      .addCase(checkBonusCodeAction.fulfilled, () => {})
      .addCase(checkBonusCodeAction.rejected)

      // daily bonus
      .addCase(dailyBonusAction.pending)
      .addCase(dailyBonusAction.fulfilled, () => {})
      .addCase(dailyBonusAction.rejected)

      //top 24h
      .addCase(top24hAction.pending)
      .addCase(top24hAction.fulfilled, (state, { payload }) => {
        state.top24h = payload
      })
      .addCase(top24hAction.rejected)

      //change password
      .addCase(changePasswordAction.pending)
      .addCase(changePasswordAction.fulfilled, () => {})
      .addCase(changePasswordAction.rejected)

      //get mission
      .addCase(getMissionEarnAction.pending)
      .addCase(getMissionEarnAction.fulfilled, (state, { payload }) => {
        state.mission = payload
      })
      .addCase(getMissionEarnAction.rejected)
  }
})

export const selectProfile = state => state.users.profile

export const selectLeaderboard = state => state.users.leaderboard

export const selectTopUser = state => state.users.topUser

export const selectDetailUser = state => state.users.detailUser

export const selectRecentEarnByUser = state => state.users.recentEarnByUser

export const selectNotification = state => state.users.notification

export const selectPressedReceive = state => state.users.pressedReceive

export const selectEarnOffer = state => state.users.earnOffer

export const selectTop24h = state => state.users.top24h

export const selectMissionEarn = state => state.users.mission

export const { logOut } = usersSlice.actions
export default usersSlice.reducer
