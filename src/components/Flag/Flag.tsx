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
      <div className={cn('[&_img]:[image-rendering:crisp-edges]', flag)}>
        <Avatar
          alt={isoCode}
          className="h-fit w-[32px] shrink-0 rounded-none object-cover"
          size="sm"
          src={getDefaultImageSrc(isoCode)}
        />
      </div>
    );
  }, [isoCode, unknownFlagElement, flag]);
};
