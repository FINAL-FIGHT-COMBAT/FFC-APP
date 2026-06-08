'use client';

import type { BoxProps } from '@mui/material/Box';

import { m, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { varFade, MotionViewport } from 'src/components/animate';
import { CyberButton } from 'src/components/cyber-button';
import { useCarousel } from 'src/components/carousel';
import { ResponsiveCarouselGrid } from 'src/components/responsive-carousel-grid';

// ----------------------------------------------------------------------

// Cores oficiais das faixas BJJ — Branca → Azul → Roxa → Marrom → Preta
const FAIXA_CONFIG: Record<string, { bg: string; border?: string; glow: string; label: string }> = {
  Branca: { bg: '#FFFFFF', glow: 'rgba(255,255,255,0.5)', label: 'Branca' },
  Azul:   { bg: '#1D4ED8', glow: 'rgba(29,78,216,0.7)',   label: 'Azul'   },
  Roxa:   { bg: '#7C3AED', glow: 'rgba(124,58,237,0.7)',  label: 'Roxa'   },
  Marrom: { bg: '#92400E', glow: 'rgba(146,64,14,0.7)',   label: 'Marrom' },
  Preta:  { bg: '#0A0A0A', border: '#6B7280', glow: 'none', label: 'Preta'  },
};

const FAIXAS_ORDER = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'] as const;
type Faixa = (typeof FAIXAS_ORDER)[number];


// 9 categorias de peso — Adulto Masculino (CBJJ + Absoluto)
const PESO_MASCULINO = [
  { id: 'm-galo',         peso: 'GALO (-57,5KG)'          },
  { id: 'm-pluma',        peso: 'PLUMA (-64,0KG)'         },
  { id: 'm-pena',         peso: 'PENA (-70,0KG)'          },
  { id: 'm-leve',         peso: 'LEVE (-76,0KG)'          },
  { id: 'm-medio',        peso: 'MÉDIO (-82,3KG)'         },
  { id: 'm-meio-pesado',  peso: 'MEIO-PESADO (-88,3KG)'   },
  { id: 'm-pesado',       peso: 'PESADO (-94,3KG)'        },
  { id: 'm-super-pesado', peso: 'SUPER-PESADO (-100,5KG)' },
  { id: 'm-absoluto',     peso: 'ABSOLUTO (OPEN WEIGHT)'  },
];

// 9 categorias de peso — Adulto Feminino (CBJJ + Absoluto)
const PESO_FEMININO = [
  { id: 'f-galo',         peso: 'GALO (-48,5KG)'          },
  { id: 'f-pluma',        peso: 'PLUMA (-53,5KG)'         },
  { id: 'f-pena',         peso: 'PENA (-58,5KG)'          },
  { id: 'f-leve',         peso: 'LEVE (-64,0KG)'          },
  { id: 'f-medio',        peso: 'MÉDIO (-69,0KG)'         },
  { id: 'f-meio-pesado',  peso: 'MEIO-PESADO (-74,0KG)'   },
  { id: 'f-pesado',       peso: 'PESADO (-79,3KG)'        },
  { id: 'f-super-pesado', peso: 'SUPER-PESADO (-84,3KG)'  },
  { id: 'f-absoluto',     peso: 'ABSOLUTO (OPEN WEIGHT)'  },
];

type SlotData = {
  vagasOcupadas: number;
  vagasTotal: number;
  valor: string;
  status: 'disponivel' | 'esgotado';
};

// Dados reais do evento FFC — Adulto Masculino (todos iniciam 0/16)
const FAIXA_DATA: Record<string, SlotData[]> = {
  Branca: [
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' }, // Absoluto
  ],
  Azul: [
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' }, // Absoluto
  ],
  Roxa: [
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' }, // Absoluto
  ],
  Marrom: [
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 200,00', status: 'disponivel' }, // Absoluto
  ],
  Preta: [
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' },
    { vagasOcupadas: 0, vagasTotal: 8, valor: 'R$ 220,00', status: 'disponivel' }, // Absoluto
  ],
};

// Adulto Feminino — aguardando dados reais
const FAIXA_DATA_F: Record<string, SlotData[]> = {
  Branca: Array(9).fill({ vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 150,00', status: 'disponivel' as const }),
  Azul:   Array(9).fill({ vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 170,00', status: 'disponivel' as const }),
  Roxa:   Array(9).fill({ vagasOcupadas: 0, vagasTotal: 16, valor: 'R$ 190,00', status: 'disponivel' as const }),
  Marrom: Array(9).fill({ vagasOcupadas: 0, vagasTotal: 8,  valor: 'R$ 200,00', status: 'disponivel' as const }),
  Preta:  Array(9).fill({ vagasOcupadas: 0, vagasTotal: 8,  valor: 'R$ 220,00', status: 'disponivel' as const }),
};

type Genero = 'M' | 'F';

// ----------------------------------------------------------------------

type CardProps = {
  peso: string;
  faixa: string;
  slot: SlotData;
  genero: string;
};


function CategoryCard({ peso, faixa, slot, genero }: CardProps) {
  const theme = useTheme();
  const isDisponivel = slot.status === 'disponivel';
  const progressPercent = Math.round((slot.vagasOcupadas / slot.vagasTotal) * 100);
  const faixaCfg = FAIXA_CONFIG[faixa];
  const isFaixaPreta = faixa === 'Preta';

  return (
    <CyberCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: 380, sm: 400, md: 'auto' },
        justifyContent: 'space-between',
        transition: theme.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
        },
      }}
    >
      {/* ── TOP: Modalidade + Faixa ── */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, pt: 2, pb: 1.5 }}>
        <Box sx={{ px: 1.2, py: 0.35, borderRadius: 0.75, bgcolor: '#2563EB' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', color: '#fff', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
            BJJ
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={0.75}>
          <Box
            sx={{
              width: 10, height: 10, borderRadius: '50%',
              bgcolor: faixaCfg.bg,
              border: faixaCfg.border ? `1.5px solid ${faixaCfg.border}` : 'none',
              boxShadow: isFaixaPreta ? 'none' : `0 0 7px ${faixaCfg.glow}`,
            }}
          />
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: alpha('#fff', 0.75), fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {faixa}
          </Typography>
        </Stack>
      </Stack>

      {/* ── PESO + GÊNERO ── */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem' }, fontWeight: 900, color: '#fff', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', textTransform: 'uppercase', lineHeight: 1.2, mb: 0.5 }}>
          {peso}
        </Typography>
        <Typography sx={{ fontSize: 10, fontWeight: 500, color: alpha('#fff', 0.35), letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
          {genero}
        </Typography>
      </Box>

      {/* ── DIVIDER ── */}
      <Box sx={{ borderTop: `1px solid ${alpha('#fff', 0.06)}`, mx: 2 }} />

      {/* ── VAGAS ── */}
      <Box sx={{ px: 2, pt: 2, pb: 1.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.75 }}>
          <Typography sx={{ fontSize: 9, fontWeight: 700, color: alpha('#fff', 0.35), letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
            Vagas Ocupadas
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 800, color: alpha('#fff', 0.6), fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
            {slot.vagasOcupadas} / {slot.vagasTotal}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 5, borderRadius: 3, bgcolor: alpha('#fff', 0.07),
            '& .MuiLinearProgress-bar': { borderRadius: 3, bgcolor: progressPercent >= 100 ? '#EF4444' : '#EAB308' },
          }}
        />
      </Box>

      {/* ── DIVIDER ── */}
      <Box sx={{ borderTop: `1px solid ${alpha('#fff', 0.06)}`, mx: 2, mt: 0.5 }} />

      {/* ── VALOR + STATUS ── */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 2 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 900, color: '#fff', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
          {slot.valor}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Iconify icon={isDisponivel ? 'solar:check-circle-bold' : 'solar:close-circle-bold'} width={14} sx={{ color: isDisponivel ? '#22C55E' : '#EF4444' }} />
          <Typography sx={{ fontSize: 10, fontWeight: 800, color: isDisponivel ? '#22C55E' : '#EF4444', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
            {isDisponivel ? 'DISPONÍVEL' : 'ESGOTADO'}
          </Typography>
        </Stack>
      </Stack>

      {/* ── BOTÃO ── */}
      <Box sx={{ px: 2, pb: 2 }}>
        <CyberButton
          fullWidth
          glowColor="info"
          disabled={!isDisponivel}
          sx={{ height: 44, fontSize: 11 }}
        >
          {isDisponivel ? 'INSCREVER VIA APP' : 'LISTA DE ESPERA'}
        </CyberButton>
      </Box>
    </CyberCard>
  );
}

// ----------------------------------------------------------------------

function SegmentedControl({
  options,
  selected,
  onChange,
}: {
  options: { value: string; label: string; dot?: { bg: string; border?: string } }[];
  selected: string;
  onChange: (v: string) => void;
}) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        bgcolor: 'rgba(15,15,15,0.85)',
        borderRadius: 1.5,
        p: '4px',
        gap: '2px',
      }}
    >
      {options.map((opt) => {
        const isActive = selected === opt.value;
        return (
          <Box
            key={opt.value}
            component="button"
            onClick={() => onChange(opt.value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              px: 2,
              py: 0.75,
              borderRadius: 1,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.18s ease',
              whiteSpace: 'nowrap',
              ...(isActive
                ? { bgcolor: '#EAB308', color: '#0A0A0A' }
                : { bgcolor: 'transparent', color: 'rgba(255,255,255,0.45)', '&:hover': { color: 'rgba(255,255,255,0.8)' } }),
            }}
          >
            {opt.dot && (
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  flexShrink: 0,
                  bgcolor: opt.dot.bg,
                  border: opt.dot.border ? `1.5px solid ${opt.dot.border}` : 'none',
                  boxShadow: isActive ? 'none' : undefined,
                }}
              />
            )}
            {opt.label}
          </Box>
        );
      })}
    </Box>
  );
}

// Adaptador para o seletor de faixas
function FaixaSelector({ selected, onChange }: { selected: string; onChange: (f: string) => void }) {
  const options = FAIXAS_ORDER.map((faixa) => ({
    value: faixa,
    label: faixa,
    dot: { bg: FAIXA_CONFIG[faixa].bg, border: FAIXA_CONFIG[faixa].border },
  }));
  return <SegmentedControl options={options} selected={selected} onChange={onChange} />;
}

// ----------------------------------------------------------------------

export function Categorias({ sx, ...other }: BoxProps) {
  const [selectedGenero, setSelectedGenero] = useState<Genero>('M');
  const [selectedFaixa, setSelectedFaixa] = useState<string>('Branca');

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
  });

  const pesoList    = selectedGenero === 'M' ? PESO_MASCULINO : PESO_FEMININO;
  const faixaSource = selectedGenero === 'M' ? FAIXA_DATA     : FAIXA_DATA_F;
  const generoLabel = selectedGenero === 'M' ? 'Categoria Masculina' : 'Categoria Feminina';

  const currentCards = useMemo(
    () =>
      pesoList.map((cat, i) => ({
        ...cat,
        slot: faixaSource[selectedFaixa][i],
      })),
    [pesoList, faixaSource, selectedFaixa]
  );

  return (
    <Box
      id="categorias"
      component="section"
      sx={[
        { position: 'relative', py: { xs: 8, md: 15 }, overflow: 'hidden', bgcolor: 'transparent' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <Container sx={{ position: 'relative', zIndex: 1 }}>

          {/* ── HEADER ── */}
          <m.div variants={varFade('inUp')}>
            <Stack sx={{ mb: 4 }}>

              {/* Linha 1: Badge — tamanho natural */}
              <Box sx={{ alignSelf: 'flex-start', display: 'inline-block', border: `1px solid rgba(234,179,8,0.6)`, borderRadius: 2, px: 1.5, py: 0.5, mb: 2 }}>
                <Typography component="span" sx={{ fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#EAB308' }}>
                  CATEGORIAS
                </Typography>
              </Box>

              {/* Linha 2: Faixas (esquerda) + Gênero (direita) — largura total */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: '100%' }}
              >
                <FaixaSelector selected={selectedFaixa} onChange={setSelectedFaixa} />

                <SegmentedControl
                  options={[
                    { value: 'M', label: 'Masculinas' },
                    { value: 'F', label: 'Femininas'  },
                  ]}
                  selected={selectedGenero}
                  onChange={(v) => setSelectedGenero(v as Genero)}
                />
              </Stack>

            </Stack>
          </m.div>

          {/* ── GRID E CAROUSEL COM ANIMAÇÃO DE TROCA ── */}
          <AnimatePresence mode="wait">
            <m.div
              key={`${selectedGenero}-${selectedFaixa}-container`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ResponsiveCarouselGrid
                data={currentCards}
                carousel={carousel}
                gridColumns={{ md: 'repeat(3, 1fr)' }}
                gridGap={2.5}
                renderItem={(card: any) => (
                  <CategoryCard
                    peso={card.peso}
                    faixa={selectedFaixa}
                    slot={card.slot}
                    genero={generoLabel}
                  />
                )}
              />
            </m.div>
          </AnimatePresence>

        </Container>
      </MotionViewport>
    </Box>
  );
}
