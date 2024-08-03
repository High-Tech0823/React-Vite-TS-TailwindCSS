
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
  };
  
export interface IconProps {
    className?: string;
    size?: number;
    color?: string;
}
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export interface EventCardProps {
    text: string,
    btn_text: string,
    onClick: () => void,
    img_url?: string,
    className?: string,
}

// Auth types
export type UserProfile = {
    id?: string,
    email?: string,
    avatar?: string,
    name?: string,
    role?: string,
}
export interface AuthProps {
    isLoggedIn: boolean,
    isInitialized?: boolean,
    user?: UserProfile | null,
    token?: string | null
}

export interface AuthActionProps {
    type: string,
    payload?: AuthProps,
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null | undefined;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updateProfile: VoidFunction;
  };

//   Notification context
 export interface NotificationContextValue {
    showNotification: (msg: string, type: "success" | "error" | "info" | "warning") => void;
}

