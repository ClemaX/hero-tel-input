'use client';

import { useMemo } from 'react';
import { cn, Image } from '@heroui/react';
import type { HeroTelInputCountry } from '../../constants/countries.js';
import {
  getDefaultImageSrc,
  getDefaultImageSrcSet,
} from '../../helpers/helper-flag.js';

export type FlagClassNames = {
  flagWrapper?: string;
  flagImg?: string;
};

export type FlagProps = {
  isoCode: HeroTelInputCountry | null;
  unknownFlagElement?: React.ReactNode;
  classNames?: FlagClassNames;
};

export const Flag = (props: FlagProps) => {
  const { isoCode, unknownFlagElement, classNames } = props;

  return useMemo(() => {
    if (!isoCode) {
      return unknownFlagElement;
    }

    return (
      <Image
        alt={isoCode}
        src={getDefaultImageSrc(isoCode)}
        srcSet={getDefaultImageSrcSet(isoCode)}
        radius="none"
        classNames={{
          wrapper: cn('h-fit w-[32px]', classNames?.flagWrapper),
          img: cn('object-cover', classNames?.flagImg),
        }}
      />
    );
  }, [isoCode, unknownFlagElement, classNames]);
};
