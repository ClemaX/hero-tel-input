'use client';

import { useMemo } from 'react';
import { Avatar, cn } from '@heroui/react';
import type { HeroTelInputCountry } from '../../constants/countries.js';
import { getDefaultImageSrc } from '../../helpers/helper-flag.js';

export type FlagClassNames = {
  flag?: string;
};

export type FlagProps = {
  isoCode: HeroTelInputCountry | null;
  unknownFlagElement?: React.ReactNode;
  classNames?: FlagClassNames;
};

export const Flag = (props: FlagProps) => {
  const { isoCode, unknownFlagElement, classNames } = props;
  const { flag } = classNames || {};

  return useMemo(() => {
    if (!isoCode) {
      return unknownFlagElement;
    }
    return (
      <Avatar
        alt={isoCode}
        className={cn(
          'h-fit w-[32px] shrink-0 rounded-none object-cover',
          flag
        )}
        size="sm"
        src={getDefaultImageSrc(isoCode)}
      />
    );
  }, [isoCode, unknownFlagElement, flag]);
};
