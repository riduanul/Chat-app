import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: (email) => `/conversations?_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
        }),
        getConversation : builder.query({
            query: ({userEmail, participantEmail}) => `/conversations?participants_like=&${userEmail}-&{participantEmail}&&participants_like=${participantEmail}-&{userEmail}` 
        }),
        addConversation : builder.mutation({
            query: (data) => ({
                url: '/conversatons',
                method: "POST",
                body: data,
            })
        }),
        editConversation : builder.mutation({
            query: ({data, id}) => ({
                url: `/conversatons/${id}`,
                method: "PATCH",
                body: data,
            })
        }),
    }),

});

export const {useGetConversationsQuery, useGetConversationQuery, useAddConversationMutation, useEditConversationMutation} = conversationApi;