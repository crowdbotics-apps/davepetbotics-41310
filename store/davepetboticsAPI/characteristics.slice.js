import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_characteristics_list = createAsyncThunk(
  "characteristics/api_v1_characteristics_list",
  async payload => {
    const response = await apiService.api_v1_characteristics_list(payload)
    return response.data
  }
)
export const api_v1_characteristics_create = createAsyncThunk(
  "characteristics/api_v1_characteristics_create",
  async payload => {
    const response = await apiService.api_v1_characteristics_create(payload)
    return response.data
  }
)
export const api_v1_characteristics_retrieve = createAsyncThunk(
  "characteristics/api_v1_characteristics_retrieve",
  async payload => {
    const response = await apiService.api_v1_characteristics_retrieve(payload)
    return response.data
  }
)
export const api_v1_characteristics_update = createAsyncThunk(
  "characteristics/api_v1_characteristics_update",
  async payload => {
    const response = await apiService.api_v1_characteristics_update(payload)
    return response.data
  }
)
export const api_v1_characteristics_partial_update = createAsyncThunk(
  "characteristics/api_v1_characteristics_partial_update",
  async payload => {
    const response = await apiService.api_v1_characteristics_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_characteristics_destroy = createAsyncThunk(
  "characteristics/api_v1_characteristics_destroy",
  async payload => {
    const response = await apiService.api_v1_characteristics_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const characteristicsSlice = createSlice({
  name: "characteristics",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_characteristics_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_characteristics_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_characteristics_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_characteristics_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_characteristics_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_characteristics_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_characteristics_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_characteristics_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_characteristics_list,
  api_v1_characteristics_create,
  api_v1_characteristics_retrieve,
  api_v1_characteristics_update,
  api_v1_characteristics_partial_update,
  api_v1_characteristics_destroy,
  slice: characteristicsSlice
}
