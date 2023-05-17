import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getMessageRequest,
  sendMessageRequest,
  getRoomChatRequest,
  createAdminRoomRequest
} from '/src/api/users/request'

const initialState = {
  listMessage: {
    lastMessage: null,
    rows: []
  },
  roomInfor: {
    rows: [],
    pagination: null
  }
}

export const getRoomAciton = createAsyncThunk('/rooms/findMany', async () => {
  const res = await getRoomChatRequest()
  return res
})

export const getMessageAction = createAsyncThunk(
  '/message/getMany',
  async id => {
    const res = await getMessageRequest(id)
    return res
  }
)

export const sendMessageAction = createAsyncThunk(
  '/message/sendMessage',
  async data => {
    const res = await sendMessageRequest(data)
    return res
  }
)

export const createAdminRoomAction = createAsyncThunk(
  '/message/createRoom',
  async () => {
    const res = await createAdminRoomRequest()
    return res
  }
)

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get room
      .addCase(getRoomAciton.pending)
      .addCase(getRoomAciton.fulfilled, (state, { payload }) => {
        state.roomInfor = payload
      })
      .addCase(getRoomAciton.rejected)
      //get message
      .addCase(getMessageAction.pending)
      .addCase(getMessageAction.fulfilled, (state, { payload }) => {
        state.listMessage = payload
      })
      .addCase(getMessageAction.rejected)
      //send message
      .addCase(sendMessageAction.pending)
      .addCase(sendMessageAction.fulfilled, () => {})
      .addCase(sendMessageAction.rejected)
      //create admin room
      .addCase(createAdminRoomAction.pending)
      .addCase(createAdminRoomAction.fulfilled, () => {})
      .addCase(createAdminRoomAction.rejected)
  }
})

export const selectRoom = state => state.message.roomInfor

export const selectMessage = state => state.message.listMessage

export default messageSlice.reducer
