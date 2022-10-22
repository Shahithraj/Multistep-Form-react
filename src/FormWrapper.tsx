import { FC } from 'react';

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}>
        {title}
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto minmax(auto,400px)',
            justifyContent: 'flex-start',
          gap: '1rem .5rem',
        }}
      >
        {children}
      </div>
    </>
  );
}
