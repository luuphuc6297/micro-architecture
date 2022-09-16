import { WorkSpaceSliceState } from '@micro-architecture-coaching-cloud/models';
import React from 'react';
import { useStore } from '../../features/cc-zustand-store';

interface ConversationContainerProps {
    children: React.ReactNode;
}

const ConversationContainer = ({ children }: ConversationContainerProps) => {
    const workspace = useStore((state: WorkSpaceSliceState | any) => state.workspace);

    const getListConversation = useStore((state) => state.getListConversation);

    React.useEffect(() => {
        if (workspace.id) {
            (async () => {
                await getListConversation(workspace.id);
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workspace.id]);

    return <React.Fragment>{children}</React.Fragment>;
};
export default ConversationContainer;
