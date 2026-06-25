import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

type TextProps = {
  sx?: SxProps<Theme>;
  title: React.ReactNode;
  variants?: MotionProps['variants'];
};

type SectionTitleProps = BoxProps & {
  txtGradient?: string;
  title: React.ReactNode;
  caption?: React.ReactNode;
  description?: React.ReactNode;
  slotProps?: {
    title?: Omit<TextProps, 'title'>;
    caption?: Omit<TextProps, 'title'>;
    description?: Omit<TextProps, 'title'>;
  };
};

export function SectionTitle({
  sx,
  title,
  caption,
  slotProps,
  txtGradient,
  description,
  ...other
}: SectionTitleProps) {
  return (
    <Box
      sx={[
        {
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {caption && (
        <SectionCaption
          title={caption}
          variants={slotProps?.caption?.variants}
          sx={slotProps?.caption?.sx}
        />
      )}

      <Typography
        component={m.h2}
        variant="h2"
        variants={slotProps?.title?.variants ?? varFade('inUp', { distance: 24 })}
        sx={[
          {
            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
            lineHeight: 1.15,
            textTransform: 'uppercase',
          },
          ...(Array.isArray(slotProps?.title?.sx)
            ? slotProps.title.sx
            : [slotProps?.title?.sx]),
        ]}
      >
        {`${title} `}
        {txtGradient && (
          <Box
            component="span"
            sx={{
              color: 'warning.main',
              display: 'inline-block',
            }}
          >
            {txtGradient}
          </Box>
        )}
      </Typography>

      {description && (
        <Typography
          component={m.p}
          variants={slotProps?.description?.variants ?? varFade('inUp', { distance: 24 })}
          sx={[
            { color: 'text.secondary' },
            ...(Array.isArray(slotProps?.description?.sx)
              ? slotProps.description.sx
              : [slotProps?.description?.sx]),
          ]}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function SectionCaption({ title, variants, sx, ...other }: TextProps) {
  return (
    <Box
      component={m.span}
      variants={variants ?? varFade('inUp', { distance: 24 })}
      sx={[
        {
          display: 'inline-block',
          alignSelf: 'flex-start',
          border: '1px solid var(--mui-palette-info-main, #3B82F6)',
          borderRadius: 2,
          px: 1.5,
          py: 0.5,
          typography: 'overline',
          color: 'info.main',
          fontWeight: 700,
          letterSpacing: '0.2em',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {title}
    </Box>
  );
}
