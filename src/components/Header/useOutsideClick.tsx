import { useEffect, RefObject, useState } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T>,
    initialState: boolean
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsActive(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsActive(false);
            }
        };

        const handleDocumentClick = (event: Event) => {
            if (event instanceof MouseEvent) {
                handleClickOutside(event);
            }
        };

        const handleDocumentKeydown = (event: Event) => {
            if (event instanceof KeyboardEvent) {
                handleEscapeKey(event);
            }
        };

        document.addEventListener('mousedown', handleDocumentClick);
        document.addEventListener('keydown', handleDocumentKeydown);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
            document.removeEventListener('keydown', handleDocumentKeydown);
        };
    }, [ref]);

    return [isActive, setIsActive];
};
