'use client';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

import React, { useState } from 'react';
import { Fragment } from 'react';

export interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal = ({ show, children, onClose }: ModalProps) => {

    const [isOpen, setIsOpen] = useState(true)
  return (
    <Transition.Root as={Fragment} show={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog as="div" className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl p-7 transition-all mx-auto">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
