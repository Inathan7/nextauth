import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUserPemissions } from "../utils/ValidateUserPermissions";

type useCanParams = {
    permissions?: string[];
    roles?: string[];
};

export function useCan({permissions, roles}: useCanParams) {
    const { user, isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) {
        return false;
    }

    const userHasValidPermissions = validateUserPemissions({
        user,
        permissions,
        roles,
    })

    return userHasValidPermissions;
}