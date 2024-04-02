'use client';

import type { Dev, Squad } from '@api';

import { Button } from '../../../atoms';
import type { ChangeDevSquadFormState } from '../types/change-dev-squad-form-state.type';

interface FormContentProps {
  dev: Dev;
  squads: Squad[];
  state: ChangeDevSquadFormState;
  pending: boolean;
}

export const FormContent = ({
  dev,
  squads,
  state,
  pending,
}: FormContentProps) => (
  <>
    <input type="hidden" name="idDev" value={dev.id} />
    <div className="mb-5 flex flex-col gap-[2px]">
      <div className="text-xs text-gray-500">
        {`${dev.firstName} currently belongs to ${squads.find((s) => s.id === dev.idSquad)?.name}`}
      </div>
      <div className="text-xs text-gray-500">{`${dev.firstName} is a ${dev.jobTitle}`}</div>
    </div>
    <label className="form-control mb-3 w-full">
      <select name="idSquad" className="select select-bordered">
        <option disabled defaultChecked>
          Select another squad
        </option>
        {squads
          .filter(({ id }) => id !== dev.idSquad)
          .map(({ id, name, devsCount }) => (
            <option key={id} value={id}>
              {name} - {devsCount} devs
            </option>
          ))}
      </select>
      <div
        className={`text-md mb-3 mt-2 w-full ${state.success ? 'text-green-500' : 'text-red-500'}`}
      >
        {state?.message}
      </div>
    </label>
    <Button type="submit" disabled={pending} className="w-full">
      Move
    </Button>
  </>
);
