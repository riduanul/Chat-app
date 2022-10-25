import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authReducer from '../features/auth/authSlice'
import conversationReducer from '../features/Conversation/conversationSlice'
import messagesReducer from '../features/Messages/messagesSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: authReducer,
    conversation:conversationReducer,
    messages: messagesReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware), 
});
