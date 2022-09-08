import { CurrentUser, WorkSpace } from "@micro-architecture-coaching-cloud/models";
import React from "react";

export interface InfoContextProperty {
    user?: CurrentUser;
    workspace?: WorkSpace;
    workspaces?: WorkSpace[];
}

const defaultValue: InfoContextProperty = {}

export const InfoContext = React.createContext(defaultValue);