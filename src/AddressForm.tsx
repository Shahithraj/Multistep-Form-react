import { FormWrapper } from './FormWrapper';

type AddressForm = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressForm & {
  updateFields: (fields: Partial<AddressForm>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address Detail">
      <label>Street</label>
      <input autoFocus type="text" value={street} onChange={e => updateFields({street:e.target.value})} required />
      <label>City</label>
      <input type="text" value={city} onChange={e => updateFields({city:e.target.value})} required />
      <label>State</label>
      <input type="text" value={state} onChange={e => updateFields({state:e.target.value})} required />
      <label>Zip</label>
      <input type="text" value={zip} onChange={e => updateFields({zip:e.target.value})} required />
    </FormWrapper>
  );
}
