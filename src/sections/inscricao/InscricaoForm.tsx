'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';
import { CyberCard } from 'src/components/cyber-card';
import { Iconify } from 'src/components/iconify';
import { CyberButton } from 'src/components/cyber-button';

// ----------------------------------------------------------------------
// CONSTANTES DE OPÇÕES
// ----------------------------------------------------------------------

const CATEGORIES = [
  'Galo (Até 57kg)',
  'Pena (Até 66kg)',
  'Leve (Até 70kg)',
  'Meio-Médio (Até 77kg)',
  'Médio (Até 84kg)',
  'Meio-Pesado (Até 93kg)',
  'Pesado (Acima 93kg)',
  'Absoluto (Sem limite)',
];

const BELTS = [
  'Branca',
  'Azul',
  'Roxa',
  'Marrom',
  'Preta',
  'Coral',
  'Vermelha',
  'Grappling (N/A)',
];

// ----------------------------------------------------------------------
// SCHEMAS E TIPOS (ZOD)
// ----------------------------------------------------------------------

const AtletaSchema = zod.object({
  fullName: zod.string().min(1, { message: 'Nome completo é obrigatório' }),
  email: zod.string().min(1, { message: 'E-mail é obrigatório' }).email({ message: 'E-mail inválido' }),
  phone: zod.string().min(1, { message: 'Telefone/WhatsApp é obrigatório' }),
  document: zod.string().min(1, { message: 'CPF ou RG é obrigatório' }),
  category: zod.string().min(1, { message: 'Selecione uma categoria de peso' }),
  belt: zod.string().min(1, { message: 'Selecione a sua faixa/graduação' }),
  team: zod.string().min(1, { message: 'Nome da academia ou equipe é obrigatório' }),
});

type AtletaSchemaType = zod.infer<typeof AtletaSchema>;

const AcademiaSchema = zod.object({
  academyName: zod.string().min(1, { message: 'Nome da academia é obrigatório' }),
  headCoach: zod.string().min(1, { message: 'Nome do professor é obrigatório' }),
  email: zod.string().min(1, { message: 'E-mail comercial é obrigatório' }).email({ message: 'E-mail inválido' }),
  phone: zod.string().min(1, { message: 'Telefone comercial é obrigatório' }),
  document: zod.string().min(1, { message: 'CNPJ ou CPF do responsável é obrigatório' }),
  coachBelt: zod.string().min(1, { message: 'Selecione a graduação do professor' }),
});

type AcademiaSchemaType = zod.infer<typeof AcademiaSchema>;

// ----------------------------------------------------------------------
// ESTILO COMUM DOS INPUTS (NEON/CYBER)
// ----------------------------------------------------------------------

const getInputStyle = (theme: any) => ({
  '& .MuiOutlinedInput-root': {
    color: 'common.white',
    bgcolor: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(12px)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      transition: 'border-color 0.3s',
    },
    '&:hover fieldset': { borderColor: 'rgba(0, 255, 127, 0.5)' },
    '&.Mui-focused fieldset': {
      borderColor: '#00ff7f',
      boxShadow: '0 0 15px rgba(0, 255, 127, 0.25)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'grey.500',
    '&.Mui-focused': { color: '#00ff7f' },
  },
});

// ----------------------------------------------------------------------
// COMPONENTE: FORMULÁRIO DO ATLETA
// ----------------------------------------------------------------------

function FormularioAtleta() {
  const theme = useTheme();
  const inputStyle = getInputStyle(theme);

  const methods = useForm<AtletaSchemaType>({
    resolver: zodResolver(AtletaSchema),
    defaultValues: { fullName: '', email: '', phone: '', document: '', category: '', belt: '', team: '' },
  });

  const { reset, handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.info('INSCRIÇÃO DE ATLETA', data);
      toast.success('Inscrição do Atleta enviada com sucesso!');
      reset();
    } catch (error) {
      toast.error('Erro ao enviar. Tente novamente.');
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'grid',
            rowGap: 3,
            columnGap: 2,
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          }}
        >
          <Field.Text name="fullName" label="Nome do Atleta" sx={inputStyle} />
          <Field.Text name="document" label="CPF ou RG" sx={inputStyle} />
          
          <Field.Text name="email" label="E-mail do Atleta" sx={inputStyle} />
          <Field.Text name="phone" label="Telefone / WhatsApp" sx={inputStyle} />
          
          <Field.Select name="category" label="Categoria de Peso" sx={inputStyle}>
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Field.Select>

          <Field.Select name="belt" label="Faixa / Graduação" sx={inputStyle}>
            {BELTS.map((belt) => (
              <MenuItem key={belt} value={belt}>{belt}</MenuItem>
            ))}
          </Field.Select>
        </Box>

        <Field.Text name="team" label="Nome da Academia / Equipe" sx={inputStyle} />

        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <CyberButton
            type="submit"
            disabled={isSubmitting}
            glowColor="warning"
          >
            {isSubmitting ? 'Enviando...' : 'INSCREVER ATLETA'}
          </CyberButton>
        </Stack>
      </Stack>
    </Form>
  );
}

