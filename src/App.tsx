import { FormEvent, useState } from 'react';
import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';
import './App.css';
import { useMultistepForm } from './useMultistepForm';
import { UserForm } from './UserForm';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

function App() {
  const Initial_data: FormData = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  };
  const [data, setData] = useState(Initial_data);
  const [count, setCount] = useState(0);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    setCurrentStepIndex,
    back,
    next,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  function formSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    alert('Successfully submitted!');
    setData({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    });
    setCurrentStepIndex(0);
  }
  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '0.5rem',
        maxWidth: 'max-content',
       textAlign: 'center',
      }}
    >
      <form onSubmit={formSubmit}>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
