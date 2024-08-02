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