// ----------------------------------------------------------------------
// COMPONENTE: FORMULÁRIO DA ACADEMIA
// ----------------------------------------------------------------------

function FormularioAcademia() {
  const theme = useTheme();
  const inputStyle = getInputStyle(theme);

  const methods = useForm<AcademiaSchemaType>({
    resolver: zodResolver(AcademiaSchema),
    defaultValues: { academyName: '', headCoach: '', email: '', phone: '', document: '', coachBelt: '' },
  });

  const { reset, handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.info('CADASTRO DE ACADEMIA', data);
      toast.success('Academia cadastrada com sucesso! Bem-vindos ao FFC.');
      reset();
    } catch (error) {
      toast.error('Erro ao enviar cadastro. Tente novamente.');
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'grid',
            rowGap: 3,
            columnGap: 2,
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          }}
        >
          <Field.Text name="academyName" label="Nome da Academia / Franquia" sx={inputStyle} />
          <Field.Text name="document" label="CNPJ ou CPF do Responsável" sx={inputStyle} />
          
          <Field.Text name="headCoach" label="Nome do Professor Responsável" sx={inputStyle} />
          <Field.Select name="coachBelt" label="Graduação do Professor" sx={inputStyle}>
            {BELTS.map((belt) => (
              <MenuItem key={belt} value={belt}>{belt}</MenuItem>
            ))}
          </Field.Select>

          <Field.Text name="email" label="E-mail Comercial" sx={inputStyle} />
          <Field.Text name="phone" label="Telefone / WhatsApp Comercial" sx={inputStyle} />
        </Box>

        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <CyberButton
            type="submit"
            disabled={isSubmitting}
            glowColor="info"
          >
            {isSubmitting ? 'Enviando...' : 'CADASTRAR ACADEMIA'}
          </CyberButton>
        </Stack>
      </Stack>
    </Form>
  );
}

// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL (HUB DE INSCRIÇÃO)
// ----------------------------------------------------------------------

export function InscricaoForm() {
  const theme = useTheme();
  const searchParams = useSearchParams();
  
  const [currentTab, setCurrentTab] = useState(0);

  // Lê a URL logo na montagem para ver se deve forçar a aba de Academia
  useEffect(() => {
    if (searchParams.get('tab') === 'academia') {
      setCurrentTab(1);
    }
  }, [searchParams]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <CyberCard sx={{ p: { xs: 3, md: 5 }, maxWidth: 800, mx: 'auto', width: '100%' }}>
      
      {/* CABEÇALHO */}
      <Typography
        variant="h4"
        sx={{
          mb: 1,
          fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
          color: currentTab === 0 ? theme.palette.warning.main : theme.palette.info.main,
          textTransform: 'uppercase',
          textAlign: 'center',
          transition: 'color 0.4s ease',
          textShadow: `0 0 20px ${alpha(currentTab === 0 ? theme.palette.warning.main : theme.palette.info.main, 0.4)}`,
        }}
      >
        PORTAL DE INSCRIÇÃO
      </Typography>
      <Typography variant="body2" sx={{ color: 'grey.500', textAlign: 'center', mb: 4 }}>
        Selecione se você quer se registrar individualmente ou registrar a sua matriz.
      </Typography>

      {/* SELETOR DE MODOS (TABS) */}
      <Tabs 
        value={currentTab} 
        onChange={handleChangeTab} 
        variant="fullWidth"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: currentTab === 0 ? theme.palette.warning.main : theme.palette.info.main,
            boxShadow: `0 0 10px ${alpha(currentTab === 0 ? theme.palette.warning.main : theme.palette.info.main, 0.5)}`,
          },
        }}
      >
        <Tab 
          icon={<Iconify icon={"solar:user-bold" as any} width={24} />} 
          iconPosition="start"
          label="SOU ATLETA" 
          sx={{
            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
            fontWeight: 'bold',
            color: 'grey.500',
            '&.Mui-selected': { color: theme.palette.warning.main },
          }}
        />
        <Tab 
          icon={<Iconify icon={"solar:buildings-bold" as any} width={24} />} 
          iconPosition="start"
          label="SOU ACADEMIA" 
          sx={{
            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
            fontWeight: 'bold',
            color: 'grey.500',
            '&.Mui-selected': { color: theme.palette.info.main },
          }}
        />
      </Tabs>

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {currentTab === 0 && <FormularioAtleta />}
      {currentTab === 1 && <FormularioAcademia />}
      
    </CyberCard>
  );
}
