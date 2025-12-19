'use client';

import { createContext, useContext, useState } from 'react';

const WaitlistContext = createContext();

export function WaitlistProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <WaitlistContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </WaitlistContext.Provider>
    );
}

export function useWaitlist() {
    return useContext(WaitlistContext);
}
