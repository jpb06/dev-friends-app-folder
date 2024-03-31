'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { DevFriendsApi } from '../../../../../api';

interface ActionResult {
  message: string;
  success: boolean;
}

export const changeDevSquadAction = async (
  prevState: {
    message: string;
  },
  formData: FormData,
): Promise<ActionResult> => {
  const schema = z.object({
    idSquad: z.number({ coerce: true }),
    idDev: z.number({ coerce: true }),
  });
  const result = schema.safeParse({
    idSquad: formData.get('idSquad'),
    idDev: formData.get('idDev'),
  });

  if (!result.success) {
    const errors = JSON.parse(result.error.message);

    return { message: errors.at(0).message as string, success: false };
  }

  try {
    const { idSquad, idDev } = result.data;
    const apiResult = await DevFriendsApi.changeDevSquad(idSquad, idDev);

    revalidatePath('/');
    return {
      message: apiResult,
      success: true,
    };
  } catch (e) {
    const error = JSON.parse((e as { message: string }).message as string);
    return { message: error.details, success: false };
  }
};
