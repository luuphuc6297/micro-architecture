import { ListResponse } from '@micro-architecture-coaching-cloud/models';

import axiosRTC from './clients/axiosRTC';

export const userApis = {
    getListUser: (workspaceId: string): Promise<ListResponse> => {
        const url = `/${workspaceId}/api/users`;
        return axiosRTC.get(url);
    },
};
