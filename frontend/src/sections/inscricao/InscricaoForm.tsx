'use client';

import { z as zod } from 'zod';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { Form, Field } from 'src/components/hook-form';
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

const BELTS = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta', 'Coral', 'Vermelha'];

const INFLUENCERS = ['N/A', 'FFC Oficial'];

// ----------------------------------------------------------------------
// FUNÇÕES DE MÁSCARA (AUTO-FORMATAÇÃO)
// ----------------------------------------------------------------------

function formatDocument(value: string) {
  if (!value) return '';
  const v = value.replace(/\D/g, ''); // Remove tudo que não for dígito
  if (v.length <= 11) {
    // Máscara CPF: 000.000.000-00
    return v
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2');
  }
  // Máscara CNPJ: 00.000.000/0001-00
  return v
    .slice(0, 14)
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2');
}

function formatPhone(value: string) {
  if (!value) return '';
  const v = value.replace(/\D/g, '');
  if (v.length > 10) {
    // Celular: (00) 00000-0000
    return v.slice(0, 11).replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (v.length > 6) {
    // Fixo: (00) 0000-0000
    return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (v.length > 2) {
    return v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else if (v.length > 0) {
    return v.replace(/^(\d{0,2})/, '($1');
  }
  return v;
}

// ----------------------------------------------------------------------
// SCHEMAS E TIPOS (ZOD)
// ----------------------------------------------------------------------

// Regex exige o formato final mascarado
const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const docRegex = /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;

const AtletaSchema = zod.object({
  fullName: zod
    .string()
    .trim()
    .min(3, { message: 'Nome completo deve ter pelo menos 3 caracteres' }),
  email: zod
    .string()
    .trim()
    .min(1, { message: 'E-mail é obrigatório' })
    .email({ message: 'E-mail inválido' }),
  phone: zod
    .string()
    .trim()
    .regex(phoneRegex, { message: 'Formato inválido. Ex: (11) 99999-9999' }),
  document: zod.string().trim().regex(docRegex, { message: 'Digite um CPF ou CNPJ válido' }),
  category: zod.string().min(1, { message: 'Selecione uma categoria de peso' }),
  belt: zod.string().min(1, { message: 'Selecione a sua faixa/graduação' }),
  team: zod.string().trim().min(2, { message: 'Nome da academia ou equipe é obrigatório' }),
  acceptTerms: zod.literal(true, {
    errorMap: () => ({ message: 'Você precisa aceitar os termos de ativação.' }),
  }),
  referralCode: zod.string().trim().optional(),
});

type AtletaSchemaType = zod.infer<typeof AtletaSchema>;

const AcademiaSchema = zod.object({
  academyName: zod.string().trim().min(2, { message: 'Nome da academia é obrigatório' }),
  headCoach: zod.string().trim().min(3, { message: 'Nome do professor é obrigatório' }),
  email: zod
    .string()
    .trim()
    .min(1, { message: 'E-mail comercial é obrigatório' })
    .email({ message: 'E-mail inválido' }),
  phone: zod
    .string()
    .trim()
    .regex(phoneRegex, { message: 'Formato inválido. Ex: (11) 99999-9999' }),
  document: zod.string().trim().regex(docRegex, { message: 'Digite um CPF ou CNPJ válido' }),
  coachBelt: zod.string().min(1, { message: 'Selecione a graduação do professor' }),
  acceptTerms: zod.literal(true, {
    errorMap: () => ({ message: 'Você precisa aceitar os termos de ativação.' }),
  }),
  referralCode: zod.string().trim().optional(),
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

function FormularioAtleta({ onSuccess }: { onSuccess: () => void }) {
  const theme = useTheme();
  const inputStyle = getInputStyle(theme);

  const methods = useForm<AtletaSchemaType>({
    resolver: zodResolver(AtletaSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      document: '',
      category: '',
      belt: '',
      team: '',
      acceptTerms: undefined as any,
      referralCode: '',
    },
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;
  const searchParams = useSearchParams();

  // Preenchimento Automático do Código de Indicação (Link de Afiliado)
  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setValue('referralCode', ref, { shouldValidate: true, shouldDirty: true });
    }
  }, [searchParams, setValue]);

  // Monitores para aplicar a máscara em tempo real
  const phoneVal = watch('phone');
  const docVal = watch('document');

  useEffect(() => {
    if (phoneVal) {
      const formatted = formatPhone(phoneVal);
      if (phoneVal !== formatted) {
        setValue('phone', formatted, { shouldValidate: true, shouldDirty: true });
      }
    }
  }, [phoneVal, setValue]);

  useEffect(() => {
    if (docVal) {
      const formatted = formatDocument(docVal);
      if (docVal !== formatted) {
        setValue('document', formatted, { shouldValidate: true, shouldDirty: true });
      }
    }
  }, [docVal, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.info('CADASTRO DE ATLETA', data);
      onSuccess();
    } catch (error) {
      toast.error('Erro ao enviar. Tente novamente.');
    }
  });

  return (
    <FormProvider {...methods}>
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
            <Field.Text name="document" label="CPF" sx={inputStyle} type="tel" />

            <Field.Text name="email" label="E-mail" sx={inputStyle} type="email" />
            <Field.Text name="phone" label="Telefone / WhatsApp" sx={inputStyle} type="tel" />

            <Field.Select name="category" label="Categoria de Peso" sx={inputStyle}>
              {CATEGORIES.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Field.Select>

            <Field.Select name="belt" label="Faixa / Graduação" sx={inputStyle}>
              {BELTS.map((belt) => (
                <MenuItem key={belt} value={belt}>
                  {belt}
                </MenuItem>
              ))}
            </Field.Select>
            <Field.Text name="team" label="Nome da Equipe" sx={inputStyle} />
          </Box>

          <Box sx={{ mt: 1 }}>
            <Field.Autocomplete
              name="referralCode"
              label="Código de Indicação"
              placeholder="Ex: SANDRO20 ou Mica Galvão"
              options={INFLUENCERS}
              freeSolo
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Field.Checkbox
              name="acceptTerms"
              label={
                <>
                  Li e aceito os{' '}
                  <Link
                    component={RouterLink}
                    href={paths.terms}
                    target="_blank"
                    rel="noopener"
                    color="warning.main"
                    underline="always"
                  >
                    Termos de Uso
                  </Link>{' '}
                  e o pagamento da taxa de ativação da conta.
                </>
              }
              sx={{
                color: 'grey.300',
                '& .MuiTypography-root': { fontSize: '0.875rem' },
              }}
            />
          </Box>

          <Stack alignItems="flex-end" sx={{ mt: 3 }}>
            <CyberButton
              type="submit"
              disabled={isSubmitting}
              glowColor="warning"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              {isSubmitting ? 'PROCESSANDO...' : 'SOLICITAR ACESSO'}
            </CyberButton>
          </Stack>
        </Stack>
      </Form>
    </FormProvider>
  );
}

// ----------------------------------------------------------------------
// COMPONENTE: FORMULÁRIO DA ACADEMIA
// ----------------------------------------------------------------------

function FormularioAcademia({ onSuccess }: { onSuccess: () => void }) {
  const theme = useTheme();
  const inputStyle = getInputStyle(theme);

  const methods = useForm<AcademiaSchemaType>({
    resolver: zodResolver(AcademiaSchema),
    defaultValues: {
      academyName: '',
      headCoach: '',
      email: '',
      phone: '',
      document: '',
      coachBelt: '',
      acceptTerms: undefined as any,
      referralCode: '',
    },
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;
  const searchParams = useSearchParams();

  // Preenchimento Automático do Código de Indicação (Link de Afiliado)
  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setValue('referralCode', ref, { shouldValidate: true, shouldDirty: true });
    }
  }, [searchParams, setValue]);

  // Monitores para aplicar a máscara em tempo real
  const phoneVal = watch('phone');
  const docVal = watch('document');

  useEffect(() => {
    if (phoneVal) {
      const formatted = formatPhone(phoneVal);
      if (phoneVal !== formatted) {
        setValue('phone', formatted, { shouldValidate: true, shouldDirty: true });
      }
    }
  }, [phoneVal, setValue]);

  useEffect(() => {
    if (docVal) {
      const formatted = formatDocument(docVal);
      if (docVal !== formatted) {
        setValue('document', formatted, { shouldValidate: true, shouldDirty: true });
      }
    }
  }, [docVal, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.info('CADASTRO DE ACADEMIA', data);
      onSuccess();
    } catch (error) {
      toast.error('Erro ao enviar cadastro. Tente novamente.');
    }
  });

  return (
    <FormProvider {...methods}>
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
            <Field.Text name="academyName" label="Nome da Academia" sx={inputStyle} />
            <Field.Text name="document" label="CNPJ ou CPF" sx={inputStyle} type="tel" />

            <Field.Text name="headCoach" label="Nome do Professor" sx={inputStyle} />
            <Field.Select name="coachBelt" label="Graduação do Professor" sx={inputStyle}>
              {BELTS.map((belt) => (
                <MenuItem key={belt} value={belt}>
                  {belt}
                </MenuItem>
              ))}
            </Field.Select>

            <Field.Text name="email" label="E-mail" sx={inputStyle} type="email" />
            <Field.Text name="phone" label="Telefone / WhatsApp" sx={inputStyle} type="tel" />
          </Box>

          <Box sx={{ mt: 1 }}>
            <Field.Autocomplete
              name="referralCode"
              label="Código de Indicação"
              placeholder="Ex: SANDRO20 ou Mica Galvão"
              options={INFLUENCERS}
              freeSolo
              sx={inputStyle}
            />
          </Box>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Field.Checkbox
              name="acceptTerms"
              label={
                <>
                  Li e aceito os{' '}
                  <Link
                    component={RouterLink}
                    href={paths.terms}
                    target="_blank"
                    rel="noopener"
                    color="info.main"
                    underline="always"
                  >
                    Termos de Uso
                  </Link>{' '}
                  e o pagamento da taxa de registro da academia.
                </>
              }
              sx={{
                color: 'grey.300',
                '& .MuiTypography-root': { fontSize: '0.875rem' },
              }}
            />
          </Box>

          <Stack alignItems="flex-end" sx={{ mt: 3 }}>
            <CyberButton
              type="submit"
              disabled={isSubmitting}
              glowColor="info"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              {isSubmitting ? 'PROCESSANDO...' : 'SOLICITAR ACESSO'}
            </CyberButton>
          </Stack>
        </Stack>
      </Form>
    </FormProvider>
  );
}

// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL (HUB DE INSCRIÇÃO)
// ----------------------------------------------------------------------

export function InscricaoForm() {
  const theme = useTheme();
  const searchParams = useSearchParams();

  const [currentTab, setCurrentTab] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lê a URL logo na montagem para ver se deve forçar a aba de Academia
  useEffect(() => {
    if (searchParams.get('tab') === 'academia') {
      setCurrentTab(1);
    }
  }, [searchParams]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  // TELA DE SUCESSO (PÓS-ENVIO)
  if (isSuccess) {
    return (
      <CyberCard
        sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', maxWidth: 800, mx: 'auto', width: '100%' }}
      >
        <Iconify icon="solar:check-circle-bold" width={80} sx={{ color: 'success.main', mb: 3 }} />

        <Typography
          variant="h3"
          sx={{
            color: 'common.white',
            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
            mb: 2,
          }}
        >
          SOLICITAÇÃO RECEBIDA!
        </Typography>

        <Typography variant="body1" sx={{ color: 'grey.400', mb: 4, px: { xs: 0, md: 5 } }}>
          Seu cadastro foi realizado com sucesso! Para garantir o seu acesso ao Aplicativo FFC,
          enviamos o seu comprovante de inscrição junto com o boleto de ativação da conta
          diretamente para o seu <strong>WhatsApp</strong> e E-mail.
          <br />
          <br />
          Assim que o pagamento for confirmado, seu perfil será liberado!
        </Typography>

        <CyberButton
          glowColor="success"
          onClick={() => (window.location.href = '/')} // Redireciona para Home
          sx={{ mt: 2, width: { xs: '100%', sm: 'auto' } }}
        >
          VOLTAR PARA A HOME
        </CyberButton>
      </CyberCard>
    );
  }

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
      <Typography variant="body2" sx={{ color: 'grey.400', textAlign: 'center', mb: 4 }}>
        Selecione se você quer se registrar individualmente ou registrar a sua matriz.
      </Typography>

      {/* SELETOR DE MODOS (TABS) */}
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        variant="fullWidth"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor:
              currentTab === 0 ? theme.palette.warning.main : theme.palette.info.main,
            boxShadow: `0 0 10px ${alpha(currentTab === 0 ? theme.palette.warning.main : theme.palette.info.main, 0.5)}`,
          },
        }}
      >
        <Tab
          icon={<Iconify icon={'solar:user-bold' as any} width={24} />}
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
          icon={<Iconify icon={'solar:buildings-bold' as any} width={24} />}
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
      {currentTab === 0 && <FormularioAtleta onSuccess={() => setIsSuccess(true)} />}
      {currentTab === 1 && <FormularioAcademia onSuccess={() => setIsSuccess(true)} />}
    </CyberCard>
  );
}
