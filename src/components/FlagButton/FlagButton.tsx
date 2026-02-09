'use client';

import { Button, type ButtonProps, cn } from '@heroui/react';
import type { HeroTelInputCountry } from '../../constants/countries.js';
import { getCallingCodeOfCountry } from '../../helpers/helper-country.js';
import { Flag, type FlagClassNames } from '../Flag/Flag.js';

export type FlagButtonClassNames = FlagClassNames & {
  flagButton?: string;
};

export type FlagButtonProps = ButtonProps & {
  isoCode: HeroTelInputCountry | null;
  forceCallingCode?: boolean;
  langOfCountryName?: Intl.LocalesArgument;
  disableDropdown?: boolean;
  unknownFlagElement: React.ReactNode;
  classNames?: FlagButtonClassNames;
};

export const FlagButton = (props: FlagButtonProps) => {
  const {
    isoCode,
    forceCallingCode,
    langOfCountryName,
    disableDropdown,
    unknownFlagElement,
    classNames,
    className,
    ...rest
  } = props;

  const { flagWrapper, flagImg, flagButton } = classNames || {};

  const flagElement = (
    <Flag
      isoCode={isoCode}
      unknownFlagElement={unknownFlagElement}
      classNames={{ flagWrapper, flagImg }}
    />
  );

  return (
    <>
      {disableDropdown && (
        <Button
          tabIndex={-1}
          variant="light"
          size="sm"
          radius="none"
          className={cn('min-w-10 flex-shrink-0 px-1', flagButton, className)}
          startContent={flagElement}
        >
          {forceCallingCode && isoCode ? (
            <span>+{getCallingCodeOfCountry(isoCode)}</span>
          ) : null}
        </Button>
      )}
      {!disableDropdown && (
        <Button
          variant="light"
          size="sm"
          radius="none"
          className={cn('min-w-10 flex-shrink-0 px-1', flagButton, className)}
          startContent={flagElement}
          {...rest}
        >
          {forceCallingCode && isoCode ? (
            <span>+{getCallingCodeOfCountry(isoCode)}</span>
          ) : null}
        </Button>
      )}
    </>
  );
};
