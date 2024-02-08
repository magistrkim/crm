import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'not active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

const StatusLabel = ({ children, status }: StatusLabelProps) => {
  return (
    <div
      className={`inline-flex items-center py-2 px-4 rounded-3xl text-sm font-medium ${
        (status === Status.Active && 'text-green-700 bg-green-200') ||
        (status === Status.NotActive && 'text-red-700 bg-red-200') ||
        (status === Status.Pending && 'text-orange-700 bg-orange-200') ||
        (status === Status.Suspended && 'text-blue-700 bg-blue-200') ||
        ''
      }`}
    >
      <div className="w-1 h-1 rounded-full mr-2 bg-current" />
      {children}
    </div>
  );
};

export default StatusLabel;
