import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { logger } from './logger';
import { ConversationSlice, createConversationSlice } from './slices/conversations';
import { createMessageSlice, MessageSlice } from './slices/messages';
import { createTypingSlice, TypingSlice } from './slices/typing';

export const useStore = create<ConversationSlice & MessageSlice & TypingSlice>()(
    logger(
        devtools(
            persist(
                (...a) => {
                    return {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        ...createConversationSlice(...a),
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        ...createMessageSlice(...a),
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        ...createTypingSlice(...a),
                    };
                },
                { name: 'coaching-session-store', getStorage: () => sessionStorage }
            )
        )
    )
);
