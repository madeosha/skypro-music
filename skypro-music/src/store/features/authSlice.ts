import { fetchAddUser, fetchTokens, fetchUser } from "../../api/userApi";
import { SignInFormType, SignUpFormType, UserType } from "../../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Функция для извлечения данных из LocalStorage
const loadUserFromLocalStorage = (): UserType | null => {
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
};

// Функция для сохранения данных в LocalStorage
const saveUserToLocalStorage = (user: UserType): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getAuthUser = createAsyncThunk(
  "user/getAuthUser",
  async ({ email, password }: SignInFormType) => {
    const user = await fetchUser({ email, password });
    saveUserToLocalStorage(user);
    return user;
  }
);

export const getRegUser = createAsyncThunk(
  "user/getRegUser",
  async ({ email, password, username }: SignUpFormType) => {
    const user = await fetchAddUser({ email, password, username });
    return user;
  }
);

export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SignInFormType) => {
    const tokens = await fetchTokens({ email, password });
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
    return tokens;
  }
);

type AuthStateType = {
  user: null | UserType;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};

const initialState: AuthStateType = {
  user: loadUserFromLocalStorage(),
  tokens: {
    access: localStorage.getItem("access_token") || null,
    refresh: localStorage.getItem("refresh_token") || null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogout: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getAuthUser.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.user = action.payload;
        }
      )
      .addCase(
        getTokens.fulfilled,
        (
          state,
          action: PayloadAction<{
            access: string | null;
            refresh: string | null;
          }>
        ) => {
          state.tokens.access = action.payload.access;
          state.tokens.refresh = action.payload.refresh;
        }
      );
  },
});

export const { setLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
