import { FormWrapper } from './FormWrapper';

type AccountForm = {
  email: string;
  password: string;
};

type AccountFormProps = AccountForm & {
  updateFields: (fields: Partial<AccountForm>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Detail">
      <label>Email</label>
      <input
        autoFocus
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        required
      />
    </FormWrapper>
  );
}
